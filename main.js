let playerGame = confirm("Do you Want to play?");

if(playerGame){

    let computerinput = "rps";
    let computerChoice = computerinput.charAt(Math.floor(Math.random() * 3)); 
    
    if(computerChoice === 'r'){
        computerChoice ="rock";
    }else if(computerChoice == 'p'){
        computerChoice = "paper";
    }else{
        computerChoice = "scissors"
    }

    let playerchoice = prompt("Enter Your Choice:");

    if(playerchoice){
        playerchoice = playerchoice.toLowerCase();
        console.log("Player Choice :" , playerchoice);
        console.log("Computer Choice :" , computerChoice);

        if(playerchoice === computerChoice){
            console.log("Tie Game");
        }else if(playerchoice === "rock" && computerChoice === "scissors" ){
            console.log("Player Wins");
        }
        else if(playerchoice === "rock" && computerChoice === "paper" ){
            console.log("computer Wins");
        }
        else if(playerchoice === "paper" && computerChoice === "rock" ){
            console.log("Player Wins");
        }
        else if(playerchoice === "paper" && computerChoice === "scissors" ){
            console.log("computer Wins");
        }
        else if(playerchoice === "scissors" && computerChoice === "paper" ){
            console.log("Player Wins");
        }
        else if(playerchoice === "scissors" && computerChoice === "rock"){
            console.log("computer Wins");
        }
    }
    else{
        console.log("You didn't  enter your choice!");
    }

}

else{
    console.log("Ok Next Time!");
}