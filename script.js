const listForm = document.getElementById('to-do-listform')

console.log(listForm)

listForm.addEventListener('submit', function (e){
    e.preventDefault()

    const listField = document.getElementById('to-do')

    const newListField = listField.value
    
    console.log('nuova lista', newListField)

    const newCard = document.createElement('div')
    newCard.classList.add('list-card')

    newCard.innerHTML = `
    <span onclick="markedAsDone(event)">${newListField}</span>
    <button id="buttonlist" onclick="deleteTask(event)">Eliminare To-Do</button>
    `
    listField.value = ''

    const sectionCard = document.getElementById('list')
    sectionCard.appendChild(newCard)

    // const completeTask = document.getElementsByClassName('list-card')[0]
    // console.log(completeTask)
    // completeTask.addEventListener('click', ()=>{
    // completeTask.style.textDecoration = 'line-through'
    // })

    // const deleteCard = function(e){
    //     const clickedButton = e.target
    //     clickedButton.parentElement.remove()
    // }



})

const markedAsDone = function(e){
    const clickedSpan = e.target
    clickedSpan.style.textDecoration = 'line-through'
}

const deleteTask = function(e){
    e.target.parentElement.remove()
}

