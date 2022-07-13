//dataset
var data1 = [1, 1, 1, 2, 2, 4, 1, 1];
var object = {}; //variable object


//looping database
for (let i = 0; i < data1.length; i++) {
    if ( object[data1[i]] ) object[data1[i]]++;
    else object [data1[i]] = 1;
}

//buat variable penampung, key untuk angka, totalJumlahAngka
//looping object,
//cek objek dan variable jika objeck lebih besar dari variable penampung
//maka hasil value terbanyak sudah didapat, kita masukkan ke variable key beserta jumlahnya
let highest = 0;
let keyAngka, jumlahMunculAngka;

for (let key in object) {
    if (object[key] > highest) {
        highest = object[key];
        keyAngka = key;
        jumlahMunculAngka = object[key];
    }
}

//munculkan output
console.log(`total data paling banyak keluar adalah ${keyAngka} dengan jumlah ${jumlahMunculAngka}`)



var data2 = [2, 1, 2, 2, 2, 8, 1, 1];
var object2 = {};

//looping database2
for (let i = 0; i < data2.length; i++) {
    if ( object2[data2[i]] ) object2[data2[i]]++;
    else object2 [data2[i]] = 1;
}

//buat variable penampung, key untuk angka, totalJumlahAngka
//looping object,
//cek objek dan variable jika objeck lebih besar dari variable penampung
//maka hasil value terbanyak sudah didapat, kita masukkan ke variable key beserta jumlahnya
let highest2 = 0;
let keyAngka2, jumlahMunculAngka2;

for (let key in object2) {
    if (object2[key] > highest2) {
        highest2 = object2[key];
        keyAngka2 = key;
        jumlahMunculAngka2 = object2[key];
    }
}

//munculkan output
console.log(`total data paling banyak keluar adalah ${keyAngka2} dengan jumlah ${jumlahMunculAngka2}`)

var data3 = [3, 3, 3, 3, 2, 4, 1, 1];
var object3 = {};

//looping database3
for (let i = 0; i < data3.length; i++) {
    if ( object3 [data3[i]] ) object3[data3[i]]++;
    else object3 [data3[i]] = 1;
}

//buat variable penampung, key untuk angka, totalJumlahAngka
//looping object,
//cek objek dan variable jika objeck lebih besar dari variable penampung
//maka hasil value terbanyak sudah didapat, kita masukkan ke variable key beserta jumlahnya
let highest3 = 0;
let keyAngka3, jumlahMunculAngka3;

for (let key in object3) {
    if (object3[key] > highest3) {
        highest3 = object3[key];
        keyAngka3 = key;
        jumlahMunculAngka3 = object3[key];
    }
}

//munculkan output
console.log(`total data paling banyak keluar adalah ${keyAngka3} dengan jumlah ${jumlahMunculAngka3}`)