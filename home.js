// Selectors of class
const todoInput = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')
const todoContainer = document.querySelector('.todo-container')
const todoBtn = document.querySelector('.todo-btn')

// Event listener
// adding todos lists
todoBtn.addEventListener('click', addTodoList) 
// delete todos
todoList.addEventListener('click', deleteCheck)

// Functions
function addTodoList(event) {
    event.preventDefault()
    // Creating a html element div
    const todoItemeDiv = document.createElement('div')
    todoItemeDiv.classList.add('todo-itemdiv')
    // Adding list 'li' elements inside the created div
    const todoItemList = document.createElement('li')
    todoItemList.innerText = todoInput.value
    todoItemList.classList.add('todo-itemli')
    // Adding list items last to div elements
    todoItemeDiv.appendChild(todoItemList)
    // Creating check mark button
    const checkBtn = document.createElement('button')
    checkBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>'
    checkBtn.classList.add('check-btn')
    // and also appending check button to div element
    todoItemeDiv.appendChild(checkBtn)
    // Creating delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>'
    deleteBtn.classList.add('delete-btn')
    // and also appending check button to div element
    todoItemeDiv.appendChild(deleteBtn)
    // appending ul to div
    todoList.append(todoItemeDiv)
    // clearing the input value
    todoInput.value = ""
}

// creating a delete function
function deleteCheck(e) {
    const list = e.target
    //delete inbuilt key word
    if (list.classList[0] === "delete-btn") {
        todoInput.remove()
    }
     

}