let waterLevel = 67;

while (waterLevel > 0) {
  waterLevel = waterLevel - 2;

  if (waterLevel !== 0) {
    console.log("current water level is", waterLevel);
  } else {
    console.log("Congrats!");
  }
}

console.log("After while");

const numbers = [8, 6, 10, 22, 44, -55, 100, 110, 67, 54];
const currentIndex = 0;

while (currentIndex <= numbers.length - 1) {
  console.log(numbers[currentIndex]);
  currentIndex = currentIndex + 1;
}

//afiseaza toate numerele de la 1 la n

// const n = 24;
// let currentNumber = 1;

// while (n >= currentNumber) {
//   console.log(currentNumber);
//   currentNumber++;

// afiseaza toate numerele pare de la 1 la n
