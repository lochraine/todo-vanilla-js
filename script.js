const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function createListElement() {
	li = document.createElement("li");
	li.setAttribute("class", classNames.TODO_ITEM)
const checker = document.createElement("input")
checker.setAttribute("type", "checkbox")
checker.setAttribute("class", classNames.TODO_CHECKBOX)
	console.log(document.getElementById('input field').value)
	li.appendChild(document.createTextNode(document.getElementById('input field').value));
	li.appendChild(checker)
	list.appendChild(li);
	
}


function newTodo() {
  createListElement();
  itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML)
}
