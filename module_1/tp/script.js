import {dico} from "./dico.js";

const randomWord = getRandomWord()
let attempt = 5
console.log(randomWord)

function generateLetters() {

    for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
        //transforme un nombre en son équivalent lettre
        const letter = String.fromCharCode(i)
        //  console.log(letter)
        //création du bouton
        const button = document.createElement('button')
        button.innerText = letter
        //ajout dans le DOM
        document.getElementById('letters').append(button)

        button.addEventListener("click", checkLetter)
    }
}

function getRandomWord() {
    const index = Math.round(Math.random() * dico.length)
    return dico[index]
}

function displayRandomWord() {
    document.getElementById('wordToFind').innerText = randomWord.replace(/\w/gi, "_")
}

function checkLetter(event) {
    const letter = this.innerText
    let isOk = false
    //console.log(event.target.innerText)
    let randomDomWord = document.getElementById('wordToFind').innerText.split('')

    randomWord.split('').forEach(function(letterCheck, index){
        if(letter == letterCheck){
            randomDomWord[index] = letter
            isOk = true
        }
    })

    document.getElementById('wordToFind').innerText = randomDomWord.join('')
    if(!isOk){
        document.getElementById('nbAttempt').innerText = --attempt
    }

    checkWin()
}

function checkWin(){

    if(randomWord === document.getElementById('wordToFind').innerText && attempt > 0){
        alert("T'es un champion, champion !")
    }

    if(attempt <= 0){
        alert("Rejoue !")
    }

}


function init() {
    generateLetters()
    displayRandomWord()
    document.getElementById('reset').addEventListener('click', function (){
        window.location.reload()
    })
}


window.onload = init