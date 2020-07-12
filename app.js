//BUDGET CONTROLLER
var budgetController = (function () {
  //some code
})();

//UI CONTROLLER
var uiController = (function () {
  var domStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(domStrings.inputType).value, //inc or exp
        description: document.querySelector(domStrings.inputDescription).value, //description text
        value: document.querySelector(domStrings.inputValue).value,
      };
    },
    getDOMStrings: function () {
      return domStrings;
    },
  };
})();

//GLOBAL APP CONTROLLER
var appController = (function (budgetCtrl, uiCtrl) {
  var DOM = uiCtrl.getDOMStrings();
  var ctrlAddItem = function () {
    // 1. get input data
    var input = uiCtrl.getInput();
    console.log(input);
    // 2. Add item to budget controller
    // 3. Add new item to user interface
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  };
  document
    .querySelector(DOM.inputButton)
    .addEventListener("click", ctrlAddItem);
  document.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      ctrlAddItem();
    }
  });
})(budgetController, uiController);
