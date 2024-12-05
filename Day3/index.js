// console.log("welcome back to");

// ganti default profile bagi teman2 yang pake windows
// ctrl + shift + P -> ketik aja terminal, pilih terminal: select default profile
// git bash

// variable => wadah suatu value/data

// tipe data
// string
let string1 = "ini string";

// number
let number1 = 32132;

// boolean = true or false
let bool1 = true;

//? Array
// Array itu adalah sebuah tipe data yang dapat menyimpan tipe data apapun
let string2 = "ini adalah string 2";
let array1 = ["ini string", 190, false, string2];
//               0           1     2       3

// console.log(array1[2]);

// let arrayOfArray = [
//   ["testing", 20, 100],
//   ["name", "udin"],
//   [["name", "testing"]],
// ];

// console.log(arrayOfArray[2][0][1]);

//? object => tipe data structured yang berbentuk key value pair

let object1 = {
  nama: "Radhea",
  age: 18,
  address: "Bandung",
  "dua kata": "ini dua kata",
};

// console.log(NaN);

// console.log(object1.nama); // cara akses yg 1 kata
// console.log(object1["age"]); // cara akses yg 1 kata/2 kata
// console.log(object1["dua kata"]); // cara akses yg 1 kata/2 kata

// contoh nanti data seperti ini biasanya
let data = [
  // array of object
  {
    name: "agus senang",
  },
  {
    name: "agus sedih",
  },
  {
    name: "agus pendiam",
  },
];

//? conditional

//contoh
// mau masak mie
// 1. siapkan alat masak
// 2. pilih mie nya
// 3. masak mienya
// 4a. kalau mienya goreng, maka kalian buang airnya
// 4b. kalau mienya kuah, maka kalian ambil airnya

// if (kondisi) {
//   statement
// }

// if (kondisi1) {
// statement 1 dijalankan ketika lolos kondisi1
// } else {
// statement 2 dijalankan ketika tidak masuk kondisi1
// }

// if (kondisi1) {
//   statement 1
// } else if (kondisi2) {
//   statement 2
// } else if (kondisi3) {
//   statement 3
// } else {
//   statement lainnya
// }

// let nilai = 80;

// if (nilai > 80) {
//   console.log("Student lulus");
// } else {
//   console.log("student tidak lulus");
// }

// let suhuBadan = 90;
// let pusing = false;

// if (suhuBadan >= 30 && pusing === true) {
//   console.log("minum obat");
// } else if (suhuBadan > 30 && pusing == false) {
//   console.log("pergi kerja");
// } else {
//   console.log("pergi kerja dengan senang hati");
// }

// let cuaca = "mendung";
// let payung = false;

// if (cuaca === "cerah") {
//   console.log("pergi main");
// } else if (cuaca === "hujan") {
//   if (payung === true) {
//     console.log("lanjut gas");
//   } else {
//     console.log("diam di rumah");
//   }
// } else {
//   console.log("check dulu perkiraan cuaca hari ini");
// }

//? looping
// console.log("Saya tidak akan melakukan hal ini lagi");
// console.log("Saya tidak akan melakukan hal ini lagi");
// console.log("Saya tidak akan melakukan hal ini lagi");
// console.log("Saya tidak akan melakukan hal ini lagi");
// console.log("Saya tidak akan melakukan hal ini lagi");
// console.log("Saya tidak akan melakukan hal ini lagi");
// console.log("Saya tidak akan melakukan hal ini lagi");
// console.log("Saya tidak akan melakukan hal ini lagi");

// for (inisialisasi; kondisi; expresi) {
//   statement
// }

// for (let i = 0; i < 10; i++) {
//   console.log("Saya tidak akan melakukan hal ini lagi");
// }

// for (let i = 0; i < 7; i++) {
//   if (i === 1) {
//     console.log("Aduh senin");
//   } else {
//     console.log("Yeay bukan senin");
//   }
// }

//? function itu digunakan untuk memanage codingan kalian agar dapat digunakan kembali
// function tujuan utamanya adalah untuk menulis kode 1 kali dan menjalankan berulan kali sesuai dengan yg kita mau

// function namaFunction (parameter: optional) {
//   block code
// }

// deklarasi function
// function sum() {
//   let result = 20 + 20;
//   console.log(result);
// }

// cara panggil function => invoke
// sum();

// function sum(number1, number2 = 10) {
//   let result = number1 + number2;
//   console.log(result);
// }

// sum(10, 5);
// sum(3, 3);
// sum(5);

// function dengan return
let hasilDariMultiply = multiply(10, 10);

console.log(hasilDariMultiply);

// return = untuk balikin data/hasil dari proses di dalam function => untuk digunakan kembali valuenya
function multiply(number1, number2) {
  let result = number1 * number2;
  return result;
}

// console.log(multiply(5, 5));

// console.log(hasilDariMultiply + 999);

// arrow function
// let namaFunction = (parameter: optional) => {
//   statement
// };

// function sifatnya hoisting
// dia bisa di deklarasikan sebelum atau sesudah invokasi
