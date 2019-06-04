/* eslint-disable func-names */
(function () {
  let todos = [];
  const $todos = document.querySelector('.todos');
  const $inputTodo = document.querySelector('.input-todo');
  const $completeAll = document.querySelector('.complete-all');
  const $clearCompleted = document.querySelector('.clear-completed > .btn');
  const $nav = document.querySelector('.nav');
  const $activeTodos = document.querySelector('.active-todos');
  const $completedTodos = document.querySelector('.completed-todos');
  let navId = 'all';

  function render(resTodo) {
    todos = resTodo;
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

  window.onload = function getTodos() {
    fetch('http://localhost:9000/todos')
      .then(res => res.json())
      .then(render)
      .catch(console.log);
  };

  function generateId() {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }

  function removeTodo(id) {
    fetch(`http://localhost:9000/todos/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(render)
      .catch(console.log);
  }

  $todos.onchange = function (e) {
    const id = +e.target.parentNode.id;
    fetch(`http://localhost:9000/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !id.completed })
    })
      .then(res => res.json())
      .then(render)
      .catch(console.log);
  };

  $todos.onclick = function (e) {
    if (e.target.classList.contains('remove-todo')) {
      removeTodo(e.target.parentNode.id);
    }
  };

  $inputTodo.onkeyup = function (e) {
    const value = $inputTodo.value.trim();
    if (value === '' || e.keyCode !== 13) return false;
    fetch('http://localhost:9000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: generateId(), content: value, completed: false })
    })
      .then(res => res.json())
      .then(render)
      .catch(console.log);
    $inputTodo.value = '';
  };

  $completeAll.onchange = function (e) {
    if (e.target.checked) {
      fetch('http://localhost:9000/todos', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: true })
      })
        .then(res => res.json())
        .then(render)
        .catch(console.log);
    } else {
      fetch('http://localhost:9000/todos', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: false })
      })
        .then(res => res.json())
        .then(render)
        .catch(console.log);
    }
  };

  $clearCompleted.onclick = function () {
    fetch('http://localhost:9000/todos/completed', {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(render)
      .catch(console.log);
  };

  $nav.onclick = function (e) {
    [...$nav.children].forEach(item => item.classList.remove('active'));
    e.target.className = 'active';
    navId = e.target.id;
    fetch('http://localhost:9000/todos')
      .then(res => res.json())
      .then(render)
      .catch(console.log);
  };
}());
