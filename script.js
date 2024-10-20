//Gloabal Variabals
let humanScore = 0;
let computerScore = 0;
let isTheSame = false;
let roundCount = 0;

//Functions 

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
function getUserChoice() {

    //Uses promt to get players choice
    let userChoice = prompt("Please pick betwen Rock, Scissor and Paper");

    //Checks if playerChoice fits any of the options.
    if (userChoice.toLowerCase() == "rock") {
        return "Rock"
    }
    else if (userChoice.toLowerCase() == "scissor") {
        return "Scissor"
    }
    else if (userChoice.toLowerCase() == "paper") {
        return "Paper"
    }
    //Make Sure that if user picks wrong it notifys them.
    else {
        userChoice = prompt("Wrong reload page to try again!");
    }

}

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
// Play out a whole game 
function playGame() {
    //Use a loop to test it out
    for (roundCount; roundCount < 5; roundCount++) {
        let HumanSelection = getUserChoice();
        let pcSelection = getComputerChoice();
        playRound(HumanSelection, pcSelection)
    }

    if (humanScore == computerScore) {
        console.log("It's a tie better luck next time!")
    }
    else if (humanScore > computerScore) {
        console.log("You had a bigger Score Congrats!")
    }
    else {
        console.log("Bahahah you lost!")
    }

}

//Calls the function
playGame();

