// Se da API-ul https://api.chucknorris.io/jokes/random
// trebuie sa il apelam si sa il afisam in consola

// fetch("https://api.chucknorris.io/jokes/random").then((response) => {
//   response.json().then((users) => {
//     console.log(users);
//   });
// });

// fetchApi();
// async function fetchApi() {
//   const response = await fetch("https://api.chucknorris.io/jokes/random");
//   const body = await response.json();
//   console.log(body);
// }

// Apoi, folosindu-te de DOM, adauga glumele, imaginile in pagina

// const jokeContainer = document.getElementById("joke");
// const refreshJokeButton = document.getElementById("refresh");
// const clearHistoryButton = document.getElementById("clear");
// const jokesHistoryContainer = document.getElementById("jokes-history");

// let jokesHistory = [];

// const jokeImages = [
//   "https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg",
//   "https://m.media-amazon.com/images/M/MV5BYmMwMTAwNjQtN2ZhMS00NmFjLWI0YmEtOWRlZmE3ZTM5YjljXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
//   "https://m.media-amazon.com/images/M/MV5BMWMxMDIxYjMtNTY5Yi00YmJhLThhMTUtZDBlMmJjZjcwN2I5XkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg",
// ];

// fetchJoke();

// async function fetchJoke() {
//   const response = await fetch("https://api.chucknorris.io/jokes/random");
//   const joke = await response.json();

//   addJokeToUI(joke);
//   addJokeToHistory(joke);
// }

// function addJokeToUI(joke) {
//   jokeContainer.innerHTML = "";

//   const image = document.createElement("img");
//   image.setAttribute(
//     "src",
//     jokeImages[Math.floor(Math.random() * jokeImages.length)]
//   );

//   const jokeText = document.createElement("p");
//   jokeText.innerText = joke.value;

//   jokeContainer.appendChild(image);
//   jokeContainer.appendChild(jokeText);
// }

// function addJokeToHistory(joke) {
//   jokesHistory.push(joke);
//   jokesHistoryContainer.innerHTML = "";

//   for (let jokeItem of jokesHistory) {
//     const jokeElement = document.createElement("div");

//     const image = document.createElement("img");
//     image.setAttribute(
//       "src",
//       jokeImages[Math.floor(Math.random() * jokeImages.length)]
//     );

//     const jokeText = document.createElement("p");
//     jokeText.innerText = joke.value;

//     jokeElement.appendChild(image);
//     jokeElement.appendChild(jokeText);

//     jokesHistoryContainer.appendChild(jokeElement);
//   }
// }

// refreshJokeButton.addEventListener("click", () => {
//   fetchJoke();
// });

// clearHistoryButton.addEventListener("click", () => {
//   jokesHistoryContainer.innerHTML = "";
//   jokesHistory = [];
// });

const jokeContainer = document.getElementById("joke");
const refreshJokeButton = document.getElementById("refresh");
const clearHistoryButton = document.getElementById("clear");
const jokesHistoryContainer = document.getElementById("jokes-history");

const jokeImages = [
  "https://chuck-a-joke.netlify.app/assets/images/cards/chuck-norris-0.jpg",
  "https://chuck-a-joke.netlify.app/assets/images/cards/chuck-norris-1.jpg",
  "https://chuck-a-joke.netlify.app/assets/images/cards/chuck-norris-2.jpg",
];

fetchJoke();

async function fetchJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const joke = await response.json();

  addJokeToUI(joke);
  addJokeToHistory(joke);
}

function addJokeToUI(joke) {
  jokeContainer.innerHTML = "";

  const image = document.createElement("img");
  image.setAttribute(
    "src",
    jokeImages[Math.floor(Math.random() * jokeImages.length)]
  );

  const jokeText = document.createElement("p");
  jokeText.innerText = joke.value;

  jokeContainer.appendChild(image);
  jokeContainer.appendChild(jokeText);
}

function addJokeToHistory(joke) {
  const jokeElement = document.createElement("div");

  const image = document.createElement("img");
  image.setAttribute(
    "src",
    jokeImages[Math.floor(Math.random() * jokeImages.length)]
  );

  const jokeText = document.createElement("p");
  jokeText.innerText = joke.value;

  jokeElement.appendChild(image);
  jokeElement.appendChild(jokeText);

  jokesHistoryContainer.appendChild(jokeElement);
}

refreshJokeButton.addEventListener("click", () => {
  fetchJoke();
});

clearHistoryButton.addEventListener("click", () => {
  jokesHistoryContainer.innerHTML = "";
});
