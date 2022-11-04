// Loops

let myNumber = 51;


while(myNumber <=100){
    console.log(myNumber);
    myNumber++;
}

let myNumber1 = 51

do{
    console.log(myNumber1);
    myNumber+= 2;
}while(myNumber <= 50);

let Name = "Asil";

for(let i = 0 ; i<=Name.length ; i++){
    console.log(Name.charAt(i)) ;  
}


let counter = 0;
let myLetter;
while(counter<=3){
    myLetter = Name[counter];
    console.log(myLetter);

    if(counter === 1){
        counter +=2;
        continue;
    }

    if(myLetter === "i"){
        break;
    }
    counter++
}