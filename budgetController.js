const data = {
  allItems: {
    exp: [],
    inc: [],
  },
  totals: {
    exp: 0,
    inc: 0,
  },
  budget: 0,
  budgetPercentage: -1,
};

function calcTotal(type) {
  var sum = 0;
  data.allItems[type].forEach((item) => {
    sum += item.value;
  });
  data.totals[type] = sum;
}

export function addItems(type, description, value) {
  const id = Date.now();
  const newItem = { id, description, value };
  data.allItems[type].push(newItem);
  return newItem;
}

export function calcBudget() {
  calcTotal("exp");
  calcTotal("inc");
  data.budget = data.totals.inc - data.totals.exp;
  if (data.totals.inc > 0)
    data.budgetPercentage = ((data.totals.exp / data.totals.inc) * 100).toFixed(
      2
    );
  else data.budgetPercentage = -1;
}

export function calcPercentages() {
  let copiedData = { ...data };
  copiedData.allItems["exp"].forEach((item) => {
    let percentage;
    if (copiedData.totals.inc > 0) {
      percentage = ((item.value / copiedData.totals.inc) * 100).toFixed(2);
    } else {
      percentage = ((item.value / copiedData.totals.exp) * 100).toFixed(2);
    }
    item.percentage = percentage;
  });

  return copiedData.allItems.exp;
}

export function getBudget() {
  return {
    budget: data.budget,
    totalInc: data.totals.inc,
    totalExp: data.totals.exp,
    budgetPercentage: data.budgetPercentage,
  };
}

export function delItem(idString) {
  const newId = idString.split("-");
  const id = parseFloat(newId[1]);
  const type = newId[0];
  data.allItems[type].forEach((item, index, allItems) => {
    if (item.id === id) allItems.splice(index, 1);
  });
}

export function testing() {
  console.log(data);
}
