//Gloabal Variabals
let humanScore = 0;
let computerScore = 0;
let isTheSame = false;
let roundCount = 0;

//Dom 

//Create the 3 buttons for the user to chose from
const buttonRock = document.createElement('button')

const buttonPapper = document.createElement('button')

const buttonSciscor = document.createElement("button")

const scorKeeper = document.createElement("div")

const divContainer = document.querySelector(".container")

divContainer.appendChild(buttonRock)
divContainer.appendChild(buttonPapper)
divContainer.appendChild(buttonSciscor)
divContainer.appendChild(scorKeeper)

scorKeeper.style.color("red")
scorKeeper.style.width("100px")

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



//Implement a funcktion for picking for user. 


//Displays the current count and who won
function roundMessage(humanWonRound, computerwonround) {

    if (isTheSame == true) {
        console.log("It's a tie! : User score " + humanScore + " - " + computerScore);
    }

    else if (humanWonRound == true) {
        humanScore++;
        console.log("you won Score is : User score " + humanScore + " - " + computerScore);
    }
    else if (computerwonround == true) {
        computerScore++;
        console.log("you lost Score is : User score " + humanScore + " - " + computerScore);
    }
    humanWonRound = false;
    computerwonround = false;
}

//Logic to use the choices and check who won 
function playRound(humanChoice, computerchoice) {
    //Variabals for the roundFunction, 
    isTheSame = false;
    let humanIsRoundWinner = false;
    let computerIsRoundWinner = false;
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