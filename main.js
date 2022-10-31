
// Conditionals : IF Statements

//Syntax

let num = 9;

let reply;

if(num%2==0){
    reply = "Even Number";
    
}
else{
    reply="Odd Number";
}
console.log(reply);

let score = 59;
let grade;
let collegeStudent = false;

if(score >=90){
    grade = 'A';
}else if(score >=80){
    grade = 'B';
}else if(score >=70){
    grade = 'C';
}else if(score >=60){
    grade = 'D';
}else{
    if(collegeStudent){
        grade = 'U';
    }
    else{
        grade = 'F'
    }
}
console.log(grade);


