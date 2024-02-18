// Prima data definim pachetul si numarul de jucatori
const Tarotdeck = [
  { name: "Strength", meaning: "Power", time: "Past" },
  { name: "Emperor", meaning: "Leader", time: "Present" },
  { name: "Death", meaning: "Change", time: "Present" },
  { name: "Temperance", meaning: "Patience", time: "Future" },
  { name: "Tower", meaning: "Challenge", time: "Future" },
  { name: "Justice", meaning: "Fairplay", time: "Past" },
  { name: "Lovers", meaning: "Relationship", time: "Present" },
  { name: "Fortune", meaning: "Money", time: "Future" },
  { name: "Empress", meaning: "Mother", time: "Present" },
  { name: "Fool", meaning: "Bravery", time: "Future" },
  { name: "Moon", meaning: "Conflict", time: "Past" },
];

function shuffleDeck() {
  for (let i = Tarotdeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [Tarotdeck[i], Tarotdeck[j]] = [Tarotdeck[j], Tarotdeck[i]];
  }
}

shuffleDeck();
console.log(Tarotdeck);

function simulateTarotreading() {
  console.log("---Tarot Card Reading---");
  for (let i = 0; i < 5; i++) {
    const randomcard = Tarotdeck[i];
    console.log(
      "You received the card named ",
      randomcard.name,
      "which represents ",
      randomcard.meaning,
      "and the time shown is",
      randomcard.time
    );
  }
}

simulateTarotreading();
