// user input form
const form = document.querySelector('form')
form.addEventListener('submit', addTask)

// task list
const taskList = document.querySelector('ul')
taskList.addEventListener('click', delTask)

// delete button-link
const deleteBtn = document.querySelector('#delete-tasks')
deleteBtn.addEventListener('click', delTasks)

function delTasks(){
    // taskList.innerHTML = ''
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}

// delTask
function delTask(event){
    if(event.target.textContent === 'X'){
        if(confirm('Do you realy want to delete this task?')){
            event.target.parentElement.remove()
        }
    }
}

// addTask function
function addTask(event){
    // get task value from form input
    const task = document.querySelector('#task').value
    // get element from DOM
    const taskList = document.querySelector('ul')
    // create element to DOM
    const li = document.createElement('li')
    // add CSS class
    li.className = 'collection-item'
    // add text to element
    const text = document.createTextNode(task)
    li.appendChild(text)
    // create link
    const link = document.createElement('a')
    // add css style
    link.className = 'secondary-content'
    // add text to link
    link.appendChild(document.createTextNode('X'))
    // add href attribute
    link.setAttribute('href', '#')
    // add link to li
    li.appendChild(link)
    // add li to taskList
    taskList.appendChild(li)
    // save task to localStorage
    taskStorage(task)
    // clear form input value
    document.querySelector('#task').value = ''
    event.preventDefault()
}

function taskStorage(task){
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}