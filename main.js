// // Fetch API requires callbacks, promises, Await/Async, Thenables.

// //callbacks

// // function firstFunction(parameter , callback){

// //     // do stuff

// //     callback();
// // }


// // // CallBack Hell

// // firstFunction(para , function(){
// //     SecondFunction(para , function(){
// //         ThirdFunction(para ,function(){

// //         });
// //     });
// // });



// // Promises

// // 3 Status Pending , fulfilled, Rejected

// const myPromise = new Promise((resolve , reject)=>{
//     let error = false;

//     if(!error){
//         resolve("Yes, Resolve the promise");
//     }
//     else{
//         reject("No, reject the Promise");
//     }
// });

// const myNewPromise = new Promise((resolve , reject)=>{
//     setTimeout(function(){
//         resolve("MyNextPromise Resolved!")
//     } , 3000);
// })

// myNewPromise.then((value)=>{
//     console.log(value);
// });

// myPromise.then((value)=>{
//     console.log(value);
// });



// // myPromise.then((value)=>{
// //     return value;
// // }).then(newValue=>{
// //     console.log(newValue);
// // }).catch(err=>{
// //     console.error(err);
// // })
// // ;




// const user = fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>{
//     return response.json();
// })
// .then(data=>{
//     //console.log(data);
//     data.forEach(user => {
//         console.log(user);
//     });
// })

// console.log(user);







// //Async Await


// const myUser = {
//     userList:[]
// }

// const myFunc = async () =>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
//     //console.log(jsonUserData);
//     return jsonUserData;
// }

//     async function anotherFunc(){
//         const data = await myFunc();
//         myUser.userList = data;
//     //    console.log(myUser.userList);
//     }

//     anotherFunc();

//     console.log(myUser.userList);

 





// Workflow Function

// const getAllUserEmail = async ()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
    
//     const getUserEmail = jsonUserData.map(user => {
//         return user.email;
//     })

//     PostToWebPage(getUserEmail);
// } 

// const PostToWebPage = (data) =>{
//     console.log(data);
// }
//     getAllUserEmail();


// 2nd parameter of fetch

// const getDadJoke = async () =>{

//     const response = await fetch("https://icanhazdadjoke.com/" , {
//         method : "GET",
//         headers:{
//             Accept: "application/json" 
//         }
//     });

//     const jsonDadJoke = await response.json();

//     console.log(jsonDadJoke);
// }

// getDadJoke();

// const dadJoke = {
//     id: 'ozsPmORZvzd',
//     joke: 'A bartender broke up with her boyfriend, but he kept asking her for another shot.', status: 200}

// const PostDadJoke = async (JokeObj) =>{

//     const response = await fetch("https://httpbin.org/post" , {
//         method : "POST",
//         headers:{
//             "Content-type": "application/json" 
//         },
//         body: JSON.stringify(JokeObj)
    
//     });

//     const jsonDadJoke = await response.json();

//     console.log(jsonDadJoke.headers);
// }

// PostDadJoke(dadJoke);


const getDataFromPost = () =>{
    const requestJoke = {
        firstName: "Bruce",
        lastName : "Lee",
        categories : ["nerdy"]
    };
    return requestJoke;
}

const buildURL = (requestData) =>{
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

const GetJokeFromWeb = async (myUrl) => {
    const response = await fetch(myUrl);

    const jsonResposnse = await response.json();

    const joke = jsonResposnse.value.joke;

    postToWebPage(joke);
}

const PostToWebPage = (joke) =>{
    console.log(joke);
} 

const processRequest = async () =>{
    const requestData = getDataFromPost();
    const url = buildURL(requestData);
    await GetJokeFromWeb(url);

    console.log("finished");
}

processRequest();