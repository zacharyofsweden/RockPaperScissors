//Gloabal Variabals
let humanScore = 0;
let computerScore = 0;
let isTheSame = false;
let roundCount = 0;
let humanIsRoundWinner = false;
let computerIsRoundWinner = false;
//Dom 

//Create the 3 buttons for the user to chose from
const divContainer = document.querySelector(".container")

const buttonRock = document.createElement('button')
const buttonPapper = document.createElement('button')
const buttonSciscor = document.createElement("button")


const scorKeeper = document.createElement("div")
const playingScore = document.createElement("h1")

//Append
scorKeeper.appendChild(playingScore)
divContainer.appendChild(scorKeeper)
divContainer.appendChild(buttonRock)
divContainer.appendChild(buttonPapper)
divContainer.appendChild(buttonSciscor)


//Displaying score and user choice
playingScore.textContent = test();


// Styling

buttonRock.textContent = "Rock"
buttonPapper.textContent = "Paper"
buttonSciscor.textContent = "Scissor"

//Functions 

buttonRock.addEventListener("click", function () {
    playRound("Rock", getComputerChoice());
});

buttonSciscor.addEventListener("click", function () {
    playRound("Scissor", getComputerChoice());
});

buttonPapper.addEventListener("click", function () {
    playRound("Paper", getComputerChoice());
});








//Implement a function to pick a sign for computer
function getComputerChoice() {
    let choice = Math.random();

    //Logic for picking sign.
    if (choice > 0.666) {
        return "Rock"
    }
    else if (choice > 0.333) {
        return "Scissor"
    }
    else {
        return "Paper"
    }
}


function test() {
    let showScore = "It's a tie! : User score " + humanScore + " - " + computerScore
    return showScore
}


//Displays the current count and who won
function roundMessage(humanWonRound, computerwonround) {

    if (isTheSame == true) {
        playingScore.textContent =  test()
    }

    else if (humanWonRound == true) {
        humanScore++;
        playingScore.textContent = test()
        
    }
    else if (computerwonround == true) {
        computerScore++;
        playingScore.textContent = test()
    }
    humanWonRound = false;
    computerwonround = false;

}

//Logic to use the choices and check who won 
function playRound(humanChoice, computerchoice) {
    //Variabals for the roundFunction, 
    isTheSame = false;
    humanIsRoundWinner = false;
    computerIsRoundWinner = false;
    //Todo Try to figure out a easier solution to check winner
    console.log("You picked: " + humanChoice)
    console.log("The Computer picked: " + computerchoice)


    if (humanChoice == computerchoice) {
        isTheSame = true
        roundMessage(humanIsRoundWinner, computerIsRoundWinner);
    }

    if (humanChoice == "Rock" && isTheSame == false) {
        if (computerchoice == "Scissor") {
            humanIsRoundWinner = true
            roundMessage(humanIsRoundWinner, computerIsRoundWinner);

        }

        else if (computerchoice == "Paper") {
            computerIsRoundWinner = true;
            roundMessage(humanIsRoundWinner, computerIsRoundWinner);
        }
    }

    else if (humanChoice == "Scissor" && isTheSame == false) {
        if (computerchoice == "Paper") {
            humanIsRoundWinner = true
            roundMessage(humanIsRoundWinner, computerIsRoundWinner);
        }

        else if (computerchoice == "Rock") {
            computerIsRoundWinner = true;
            roundMessage(humanIsRoundWinner, computerIsRoundWinner);
        }
    }

    else if (humanChoice == "Paper" && isTheSame == false) {
        if (computerchoice == "Scissor") {
            computerIsRoundWinner = true;
            roundMessage(humanIsRoundWinner, computerIsRoundWinner);
        }

        else if (computerchoice == "Rock") {
            humanIsRoundWinner = true
            roundMessage(humanIsRoundWinner, computerIsRoundWinner);
        }
    }

}