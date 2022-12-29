const view1 = document.querySelector("#view1");
// console.log(view1);

view1.style.display = "none";

const view2 = document.getElementById("view2");
// console.log(view2);

//view2.style.display = "flex";
view2.style.display = "none";

const vie3 = document.querySelector("#view3");
vie3.style.display ="flex";








// Syntax : addEventListener("click , function , useCapture");

// const doSomething = () =>{
//     alert("doing Something");
// }

// //h2.addEventListener("click" , doSomething , false);
// // h2.removeEventListener("click" , doSomething , false);

// h2.addEventListener("click", (event) => {
//     console.log(event.target);
//     event.target.textContent = "Clicked";
// } );


document.addEventListener("readystatechange" , (event) =>{
    if(event.target.readyState === "complete"){
        console.log("readystate : complete");
        initApp();
    }
} );

// const initApp = () => {
//     const view = document.querySelector("#view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");

//     view.addEventListener("click" , (event) =>{
    
//         //view.style.backgroundColor = "purple";

//         view.classList.toggle("purple");
//         view.classList.toggle("darkblue");

//     }, 
//     false );

//     div.addEventListener("click" , (event) =>{
        
//         //div.style.backgroundColor = "blue";

//         div.classList.toggle("blue");
//         div.classList.toggle("black");

//     },
//     false );

//     h2.addEventListener("click" , (event) =>{
//         //event.stopPropagation();
//        //event.target.textContent = "Clicked";
 
//         let mytext = event.target.textContent;

//         mytext === "My 2nd View"
//         ? (event.target.textContent = "Clicked")
//         : (event.target.textContent = "My 2nd View"); 
 
//     },
//     false );

// }

//     const nav = document.querySelector("nav");

//     nav.addEventListener("mouseover", (event) => {
//         event.target.classList.add("height100");
//     }
//     ,false);

//     nav.addEventListener("mouseout" , (event) =>{
//     event.target.classList.remove("height100");        
//     }
//     ,false);

const initApp = () =>{
    const view3 = document.querySelector("#view3");

    const myform = view3.querySelector("#myForm");

    myform.addEventListener("submit" , (event) =>{
        event.preventDefault();
        console.log("Submit Event");
    },
    false)

}