const numbers = [-1, 74, 2, -20, 10, 204, 86, 73, 90];

// for (let i = 0; i < 20; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log(i);
//   }
// }
function bubbleSort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);

console.log(numbers);

const numbers2 = [10, 5, 3, -7];

bubbleSort(numbers2);

console.log(numbers2);

let initialNumber = 24;
function addTenToNumber(initialNumber) {
  initialNumber = initialNumber + 10;
  return initialNumber;
}
addTenToNumber(initialNumber);
console.log(initialNumber);

const person = {
  name: "andrei",
  age: 10,
};

function happyBirthday(user) {
  user.age++;
}
happyBirthday(person);

console.log(person);

let numeFunctie = function (param1) {
  param1.age++;
};

let arrowFunction = (param1, param2) => {
  param1.age++;
};
numeFunctie(person);
arrowFunction(person);
console.log(person);
