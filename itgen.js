//generator function
/* function*  normalGenerator (){ 
    yield   1                  //yeild is used inside a generator function
    yield   2                   
}
const generatorObject = normalGenerator()
console.log(generatorObject.next()) //next property allows to get value of single lines of code inside generator
console.log(generatorObject.next())
console.log(generatorObject.next())
//value false is given for done since there is more code to run if true returns no more code to run
*/
// we can create an infinite loop with genertor function

function* generatorId (){ //if condition inside while loop is true, then it loops infinetly
    let id = 0
    while(true){ 
    const increment = yield id; 
    if(increment !=null){
        id += increment;
    }else{
        id++;
    }
    }
}
//iterator is function or object that we can call next property and it gives the value and done.here object is an iterator
const object = generatorId()
console.log(object.next())
console.log(object.next(5))   //we can pass values to scond next onwards and the rest of the next depends on it
console.log(object.return(10)) //if we give return to exit out generator,it gives done as true and it stops generating next values and value will be undefined and done will be true
console.log(object.next())
const object2 = generatorId()  //to reset this generator
console.log(object2.next())
console.log(object2.next())
console.log(object2.next())
/* while (object.next().done !=false){
    console.log("hello")
} */ 



/* //generator for an array

function*  generator(array){
    for(let i = 0;i<array.length;i++){
    yield array.index[i];
    }
}

const generatorObject = generator([1,2,3])
console.log(generatorObject.next()) */