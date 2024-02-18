const person = {
  name: "Mihai",
  age: 12,
  city: "Timisoara",
};

person.age = 29;
person.country = "Madagascar";

delete person.name;

console.log(person);

for (let proprietate in person) {
  if (proprietate === "age") {
    console.log(proprietate, person[proprietate]);
  }
}

const masina = {
  marca: "Mercedes-Benz",
  model: "S 580",
  an: 2023,
  pret: "$ 167.379",
  kilometri: 8500,
  cai: 500,
  combustibil: "diesel",
  lastRevizie: "25 ianuarie 2024",
  nextRevizie: "25 ianuarie 2025",
};

delete masina.lastRevizie;
masina.cai = 300;
masina.inmatriculare = "12 ianuarie 2023";

console.log(masina);

// const date = {
//   HH: 18,
//   MM: 49,
//   SS: 53,
// };

// console.log(HH + MM + SS);
