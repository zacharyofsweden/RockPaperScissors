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
playingScore.textContent = roundMessage(humanIsRoundWinner, computerIsRoundWinner)


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




//Todo Fix a intital message

//Displays the current count and who won
function roundMessage(humanWonRound, computerwonround) {

    if (isTheSame == true) {
        playingScore.textContent = "Tie! Current score is: User Score " + humanScore + " - " + computerScore + " Computer Score"
    }

    else if (humanWonRound == true) {
        humanScore++;
        playingScore.textContent = "You won! Current score is: User Score " + humanScore + " - " + computerScore + " Computer Score"

    }
    else if (computerwonround == true) {
        computerScore++;
        playingScore.textContent = "You lost! Current score is: User Score " + humanScore + " - " + computerScore + " Computer Score"
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
    //Todo make a smaller text in display that shows the choices you and pc made

    if (roundCount < 5) {
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
        roundCount++;
    }
    else {
        playingScore.textContent = "The end please refrech the page to try again!"
        //HEre will be a text that says final score 
    }


}