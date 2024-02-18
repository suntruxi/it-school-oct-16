let sesiunea = "Sesiunea 17";

function resetText() {
  sesiunea = "";
}

resetText();
console.log(sesiunea);

function renameTextTo(text, newName) {
  text = newName;
  return text;
}

sesiunea = renameTextTo(sesiunea, "Sesiunea 18");

console.log(sesiunea);
