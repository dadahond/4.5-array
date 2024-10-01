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
const arr = [4, 5, 7, 8, 6, 9];
const result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(arr[i], arr[arr.length - (i + 1)]);
}
console.log(result);
