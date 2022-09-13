const calculateExpense = () => {
  const incomeString = document.querySelector("#income").value;
  const income = parseInt(incomeString);
  const foodString = document.querySelector("#food").value;
  const food = parseInt(foodString);
  const rentString = document.querySelector("#rent").value;
  const rent = parseInt(rentString);
  const clothesString = document.querySelector("#clothes").value;
  const clothes = parseInt(clothesString);

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense =
    food + rent + clothes;

  // calculate balance
  const balance = income - expense;
  //   validate income
  if (expense > income) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  // calculate saving amount
  const savePercentageString = document.getElementById("save").value;
  const savePercentage = parseInt(savePercentageString);
  const incomeString = document.querySelector("#income").value;
  const income = parseInt(incomeString);
//   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
  }
  const savingAmount = (savePercentage / 100) * income;
  console.log("Income: ", income);

  // calculate remaining balance
  const balance = document.getElementById("balance").innerText;
  const remainingBalance = balance - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
};
