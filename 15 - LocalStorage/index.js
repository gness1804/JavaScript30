const addItemsForm = document.querySelector('.add-items');
// const itemsList = document.querySelector('.plates');
const itemInputField = document.querySelector('.item-input-field');

const items = [];

addItemsForm.addEventListener('submit', e => {
  e.preventDefault();
  const itemVal = itemInputField.value;

  if (!itemVal) {
    return;
  }
  items.push(itemVal);
  itemInputField.value = '';
});
