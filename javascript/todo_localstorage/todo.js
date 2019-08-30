
// set event listener for submit action on form
// on submit, create li + appendchild to ul

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const ul = document.querySelector('.todolist');
const deleteBtn = document.querySelector(".delete-btn");

form.addEventListener('submit', handleSubmit);
deleteBtn.addEventListener('click', handleDeleteAll);

// on DOMContentLoaded, grab all todos from localStorage and place into array
// iterate through array and generate todos + append to DOM

let allTodos;

function renderTodosFromLS() {
  allTodos = localStorage.getItem("todos")
    ? [...JSON.parse(localStorage.getItem("todos"))]
    : [];

  allTodos.forEach(todo => {
    let currentTodo = createTodoItem(todo);
    ul.appendChild(currentTodo);
  })
}
renderTodosFromLS();

// on new todo submit, 
// add the todo item to items array,
// save updated array to localStorage

// on clear,
// update todo array => []
// update localstorage
// update dom



function handleSubmit(e) {
  e.preventDefault();
  if (input.value === '') return;
  let li = createTodoItem(input.value);
  ul.appendChild(li);

  allTodos.push(input.value);
  input.value = '';
  localStorage.setItem('todos', JSON.stringify(allTodos));
}

function createTodoItem(text) {
  let li = document.createElement('li');
  li.textContent = text;
  return li;
}

function handleDeleteAll() {
  localStorage.clear('todo');
  ul.innerHTML = '';
}