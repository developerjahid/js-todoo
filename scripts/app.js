//Seletor
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


//Event Listener
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)


function addTodo(e) {  
    //prevent form form submitting
    e.preventDefault()
    
    //Input Value
    const inputValue = todoInput.value
    if(inputValue == 0) {
        alert("Please Enter Something!")
    } else {
        //todo add
    const todoDiv = document.createElement('li')
    todoDiv.classList.add('todo')

    //create list div
    const newTodo = document.createElement('div')
    newTodo.classList.add('todo-div')
    todoDiv.appendChild(newTodo)

    //create list
    const pTodo = document.createElement('p')
    pTodo.innerText = todoInput.value
    pTodo.classList.add('todo-item')
    newTodo.appendChild(pTodo)

    //mark button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="material-icons">done</i>'
    completedButton.classList.add('complete-btn')
    newTodo.appendChild(completedButton)

    //trash button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="material-icons">delete</i>'
    trashButton.classList.add('trash-btn')
    newTodo.appendChild(trashButton)

    //append to list
    todoList.appendChild(todoDiv)

    //clear todo input value
    todoInput.value = ''
    }
}


//Delete & Check 
function deleteCheck(e) {
    const item = e.target
    //delete todo
    if(item.classList[0] == 'trash-btn') {
        const todoRemove = item.parentElement
        todoRemove.remove()
    }
    //mark todo
    if(item.classList[0] == 'complete-btn') {
        const todoAdd = item.parentElement
        todoAdd.classList.toggle('completed')
    }
}