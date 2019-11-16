const addItemsForm = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

const items = [];

const populateItems = (_items = [], destinationElem) => {
  destinationElem.innerHTML = _items
    .map(({ text, done }, i) => {
      if (!_items.length || !text) {
        return '<li>Loading Tapas...</li>';
      }
      return `
    <li>
      <input
        type="checkbox"
        data-index=${i}
        ${done ? 'checked' : ''}
        id=item-${i}
      />
      <label for=item-${i}>${text}</label>
    </li>
  `;
    })
    .join('');
};

function addItem(e) {
  e.preventDefault();
  const itemVal = this.querySelector('.item-input-field').value;
  if (!itemVal) {
    return;
  }
  const item = {
    text: itemVal,
    done: false,
  };
  items.push(item);
  populateItems(items, itemsList);
  this.reset();
}

addItemsForm.addEventListener('submit', addItem);
