let randomVariable = 20;

if (true) {
  console.log("if", randomVariable);
}

function showRandomVariable() {
  console.log("function", randomVariable);
}

showRandomVariable();

if (true) {
  let randomVariableBlock = "KJAHDSJKDF";
  console.log(randomVariableBlock);

  if (true) {
    console.log(randomVariableBlock);
  }
}

// console.log(randomVariableBlock);

function functionScope() {
  const randomVariableFunction = true;
  console.log(randomVariableFunction);
  if (true) {
    console.log;
  }
}
