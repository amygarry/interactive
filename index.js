let inputField = document.querySelector('input')
let messagage = document.querySelector('#message')


function addmovie (event){
event.preventDefault()
let movie = document.createElement('li')
let movieTitle= document.createElement('span')
movieTitle.addEventListener('click',crossOffMovie)
movieTitle.textContent = inputField.value
movie.appendChild(movieTitle)

let deleteBtn= document.createElement('button')
deleteBtn.textContent = 'X'

deleteBtn.addEventListener('click' ,deleteMovie)
movie.appendChild(deleteBtn)


document.querySelector('ul').appendChild(movie)
inputField.value = "" 
}

document.querySelector('form').addEventListener('submit', addmovie)

function deleteMovie(event){
    event.target.parentNode.remove()
messagage.textContent = `${event.target.parentNode.firstChild.textContent}movie deleted!`

revealMessage()
}
function crossOffMovie (event){
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('.checked')){
        messagage.textContent = `${event.target.textContent} watched`
    }
    else{
        messagage.textContent = `${event.target.textContent} added back` 
    }
    revealMessage()
}

function revealMessage (){
messagage.classList.remove('hide')

    setTimeout((()=>message.classList.add('hide')),1000)
}
