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

  function fetchTodo(method, url, payload) {
    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(render)
      .catch(console.error);
  }

  function showTodo() {
    document.querySelector('.spinner').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    fetchTodo('GET', '/todos');
  }

  function generateId() {
    return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }

  function removeTodo(id) {
    fetchTodo('DELETE', `/todos/${id}`);
  }

  $todos.onchange = function (e) {
    const id = +e.target.parentNode.id;
    e.target.toggleAttribute('checked');
    if (e.target.checked) {
      fetchTodo('PATCH', `/todos/${id}`, {
        completed: true
      });
    } else {
      fetchTodo('PATCH', `/todos/${id}`, {
        completed: false
      });
    }
  };

  $todos.onclick = function (e) {
    if (e.target.classList.contains('remove-todo')) {
      removeTodo(e.target.parentNode.id);
    }
  };

  $inputTodo.onkeyup = function (e) {
    const value = $inputTodo.value.trim();
    if (value === '' || e.keyCode !== 13) return false;
    fetchTodo('POST', '/todos', {
      id: generateId(), content: value, completed: false
    });
    $inputTodo.value = '';
  };

  $completeAll.onchange = function (e) {
    if (e.target.checked) {
      fetchTodo('PATCH', '/todos', {
        completed: true
      });
    } else {
      fetchTodo('PATCH', '/todos', {
        completed: false
      });
    }
  };

  $clearCompleted.onclick = function () {
    fetchTodo('DELETE', '/todos/completed');
  };

  $nav.onclick = function (e) {
    [...$nav.children].forEach(item => item.classList.remove('active'));
    e.target.className = 'active';
    navId = e.target.id;
    fetchTodo('GET', '/todos');
  };

  window.onload = setTimeout(showTodo, 1000);
}());
