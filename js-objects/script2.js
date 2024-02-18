let car1 = {
  brand: "Audi",
  hp: 150,
  details: {
    registrationNumber: "B111JSC",
    series: "KUHSAFKJH",
  },
};

// shallow copy below
let car2 = car1;

car2.hp = 250;

console.log(car1);
console.log(car2);

let car3 = { ...car1 };
car3.brand = "Volkswagen";
car1.hp = 183;

car3.details.series = 111111;

console.log(car3);
