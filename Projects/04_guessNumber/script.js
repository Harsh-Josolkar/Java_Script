let randomNumber = parseInt(Math.random()*100+1);

const submit  = document.querySelector("#subt");
const input  = document.querySelector("#guessField");
const guessSlot  = document.querySelector(".guesses");
const startOver  = document.querySelector(".resultParas");
const lowOrHi  = document.querySelector(".lowOrHi");
const remaining  = document.querySelector(".lastResult");

const p = document.createElement("p")

let prevguess = []
let numGuesses = 1

let playGame= true;

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess = parseInt(input.value);
        // console.log(guess);
        validateGuess(guess);
        
    })
}

function validateGuess(guess){
    if(guess<1 || guess >100 || isNaN(guess)){
        alert("Enter the valid number between 1 to 100")
    }else{
        prevguess.push(guess)
        if(numGuesses === 10){
            displayGuess(guess);
            displayMessage(`Game Over, the Number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it Right`)
        endGame();
    }else if(guess<randomNumber){
        displayMessage("The number is TOO LOW")
    }else if(guess>randomNumber){
        displayMessage("The number is TOO HIGH")
    }
}

function displayGuess(guess){
    input.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    input.value = '';
    input.setAttribute("disabled",'');
    p.classList.add('button')
    p.innerHTML = '<h2 id= "newGame">RESTART</h2>';
    startOver.appendChild(p)
    playGame = false
    startGame();
}

function startGame(){
    const start = document.querySelector("#newGame")
    start.addEventListener('click', (e)=>{
        
        randomNumber = parseInt(Math.random()*100+1);
        prevguess = []
        numGuesses = 1
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}`
        input.removeAttribute('disabled');
        displayMessage("")
        startOver.removeChild(p)
        playGame = true;

    });

}