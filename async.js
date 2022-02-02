/* //async
console.log("asynchronous")

setTimeout( ()=>{
    console.log("after 2000ms")
},2000)

console.log("hey") */



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
 */

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