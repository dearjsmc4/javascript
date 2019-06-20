/* eslint-disable func-names */
(function () {
  let todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];
  let navId = 'all';
  const $todos = document.querySelector('.todos');
  const $inputTodo = document.querySelector('.input-todo');
  const $completeAll = document.querySelector('.complete-all');
  const $clearCompleted = document.querySelector('.clear-completed > .btn');
  const $nav = document.querySelector('.nav');
  const $activeTodos = document.querySelector('.active-todos');
  const $completedTodos = document.querySelector('.completed-todos');

  function render() {
    let filterTodos = [];
    if (navId === 'all') filterTodos = [...todos];
    else if (navId === 'active') filterTodos = todos.filter(todo => !todo.completed);
    else filterTodos = todos.filter(todo => todo.completed);

    let html = '';
    filterTodos.forEach(({ id, content, completed }) => {
      html += `<li id="${id}" class="todo-item">
      <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
      <label for="ck-${id}">${content}</label>
      <i class="remove-todo far fa-times-circle"></i>
    </li>`;
    });
    $todos.innerHTML = html;
    $activeTodos.innerHTML = todos.filter(todo => todo.completed !== true).length;
    $completedTodos.innerHTML = todos.filter(todo => todo.completed === true).length;
  }

  function generateId() {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }

  function removeTodo(target) {
    todos = todos.filter(todo => target.parentNode.id * 1 !== todo.id);
    render();
  }

  $todos.onchange = function (e) {
    const id = +e.target.parentNode.id;
    todos = todos.map(todo => (todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
    if (e.target.checked) {
      e.target.setAttribute('checked', 'checked');
    } else {
      e.target.removeAttribute('checked');
    }
    render();
  };

  $todos.onclick = function (e) {
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

  $nav.onclick = function (e) {
    [...$nav.children].forEach(item => item.classList.remove('active'));
    e.target.className = 'active';
    navId = e.target.id;
    render();
  };

  render();
}());
