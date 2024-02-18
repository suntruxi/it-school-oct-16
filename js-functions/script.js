// const user = {
//   username: "ruxi",
//   subscription: "MEDIUM",
// };

// const pages = [
//   { name: "Homepage", subscriptions: ["LOW", "MEDIUM", "HIGH"] },
//   { name: "Artists", subscriptions: ["MEDIUM", "HIGH"] },
//   { name: "Lounge", subscriptions: ["HIGH"] },
//   { name: "Listen", subscriptions: ["LOW", "MEDIUM"] },
// ];

// // Vrem sa facem o secventa de cod care sa verifice daca utilizatorul are acces la o anumita pagina. De exemplu, pt a verifica daca are acces la pagina de Artists:

// for (let page of pages) {
//   if (page.name === "Lounge") {
//     // if (page.subscriptions.includes(user.subscription)) {
//     //   console.log("Utilizatorul are acces");
//     // } else {
//     //   console.log("Utilizatorul NU are acces");
//     // }
//     // mai sus este o alternativa la codul urmator, este o varianta mult mai simpla si preferata, insa cea de mai jos explica logica/ gandirea exercitiului
//     // --> plecam de la prezumtia ca nu are acces, apoi incepem sa dovedim ca are acces/subscriptie
//     let userHasAccess = false;
//     for (let subscription of page.subscriptions) {
//       if (subscription === user.subscription) {
//         userHasAccess = true;
//       }
//     }
//     if (userHasAccess) {
//       console.log("Utilizatorul are acces");
//     } else {
//       console.log("Utilizatorul NU are acces");
//     }
//   }
// }

// 1. Avem un utilizator, care are un username si o subscriptie. Subscriptia poate fi LOW, MEDIUM sau HIGH.
// 2. Avem o lista de pagini, iar fiecare pagina contine numele si o lista de subscriptii care pot accesa pagina.
// Sa se scrie o secventa de cod care verifica daca utilizatorul de la punctul 1 are acces pe baza subscriptiei la una din paginile de la punctul 2. Pagina este data.

const user = {
  username: "Ruxi",
  subscription: "FREE TRIAL",
};

const user2 = {
  username: "Catalin",
  subscription: "HIGH",
};

// Sa se scrie sau modifice o secventa de cod pt a verifica daca user2 are acces la pagina Lounge

const pages = [
  { name: "Homepage", subscriptions: ["LOW", "MEDIUM", "HIGH"] },
  { name: "Artists", subscriptions: ["MEDIUM", "HIGH"] },
  { name: "Lounge", subscriptions: ["HIGH"] },
  { name: "Listen", subscriptions: ["LOW", "MEDIUM"] },
];

// Daca utilizatorul are free trial, primeste acces automat, fara a se verifica subscriptiile necesare pt accesarea paginii

// Urmatoarea sintaxa trece prin fiecare variabila al arrayului de mai sus
for (let page of pages) {
  if (page.name === "Listen") {
    let userHasAccess = false;

    if (user.subscription === "free trial") {
      userHasAccess = true;
    }
    for (let acceptedSubscription of page.subscriptions) {
      if (acceptedSubscription === user.subscription) {
        userHasAccess = true;
      }
    }

    if (userHasAccess === true) {
      console.log("Utilizatorul are acces");
    } else {
      console.log("Utilizatorul NU are acces");
    }

    break;
  } else {
  }
}

for (let page of pages) {
  if (page.name === "Lounge") {
    let userHasAccess = false;
    for (let acceptedSubscription of page.subscriptions) {
      if (acceptedSubscription === user2.subscription) {
        userHasAccess = true;
      }
    }

    if (userHasAccess === true) {
      console.log("Utilizatorul are acces");
    } else {
      console.log("Utilizatorul NU are acces");
    }
  }
}
