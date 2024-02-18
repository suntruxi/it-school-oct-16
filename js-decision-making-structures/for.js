// for (let i = 10; i >= 0; i = i + 2);
// {
//   console.log(i);
// }

// Scrie o secventa care face suma primelor N numere
const N = 341;
let sum = 0;

for (let i = 1; i <= N; i++) {
  sum = sum + i;
}

console.log(sum);
