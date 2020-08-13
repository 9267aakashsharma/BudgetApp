const data = {
  allItems: {
    exp: [],
    inc: [],
  },
  totals: {
    exp: 0,
    inc: 0,
  },
};

export function addItems(type, description, value) {
  const id = Date.now();
  const newItem = { id, description, value };
  data.allItems[type].push(newItem);
  return newItem;
}

export function delItem(id, type) {
  data.allItems[type].forEach((item, index) => {
    if (item.id === id) item.splice(index, 1);
  });
}

export function testing() {
  console.log(data);
}
