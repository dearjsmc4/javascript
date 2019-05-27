
/* eslint-disable func-names */
let todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completeAll = document.querySelector('.complete-all');
const $clearCompleted = document.querySelector('.clear-completed');

function checkActive() {
  const $activeTodos = document.querySelector('.active-todos');
  const activeLeft = todos.filter(todo => todo.completed !== true);
  $activeTodos.innerHTML = activeLeft.length;
}

function checkCompleted() {
  const $completedTodos = document.querySelector('.completed-todos');
  const clearLeft = todos.filter(todo => todo.completed === true);
  $completedTodos.innerHTML = clearLeft.length;
}

function render() {
  let html = '';
  todos.forEach((todo) => {
    html += `<li id="${todo.id}" class="todo-item">
    <input class="custom-checkbox" type="checkbox" id="ck-${todo.id}" ${todo.completed ? 'checked' : ''}>
    <label for="ck-${todo.id}">${todo.content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });
  $todos.innerHTML = html;
  checkActive();
  checkCompleted();
}

function generateId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

function removeTodo(target) {
  // this.removeChild(e.target.parentNode);
  todos = todos.filter(todo => target.parentNode.id * 1 !== todo.id);
  render();
}

$todos.onchange = function (e) {
  const id = +e.target.parentNode.id;
  todos = todos.map(todo => (todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
  if (e.target.checked) {
    // target.classList.replace('checked', 'unchecked');
    e.target.setAttribute('checked', 'checked');
    // e.target.nextElementSibling.style.textDecoration = 'line-through';
  } else {
    e.target.removeAttribute('checked');
    // e.target.nextElementSibling.style.textDecoration = 'none';
  }
  render();
};

$todos.onclick = function (e) {
  // console.log(e.target.parentNode);
  if (e.target.classList.contains('remove-todo')) {
    removeTodo(e.target);
  }
};

$inputTodo.onkeyup = function (e) {
  const value = $inputTodo.value.trim();
  if (value === '' || e.keyCode !== 13) return false;
  todos = [{ id: generateId(), content: value, completed: false }, ...todos];
  render();
  $inputTodo.value = '';
};

$completeAll.onchange = function (e) {
  if (e.target.checked) {
    todos = todos.map(todo => Object.assign({}, todo, { completed: true }));
  } else {
    todos = todos.map(todo => Object.assign({}, todo, { completed: false }));
  }
  render();
};

$clearCompleted.onclick = function () {
  todos = todos.filter(todo => todo.completed !== true);
  render();
};

render();
