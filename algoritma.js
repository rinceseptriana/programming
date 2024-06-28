// let nilai = 1;
// let grade;

// if (nilai < 50) {
//     grade = 'E';
// } else if (nilai >= 50 && nilai<= 60) {
//     grade = 'D';
// } else if (nilai >= 61 && nilai<= 80) {
//     grade = 'C';
// } else {
//     grade = 'A';
// }

// console.log(`Grade: ${grade}`);


// switch case


//Looping
// for (let i = 1; i <= 3; i++) {
//     console.log(`halo semua ${i}`);
// }


// let x = 1;
// while (x <= 10) {
//     console.log(`halo semua ${x}`);
//     x++;
// }



// const nilai =  [50, 70, 40, 100];
// console.log(`isi nilai sebelum: ${nilai}`);

// nilai.forEach((x) => {
//     if (x < 50) {
//         console.log(`nilai jelek ${x}`);
//     } else {
//         console.log(`nilai bagus ${x}`);
//     }  
// });


// nilai.forEach((value, index) => {
//     console.log(`index: ${index}, value: ${value}`);
//     nilai[index] = value + 10;
// })

// console.log(`isi nilai sesudah ditambah 10: ${nilai}`);


// const nilaiBaru = nilai.map((n) => {
//     return n + 10;
//     // penambahan hanya di index 0
//     // if (i === 0) {
//         // return x + 10;
//         // } else {
//         //     return x;
//         //   }
//         // }   
// })

// console.log(`nilai baru: ${nilaiBaru}`);


//FILTER
// const nilaiDibawah75 = nilai.filter((value, index) => {
//     return value < 75 && index < 3;
// });

// console.log(`nilai baru: ${nilaiDibawah75}`);


// TUGAS 

// bikin 1 array ; isi 1 - 10
// const nilai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// bikin pengulangan untuk memfilter ganjil atau genap


const nilai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ganjil = nilai.filter(function(angka) {
    return angka % 2 !== 0;
});

const genap = nilai.filter(function(angka) {
    return angka % 2 === 0;
});

console.log("Angka Ganjil: ", ganjil); 
console.log("Angka Genap: ", genap); 
