/*
기본적으로 필요한 것들.
HTML
====
form
input text
submit button
ol/ul - li

JS
==
form.eventlistner(submit,)

*/

let toDoForm = document.querySelector(`form`)
let toDoItem = document.querySelector(`#toDoItem`)

let toAdd = document.querySelector(`#add`)
let toRemoveCompleted = document.querySelector(`#removeCompleted`)
let toRemoveAll = document.querySelector(`#removeAll`)

let toDoList = document.querySelector(`ul`)

toDoForm.addEventListener(`submit`, function(event){

    event.preventDefault()

    // ADD 

    let item = document.createElement(`li`)
    toDoList.appendChild(item)
    item.innerText = toDoItem.value
    toDoItem.value=``

    // Remove Completed Tasks

    let itemList = document.querySelectorAll(`#toDoList li`)

    item.addEventListener(`click`,function(){
        item.style.textDecoration = `line-through`
    })

    itemList.forEach(function(i){
        
        toRemoveCompleted.addEventListener(`click`,function(){
            if (i.style.textDecoration === `line-through`){
                i.remove()
            }
        })

        // Remove All

        toRemoveAll.addEventListener(`click`,function(){
            i.remove()
        })
    })

})



// toDoForm.addEventListener(`submit`, function(event){
    
//     event.preventDefault()
    
//     // creating a tag
//     let item = document.createElement(`li`)
//     let deleteButton = document.createElement(`button`)
//     deleteButton.innerText = `Delete`
//     item.innerText = toDoItem.value + ` `

//     deleteButton.addEventListener(`click`, function(){
//         console.log(item)
//         item.remove()
//     })
    
//     item.appendChild(deleteButton)
//     toDoList.appendChild(item)
//     toDoItem.value = ""



// })
