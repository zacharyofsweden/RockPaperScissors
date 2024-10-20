//Gloabal Variabals
let humanScore = 0;
let computerScore = 0;


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

    //Todo  just make it all lower case with stirng method


    //Uses promt to get players choice
    let userChoice = prompt("Please pick betwen Rock, Scissor and Paper");

    //Checks if playerChoice fits any of the options.
    if (userChoice == "Rock") {
        return "Rock"
    }
    else if (userChoice == "Scissor") {
        return "Scissor"
    }
    else if (userChoice == "Paper") {
        return "Paper"
    }
    //Make Sure that if user picks wrong it notifys them.
    else {
        userChoice = prompt("Wrong reload page to try again!");
    }

}

//Logic to use the choices and check who won 
function playRound(humanChoice, computerchoice) {
    let isTheSame = false;
    //Todo Try to figure out a easier solution to check winner
    //Todo  FInd a way to not repeat console logs Maybe using a bool (humanWinner or computerWinner)

    if (humanChoice == computerchoice) {
        isTheSame = true
        console.log("It's a tie! : User score " + humanScore + " - " + computerScore);
    }

    if (humanChoice == "Rock" && isTheSame == false) {
        if (computerchoice == "Scissor") {
            humanScore++;
            console.log("you won Score is : User score " + humanScore + " - " + computerScore);
        }

        else if (computerchoice == "Paper") {
            computerScore++;
            console.log("you lost Score is : User score " + humanScore + " - " + computerScore);
        }
    }

    else if (humanChoice == "Scissor" && isTheSame == false) {
        if (computerchoice == "Paper") {
            humanScore++;
            console.log("you won Score is : User score " + humanScore + " - " + computerScore);
        }

        else if (computerchoice == "Rock") {
            computerScore++;
            console.log("you lost Score is : User score " + humanScore + " - " + computerScore);
        }
    }

    else if (humanChoice == "Paper" && isTheSame == false) {
        if (computerchoice == "Scissor") {
            computerScore++;
            console.log("you lost Score is : User score " + humanScore + " - " + computerScore);
        }

        else if (computerchoice == "Rock") {
            humanScore++;
            console.log("you won Score is : User score " + humanScore + " - " + computerScore);
        }
    }

}
// Play out a whole game 
function playGame() {
    //Use a loop to test it out
    let HumanSelection = getUserChoice();
    let pcSelection = getComputerChoice();
    playRound(HumanSelection, pcSelection)

    HumanSelection = getUserChoice();
    pcSelection = getComputerChoice();
    playRound(HumanSelection, pcSelection)

    HumanSelection = getUserChoice();
    pcSelection = getComputerChoice();
    playRound(HumanSelection, pcSelection)

    HumanSelection = getUserChoice();
    pcSelection = getComputerChoice();
    playRound(HumanSelection, pcSelection)

    HumanSelection = getUserChoice();
    pcSelection = getComputerChoice();
    playRound(HumanSelection, pcSelection)

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

