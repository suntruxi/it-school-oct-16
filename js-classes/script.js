console.log(this);
function sayHello() {
  console.log("Hello", this);
}

sayHello();

function PersonProfile(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;

  this.greet = function () {
    console.log("Salut! Eu sunt ${this.name}");
  };

  this.showThis = function () {
    console.log(this);
  };
}

const person1 = new PersonProfile("Andrei", 10, "Arad");
const person2 = new PersonProfile("Mihaela", 24, "Cluj");

person1.greet();
person1.showThis();

person2.greet();
person2.showThis();

console.log(Object.prototype);

PersonProfile.prototype.functieInPlus = function () {
  console.log("Eu sunt o functie in plus");
};

person1.functieInPlus();

Array.prototype.showFirstAndLastElement = function () {
  console.log(this[0], this[this.length - 1]);
};

Array.prototype.getHighestNumber = function () {
  let max = this[0];

  for (let i = 1; i < this.length; i++) {
    if (this[i] > max) {
      max = this[i];
    }
  }
  return max;
};

const numbers = [1, 2, 3, 4];
numbers.showFirstAndLastElement();

console.log(numbers.getHighestNumber());
