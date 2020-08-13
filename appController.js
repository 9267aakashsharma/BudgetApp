import * as uiController from "./uiController.js";
import * as budgetController from "./budgetController.js";

function setUpEventListners() {
  var DOM = uiController.getDOMStrings();
  document.querySelector(DOM.inputButton).addEventListener("click", addItem);
  document
    .querySelector(DOM.itemDeleteButton)
    .addEventListener("click", delItem);
  document.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addItem();
    }
  });
}

function addItem() {
  var input = uiController.getInput();
  var newItem = budgetController.addItems(
    input.type,
    input.description,
    input.value
  );
  uiController.addListItem(newItem, input.type);
  uiController.clearFields();
}

function delItem() {}

setUpEventListners();
