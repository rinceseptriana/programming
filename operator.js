//ARITMATIKA
//penjumlahan
const hasil = 1 + 2;
console.log(`hasil: ${hasil}`);

//pengurangan
const hasil2 = 1 - 2;
console.log(`hasil2: ${hasil2}`);

//perkalian
const hasil3 = 1 * 2;
console.log(`hasil3: ${hasil3}`);

//pangkat
const hasil4 = 1 ** 2;
console.log(`hasil4: ${hasil4}`);

//pembagian
const hasil5 = 1 / 2;
console.log(`hasil5: ${hasil5}`);

//modulus (sisa bagi)
const hasil6 = 5 % 2;
console.log(`hasil6: ${hasil6}`);

//increment | decrement (--)
let nilai = 2;
nilai++; //nilai--

console.log(`hasil7: ${nilai}`);

//dalam kurung
let hasil8 = (2 + 3) * 5;
console.log(`hasil8: ${hasil8}`);



//PENUGASAN
let x = 5;
// x = x + 2; 
x += 2; // -= | *= | /= dll.
console.log(`nilai: ${x}`);


//PERBANDINGAN
const y = 5 > 2;
console.log(`hasil: ${y}`);


// == hanya membandngkan nilai, === membandingkan samapai ke tipe datanya
const a = 2;
const b = '2';
const c = a == b; 
console.log(`hasil: $(hasil)`);


//LOGIKA
const ab = 5 > 2 && 3 > 2; //syarat AND : keduanya terpenuhi
// OR -> salah satu saja terpenuhi/benar
console.log(`hasil: ${ab}`);


const abc = !5 > 2; // ! -> NOT , membalikkan hasil (true jadi false, dan sebaliknya)
console.log(`hasil: ${ab}`);


//TERNARY (IF/ELSE)
if(1 < 3){
    console.log('betul');
} else {
    console.log('salah');
}


const aa = 1 < 3 ? 'benar' : 'salah'
console.log(`hasil: ${aa}`);


//TYPEOF -> cek tipe data dari suatu variabel
const s = 3; //array, object akan menjadi object
console.log(typeof s);

