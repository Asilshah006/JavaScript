
// Conditionals : Switch Statements

//Syntax

let num = 6;

switch(num){
    case 1 :
        console.log("Your Number is 1");
        break;
    case 3 :
        console.log("Your Number is 3");
        break;
    default:
        console.log("Invalid Number")       
}

let player = "scissors";
let computer = "paper";

switch(player){
    case computer:
        console.log("Tie game");
        break;

    case "rock":
        if(computer == "paper"){
            console.log("Computer Wins");
        }
        else{
            console.log("Player Wins");
        }
        break;
   
    case "scissor":
        if(computer == "rock"){
            console.log("Computer Wins");
        }
        else{
            console.log("Player Wins");
        }
        break;

    default:
        if(computer == "scissors"){
            console.log("Computer Wins");
        }
        else{
            console.log("Player Wins");
        }
        break;

}