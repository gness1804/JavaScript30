const addItemsForm = document.querySelector('.add-items');
// const itemsList = document.querySelector('.plates');
const itemInputField = document.querySelector('.item-input-field');

const items = [];

function addItem(e) {
  e.preventDefault();
  const itemVal = itemInputField.value;
  if (!itemVal) {
    return;
  }
  const item = {
    text: itemVal,
    done: false,
  };
  items.push(item);
  this.reset();
}

addItemsForm.addEventListener('submit', addItem);
