// Scrie o secventa de cod care face suma cifrelor unui numar;
// let number = 36298;
// let sum = 0;

// console.log("Numarul este ", number);
// console.log("Suma este", sum);
// let iteration = 1;

// while (number !== 0) {
//   console.log("Iteratia", iteration);
//   console.log("Numarul este", number);
//   console.log("Suma este", sum);

//   sum = sum + (number % 10);
//   number = Math.floor(number / 10);

//   iteration++;
// }

// console.log("Suma finala: ", sum);

// Scrie o secventa care numara cate cifre contine un numar;
// let numar = 7452;
// let numarCifre = countDigits(numar);
// console.log("Numarul cifrelor din ", numar + "este" numarCifre);

let number = 7452;
let count = 0;

while (number !== 0) {
  count++;
  number = Math.floor(number / 10);
}

console.log("Numar cifre", count);
