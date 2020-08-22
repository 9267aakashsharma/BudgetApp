import * as uiController from "./uiController.js";
import * as budgetController from "./budgetController.js";

function setUpEventListners() {
  var DOM = uiController.getDOMStrings();
  document.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  });
  document.querySelector(DOM.inputButton).addEventListener("click", addItem);
  document.querySelector(DOM.container).addEventListener("click", delItem);
}

function updateBudget() {
  budgetController.calcBudget();
  var budget = budgetController.getBudget();
  uiController.displayBudget(budget);
}

function updateItemPercentages() {
  var expenseItems = budgetController.calcPercentages();
  uiController.displayPercentages(expenseItems);
  budgetController.testing();
}

function addItem() {
  const input = uiController.getInput();
  if (
    input.description !== "" &&
    input.description &&
    !isNaN(input.value) &&
    input.value > 0
  ) {
    const newItem = budgetController.addItems(
      input.type,
      input.description,
      input.value
    );
    uiController.addListItem(newItem, input.type);
    uiController.clearFields();
    updateBudget();
    updateItemPercentages();
  }
}

function delItem(event) {
  const itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
  if (itemID) {
    budgetController.delItem(itemID);
    uiController.deleteListItem(itemID);
    updateBudget();
    updateItemPercentages();
  }
}

function init() {
  updateBudget();
  setUpEventListners();
}

init();
