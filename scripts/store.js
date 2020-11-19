import item from './item.js';

const items = [];
let hideCheckedItems = false;

function findById (id) {
  return items.find(item => item.id === id);
}

function addItem (name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch (e) {
    console.error(`addItem: ${e.message}`);
  }
}

function findAndToggleChecked (id) {
  const found = this.findById(id);
  found.checked = !found.checked;
}

function findAndUpdateName (id, newName) {
  try {
    item.validateName(newName);
    findById(id).name = newName;
  } catch (e) {
    console.error(`Cannot update name: ${e.message}`);
  }
}

function findAndDelete (id) {
  const found = findById(id);
  this.items = this.items.filter(item => item !== found);
}

function toggleCheckedFilter () {
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};