const domStrings = {
  inputType: ".add__type",
  inputDescription: ".add__description",
  inputValue: ".add__value",
  inputButton: ".add__btn",
  incomeContainer: ".income__list",
  expensesContainer: ".expenses__list",
  itemDeleteButton: ".item__delete--btn",
  budgetLabel: ".budget__value",
  budgetIncomeLabel: ".budget__income--value",
  budgetExpenseLabel: ".budget__expenses--value",
  budgetPercentageLabel: ".budget__expenses--percentage",
};

export function getInput() {
  return {
    type: document.querySelector(domStrings.inputType).value,
    description: document.querySelector(domStrings.inputDescription).value,
    value: parseFloat(document.querySelector(domStrings.inputValue).value),
  };
}

export function addListItem(obj, type) {
  var html, newHTML, element;
  if (type === "inc") {
    element = domStrings.incomeContainer;
    html =
      '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
  } else {
    element = domStrings.expensesContainer;
    html =
      '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
  }
  newHTML = html.replace("%id%", obj.id);
  newHTML = newHTML.replace("%description%", obj.description);
  newHTML = newHTML.replace("%value%", obj.value);
  var wrapper = document.createElement("div");
  wrapper.innerHTML = newHTML;
  document.querySelector(element).insertAdjacentElement("beforeend", wrapper);
}

export function clearFields() {
  var fields;
  fields = document.querySelectorAll(
    domStrings.inputDescription + "," + domStrings.inputValue
  );
  var fieldsArray = [...fields];
  fieldsArray.forEach((field) => {
    field.value = "";
  });
}

export function displayBudget(obj) {
  document.querySelector(domStrings.budgetLabel).textContent = obj.budget;
  document.querySelector(domStrings.budgetPercentageLabel).textContent =
    obj.budgetPercentage;
  document.querySelector(domStrings.budgetIncomeLabel).textContent =
    obj.totalInc;
  document.querySelector(domStrings.budgetExpenseLabel).textContent =
    obj.totalExp;

  if (obj.budgetPercentage > 0) {
    document.querySelector(domStrings.budgetPercentageLabel).textContent =
      obj.budgetPercentage;
  } else {
    document.querySelector(domStrings.budgetPercentageLabel).textContent =
      "---";
  }
}

export function getDOMStrings() {
  return domStrings;
}
