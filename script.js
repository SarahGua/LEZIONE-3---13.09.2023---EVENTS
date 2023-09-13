const listForm = document.getElementById('to-do-listform')

console.log(listForm)

listForm.addEventListener('submit', function (e){
    e.preventDefault()

    const listField = document.getElementById('to-do')

    const newListField = {
        toDoList: listField.value,
    }

    console.log('nuova lista', newListField)

    const newCard = document.createElement('div')
    newCard.classList.add('list-card')

    newCard.innerHTML = `
    <ul>
    <li>${newListField.toDoList}</li>
    <button id="buttonlist">Eliminare To-Do</button>
    </ul>
    `
    listField.value = ''

    const sectionCard = document.getElementById('list')
    sectionCard.appendChild(newCard)

})

listButton = document.getElementsByClassName('list-card')
listButton.addEventListener('click', function(e){
    console.log('mouse passato sopra')
})
