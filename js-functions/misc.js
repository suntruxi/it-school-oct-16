const number1 = "123";
const number2 = "6539.764";

console.log(parseFloat(number1));
console.log(parseFloat(number2));

console.log(parseFloat(number1) === 123);

console.log(Math.max(...[1, 20, 876, -40]));

const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [6, 7, 8, 9, 10];

console.log([...numbers1, ...numbers2]);

const person = {
  name: "Mihai",
  age: 20,
  address: {
    street: "Nume Strada",
    number: "10",
  },
};

function generateSibling(person, name, age) {
  return { ...person, name: name, age: age };
}

console.log(generateSibling(person, "Ioana", 8));
