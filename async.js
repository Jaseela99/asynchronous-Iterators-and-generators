/* //async
console.log("asynchronous")

setTimeout( ()=>{
    console.log("after 2000ms")
},2000)

console.log("hey") */

/* 
 function foo(){}  //function baz is called then bar()then foo()
function bar(){
  foo();
}
function baz(){
  bar();
}
baz();  */



/* //async await
let data;
setTimeout(()=>{     //due to setTimeout data is loaded after 2s ,hence data.length is undefined.
    data=[1,2,3];
},2000);

console.log(data.length) */

//to make it synchronous we use async

/* let result=new Promise((resolve,reject)=>{  //promise takes two value resolve for success and reject for failure
    setTimeout(()=>{     
    let data =[1,2,3];
    resolve(data)
    },2000);

})

async function demo(){
let response = await result;   //await is used to complete the code by waiting it can be used inside async only
console.log(response.length)   
}
demo()


 *///promise

/* let p = new Promise((resolve,reject)=>{
    let a =3               //if a=2 then it get rejected
if (a==3){
    resolve('success')
}else{  reject('failed')}
})


p.then ((message)=>{            //if it resolves we use then
    console.log(message)
}).catch((message)=>{
    console.log(message)        //if not catch
}) */

//async await

 async function jaseela(){           // when we give async function it returns a promise
    return "jaseela"
}
let a = jaseela()
console.log(a)

//promise

/* const checkData = (data)=>                                     //if there is only one statement we can use it without{},otherwise use retun keyword
 new Promise ((success,failure)=>{
        if (data =="user"){
            success("accesible");
        }else{
            failure("not accessible");
        }
    })


checkData("user")
.then((value)=>{
    console.log(value)
})
.catch((err)=>{
    console.log(err)
}) */

//callbacks


 /* const checkResult = (value,callback)=>{ 
    let result;
    if(value >=35){
      result ="passed";
    }else{
      result ="failed";
    }
     callback(result)
 }
 const handleResult = (value)=>{
console.log(value)
 } 
 checkResult(40,handleResult) //value and reference is passed */

/*  //Note that the item in the click method's parameter is a function, not a variable.
//The item is a callback function
$("#btn_1").click(function() {
    alert("Btn 1 Clicked");
  }); */


  /* //here we pass an anonymous function
  var friends = ["Mike", "Stacy", "Andy", "Rick"];

  friends.forEach(function (eachName, index){
  console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
  }); */
 

  //passing named function 
  
  /* // global variable
var allUserData = [];

// generic logStuff function that prints to console
function logStuff (userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }

    }

}

// A function that takes two parameters, the last one a callback function
function getInput (options, callback) {
    allUserData.push (options);
    callback (options);

}

// When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will called back (or executed) inside the getInput function
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
//  name: Rich
// speciality: JavaScript
 */

/* //Global variable
var generalLastName = "Clinton";

function getInput (options, callback) {
    allUserData.push (options);
// Pass the global variable generalLastName to the callback function
    callback (generalLastName, options);
} */


/* //using this keyword here refers to the global window
// Define an object with some properties and a method
// We will later pass the method as a callback function to another function
var clientData = {
    id: 094545,
    fullName: "Not Set",
    // setUserName is a method on the clientData object
    setUserName: function (firstName, lastName)  {
        // this refers to the fullName property in this object
      this.fullName = firstName + " " + lastName;
    }
}

function getUserInput(firstName, lastName, callback)  {
    // Do other stuff to validate firstName/lastName here

    // Now save the names
    callback (firstName, lastName);

}
 getUserInput ("Barack", "Obama", clientData.setUserName);

console.log (clientData.fullName);// Not Set

// The fullName property was initialized on the window object
console.log (window.fullName); // Barack Obama*/


/* //using apply function
//Note that we have added an extra parameter for the callback object, called "callbackObj"
function getUserInput(firstName, lastName, callback, callbackObj)  {
    // Do other stuff to validate name here

    // The use of the Apply function below will set the this object to be callbackObj
    callback.apply (callbackObj, [firstName, lastName]);
}

// We pass the clientData.setUserName method and the clientData object as parameters. The clientData object will be used by the Apply function to set the this object
getUserInput ("Barack", "Obama", clientData.setUserName, clientData);

// the fullName property on the clientData was correctly set
console.log (clientData.fullName); // Barack Obama */