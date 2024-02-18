const backgroundColors = [
  "blue",
  "red",
  "yellow",
  "purple",
  "brown",
  "pink",
  "grey",
  "black",
];

const area = document.querySelector(".area");

setTimeout(() => {
  area.style.backgroundColor =
    backgroundColors[Math.random() * backgroundColors.length];
}, 10000);

for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    console.log(i);
  }, 5000);
}
