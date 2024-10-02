// ARRAY 1
// let n = prompt("n sonini kiriting");
// let toq = [];
// for (i = 0; i <= n; i++) {
//   if (i % 2 == 1) {
//     toq.push(i);
//   }
// }
// console.log(toq);
// ARRAY 2
// const mas = [4, 5, 7, 8, 6, 9];
// const newMas = [];
// for (i = 0; i <= mas.length; i++) {
//   if (mas[i] % 2 == 0) {
//     newMas.push(mas[i]);
//   }
// }
// console.log(newMas.reverse());
// ARRAY 3
// const arr = [4, 5, 7, 8, 6, 9];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i], arr[arr.length - (i + 1)]);
// }
// console.log(result);
// ARRAY 4
// const arr = [1, 6, 9, 5, 8, 10, 15];
// let k = 2;
// let l = 5;
// let sonlar = [];
// let result = 0;
// for (i = 0; i <= arr.length; i++) {
//   if (i >= k && i <= l) {
//     sonlar.push(arr[i]);
//     result += arr[i];
//   }
// }
// console.log(sonlar);
// console.log(`javob ${result}`);
// ARRAY 5
// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// let newMas = [];
// for (i = 0; i < arr.length; i++) {
//   if (!newMas.includes(arr[i])) {
//     newMas.push(arr[i]);
//   }
// }
// console.log(newMas);
// ARRAY 6
// let arr = [7, 4, 9, 2, 3, 1, 5];
// let max = 0;
// let min = 0;
// for (i = 0; i <= arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (min == 0) {
//     min = arr[i];
//   } else if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// const minIndex = arr.indexOf(min);
// const maxIndex = arr.indexOf(max);
// arr[minIndex] = max;
// arr[maxIndex] = min;
// console.log(arr);
// ARRAY 7
// let arr = [1, 5, 8, 9, 10];
// arr.push(arr[0]);
// arr.shift();
// console.log(arr);

// UYGA VAZIFA
// Array 1
// let n = 5;
// let newN = [];
// for (i = 1; i <= n; i++) {
//   newN.push(2 ** i);
// }
// console.log(newN);
// Array 2
// let n = 6;
// let a = 2;
// let b = 3;
// let result = [];
// result[0] = a;
// result[1] = b;

// for (let i = 0; i < n; i++) {
//   let counter = 0;
//   for (j = 0; j < result.length; j++) {
//     counter += result[j];
//   }
//   result.push(counter);
// }
// console.log(result);
// Array 3
// let n = 5;
// let a = [];
// let teskari = [];
// for (i = 0; i <= n; i++) {
//   a.push(i);
// }
// for (i = n; i >= 0; i--) {
//   teskari.push(i);
// }
// console.log(a);
// console.log(teskari);
// Array 4
// let n = [4, 5, 7, 8, 6, 9];
// let toq = [];
// let counter = 0;
// for (i = 1; i < n.length; i++) {
//   if (n[i] % 2 == 1) {
//     counter += 1;
//     toq.push(n[i]);
//   }
// }
// console.log(toq);
// console.log(`toqlar soni: ${counter} ta`);
// Array 5
// let n = [4, 5, 7, 8, 6, 9];
// let k = [];
// for (i = 0; i < n.length; i++) {
//   if (n[i] % 2 == 0) {
//     k.push(n[i]);
//   }
// }
// for (i = n.length; i > 0; i--) {
//   if (n[i] % 2 == 1) {
//     k.push(n[i]);
//   }
// }
// console.log(k);
// Array 6
// let k = [3, 4, 5, 6, 7, 8, 9];
// for (let i = 1; i < k.length; i += 2) {
//   console.log(k[i]);

// Array 7
// let k = [3, 4, 5, 6, 7, 8, 9];
// for (let i = k.length - 1; i > 0; i -= 2) {
//   console.log(k[i]);
// }

// console.log(k);
// Array 8
// let n = prompt("n sonini kiriting");
// let k = [];
// for (i = 0; i < n; i++) {
//   if (i % 2 == 0) {
//     k.push(i);
//   }
// }
// for (i = 0; i < n; i++) {
//   if (i % 2 == 1) {
//     k.push(i);
//   }
// }
// for (i = n; i > 0; i--) {}
// console.log(k);
// Array 9
// let n = prompt("n sonini kiriting");

// let k = [];
// for (i = 0; i < n; i++) {
//   if (i % 2 == 1) {
//     k.push(i);
//   }
// }
// for (i = n; i > 0; i--) {
//   if (i % 2 == 0) {
//     k.push(i);
//   }
// }
// console.log(k);
// ARRAY 10

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let n = arr.length;
// for (let i = 0; i < Math.ceil(n / 2); i++) {
//   if (i < n) {
//     console.log(arr[i]);
//   }
//   if (n - 1 - i > i) {
//     console.log(arr[n - 1 - i]);
//   }
// }
