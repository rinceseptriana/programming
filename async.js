const async = require('async');

function luasPersegiPanjang(x, y, callback) {
    setTimeout(() => {
        const hasil = x * y;
        console.log(`Hasil Perkalian: ${x} * ${y} = ${hasil}`);
        callback(null, hasil);
    }, 1000);
}

function tambahLima(nilai, callback){
    setTimeout(() => {
        const hasil = nilai + 20;
        console.log(`Hasil Penambahan: Nilai Luas Persegi Panjang + 20 = ${hasil}`);
        callback(null, hasil);
    }, 1000);
}

async.series([
    (callback) => {
        luasPersegiPanjang(8, 2, (err, hasilPerkalian) => {
            if (err) {
                callback(err);
            } else {
                // Meneruskan fungsi
                tambahLima(hasilPerkalian, (err, hasilTambahan) => {
                    if (err) {
                        callback(err);
                    } else {
                        // Menggabungkan hasil dari luasPersegiPanjang dan tambahLima
                        callback(null, [hasilPerkalian, hasilTambahan]);
                    }
                });
            }
        });
    }
], (err, results) => {
    if(err) {
        console.error(`Error:`, err);
    } else {
        console.log('Semua Operasi Berhasil Dijalankan');
        console.log('Result:', results);
    }
});