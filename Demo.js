function addTodo(todo) {
  let toDoELement = document.getElementById("todoList");
  let newLiEl = document.createElement("li");
  newLiEl.textContent = todo;
  // now it's the time to create delete function👌😂
function onDeleteTodo() {
    newLiEl.remove();
  }
  let deleteTodoBtn = document.createElement("button");
  deleteTodoBtn.textContent = "Delete";
  deleteTodoBtn.classList.add("deleteTodoBtn");
  deleteTodoBtn.addEventListener("click", onDeleteTodo);


  newLiEl.appendChild(deleteTodoBtn);
  toDoELement.appendChild(newLiEl);
}



// create a function which gets todo from input
function getTodoFromInput() {
  let todoInputEl = document.getElementById("todoInput");
  // return a string with inputcontent
  return todoInputEl.value;
}

// create a function to clear the input

function clearInput() {
  let inputEl = document.getElementById("todoInput");
  inputEl.value = "";
}

function onTodoClick() {
  let todo = getTodoFromInput();
  if (todo === "") {
    alert(" your To-Do is empety");

  } else if (inputControl(todo) === false) {
    alert("please write a nice To-Do!")

  } else {
    clearInput(" ");
    addTodo(todo);
      
   
    onInput();
  }
}



//create a function to substruct from the counter when input is clicked.
function onInput() {
  let todo = getTodoFromInput();
  // counter update
  let counterEl = document.getElementById("counter");
  counterEl.textContent = Math.max(50 - todo.length, 0);

  inputControl(todo);

}

function inputControl(todo) {
  // control the input length
  if (todo.length === 0 || todo.length > 50   ) {
    // disable the HTML button
    buttonEl.setAttribute("disabled", true);
    // return boolean
    return false;
  }
  else {
    // enable the HTML button
    buttonEl.removeAttribute("disabled");
    return true;
  }
}


function onInputKey(event) {
  if (event.key === "Enter") {
    onTodoClick();
  }


}
// get button from the DOM 
let buttonEl = document.getElementById("addTodo");
// call the function onTodClick
buttonEl.addEventListener("click", onTodoClick);

// attach input addEventListner to input
let inputEl = document.getElementById("todoInput");
// run  oninput function everytime you  write something
inputEl = addEventListener("input", onInput)

inputEl = addEventListener("keypress", onInputKey)
// initialize the page for the first time
onInput();

