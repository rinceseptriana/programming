// TUGAS 

// bikin 1 array ; isi 1 - 10
// const nilai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// bikin pengulangan untuk memfilter ganjil atau genap


const nilai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ganjil = [];
const genap = [];

// Menggunakan pengulangan untuk memfilter angka ganjil atau genap
for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] % 2 === 0) {
        genap.push(nilai[i]); 
    } else {
        ganjil.push(nilai[i]); 
    }
}

console.log("Angka Ganjil: ", ganjil); 
console.log("Angka Genap: ", genap); 

