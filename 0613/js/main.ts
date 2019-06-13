interface Todo {
  id: number,
  content: string,
  completed: boolean
}

let todos: Todo[] = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];
const $todos: HTMLUListElement = document.querySelector('.todos');
const $inputTodo: HTMLInputElement = document.querySelector('.inputTodo');

function render() {
  let html = '';
  todos.forEach(todo => {
    html += `<li id="${todo.id}">
    <input type="checkbox" ${todo.completed ? 'checked' : ''}>${todo.content}
    <button class="removeBtn">X</button>
    </li>`;
  });
  $todos.innerHTML = html;
}

function addTodo(keyCode: number) {
  if (keyCode !== 13) return;
  todos = [ { id: generateId(), content: $inputTodo.value, completed: false }, ...todos ];
  $inputTodo.value = '';
  render();
}

function removeTodo(target: HTMLElement) {
  const id = +target.parentElement.id;
  todos = todos.filter(todo => todo.id !== id);
  render();
}

function toggleCheck(check: HTMLElement) {
  todos.forEach(todo => {
    if ( todo.id === +check.parentElement.id ) todo.completed = !todo.completed;
  });
}

function generateId() {
  return todos.length ? Math.max(todos.length) + 1 : 1;
}

$inputTodo.onkeyup = function(e: KeyboardEvent) {
  addTodo(e.keyCode);
};

$todos.onclick = function(e: MouseEvent) {
  const btn = (<HTMLElement>e.target)
  if (!btn.classList.contains('removeBtn')) return;
  removeTodo(btn);
};

$todos.onchange = function(e: MouseEvent) {
  const check = (<HTMLElement>e.target);
  toggleCheck(check);
}

render();