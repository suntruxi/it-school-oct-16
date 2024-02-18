class PersonProfile {
  bornIn;

  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;

    this.bornIn = 2024 - age;
  }

  greet() {
    console.log(this);
    console.log("Salut! Eu sunt ${this.name}");
  }

  showMyAge() {
    console.log("Am${this.age} ani!");
  }
}

const person1 = new PersonProfile("Andrei", 10, "Arad");
person1.greet();
person1.showMyAge();

// Exercitiu

class Bank {
  constructor(name, swiftCode, country) {
    this.name = name;
    this.swiftCode = swiftCode;
    this.country = country;
    this.openAccounts = [];
  }

  createAccount(accountNumber, balance) {
    this.openAccounts.push({ accountNumber, balance });
    console.log(`Ati deschis contul ${accountNumber}`);
  }

  displayOpenAccounts() {
    console.log(`Totalul conturilor deschise la ${this.name}:`);
    this.openAccounts.forEach((account) =>
      console.log(
        `Account Number: ${account.accountNumber}, Balance: ${account.balance}`
      )
    );
  }

  displayNegativeBalanceAccounts() {
    const negativeBalanceAccounts = this.openAccounts.filter(
      (account) => account.balance < 0
    );
    console.log(`Urmatorul cont are sold negativ ${this.name}:`);
    negativeBalanceAccounts.forEach((account) =>
      console.log(
        `Account Number: ${account.accountNumber}, Balance: ${account.balance}`
      )
    );
  }
}

const myBank = new Bank("Banca Transilvania", "BTRL", "Romania");

myBank.createAccount("Cont Ruxandra Economii", 1000);
myBank.createAccount("Overdraft", -500);
myBank.createAccount("Cont Ruxandra General", 2000);

myBank.displayOpenAccounts();
myBank.displayNegativeBalanceAccounts();
