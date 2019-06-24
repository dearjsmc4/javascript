var todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
];
var $todos = document.querySelector('.todos');
var $inputTodo = document.querySelector('.inputTodo');
function render() {
    var html = '';
    todos.forEach(function (todo) {
        html += "<li id=\"" + todo.id + "\">\n    <input type=\"checkbox\" " + (todo.completed ? 'checked' : '') + ">" + todo.content + "\n    <button class=\"removeBtn\">X</button>\n    </li>";
    });
    $todos.innerHTML = html;
}
function addTodo(keyCode) {
    if (keyCode !== 13)
        return;
    todos = [{ id: generateId(), content: $inputTodo.value, completed: false }].concat(todos);
    $inputTodo.value = '';
    render();
}
function removeTodo(target) {
    var id = +target.parentElement.id;
    todos = todos.filter(function (todo) { return todo.id !== id; });
    render();
}
function toggleCheck(check) {
    todos.forEach(function (todo) {
        if (todo.id === +check.parentElement.id)
            todo.completed = !todo.completed;
    });
    console.log($todos);
}
function generateId() {
    return todos.length ? Math.max(todos.length) + 1 : 1;
}
$inputTodo.onkeyup = function (e) {
    addTodo(e.keyCode);
};
$todos.onclick = function (e) {
    var btn = e.target;
    if (!btn.classList.contains('removeBtn'))
        return;
    removeTodo(btn);
};
$todos.onchange = function (e) {
    var check = e.target;
    toggleCheck(check);
};
render();
