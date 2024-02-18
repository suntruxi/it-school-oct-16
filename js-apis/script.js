// https://random-data-api.com/api/v2/users

// !!!! O varianta in care nu blocam codul din a se executa mai departe (vezi console log inainte vs dupa) !!!!

// console.log("Inainte de apelare API");

// fetch("https://random-data-api.com/api/v2/users?size=10").then((response) => {
//   response.json().then((users) => {
//     console.log(users);
//   });
// });

// console.log("Dupa apelare API");

//

// !!!!  O varianta in care de data asta vrem sa asteptam dupa acesti useri (vezi console log inainte vs dupa) !!!!

// Pt a putea folosi await, avem nevoie si de o functie asincrona

console.log("Inainte de apelare API");

fetchUsers();

console.log("Dupa apelare API");

// !!!! putem pune si timer pe functie !!!!
// setTimeout(() => {
//   fetchUsers();
// }, 1000);

async function fetchUsers() {
  console.log("before fetch");
  const response = await fetch(
    "https://random-data-api.com/api/v2/users?size=10"
  );
  // >> ca sa adaugi un nou parametru in URL se pune &, iar intotdeauna ? dupa primul parametru <<
  //   console.log(response);
  //   console.log("after fetch");
  const users = await response.json();

  //  >> JSON are scopul de a extrage body-ul(datele, informatiile) din response si de a-l transforma in obiect, altfel nu l-am putea accesa <<

  //   response.json().then((users) => {
  //     console.log(users);
  //   });
  console.log(users);

  //  >> ca sa extragi un user dintr-un index specific, poti scrie: <<
  // console.log(users[2]);
}
