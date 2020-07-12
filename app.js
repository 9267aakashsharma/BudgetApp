//BUDGET CONTROLLER
var budgetController = (function () {
  //some code
})();

//UI CONTROLLER
var uiController = (function () {
  //Some code
})();

//GLOBAL APP CONTROLLER
var appController = (function (budgetCtrl, uiCtrl) {
  var ctrlAddItem = function () {
    // 1. get input data
    // 2. Add item to budget controller
    // 3. Add new item to user interface
    // 4. Calculate the budget
    // 5. Display the budget on the UI
    console.log("it works");
  };
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);
  document.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      ctrlAddItem();
    }
  });
})(budgetController, uiController);
