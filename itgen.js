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

/* function* generatorId (){ //if condition inside while loop is true, then it loops infinetly
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
console.log(object2.next()) */
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

 //array iterator
 //let arr = ["coffee","tea","milk","soda"];
/* for(let i=0;i<arr.length;i++){   //it loops over until the condition becomes false
    console.log(arr[i])
} */

/*function* demo(){
    yield arr[0];
    yield arr[1];
    yield arr[2];
    yield arr[3];
    yield arr[4];
}

let object = demo()   //object is the iterator
console.log(object.next())
console.log(object.next())
console.log(object.next())
console.log(object.return())
console.log(object.next()) */

//
/* function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}
//using generator function
function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10] */

/* //
function* generator(){
    yield 'a'
    yield 'b'
    yield 'c'
    yield 'd'
    yield 'e'
}

const it = generator()
let done = false
while(!done){
    let obj=it.next()
    console.log(obj.value)
    done=obj.done
} */

//iterables
/* function* makeIterator() {
    yield 1;
    yield 2;
}

const it = makeIterator();

for (const itItem of it) { //instead of next()
    console.log(itItem);
}

console.log(it[Symbol.iterator]() === it) */

//for ..of loop


/* function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;  //6 is not  taken in to for loop
}

for (var v of foo()) {
    console.log( v );
}
// 1 2 3 4 5

console.log( v ); // still `5`, not `6`  */

/* 
function* count(){
    for (var x = 0; true; x++) {
      yield x
    }
  }
  
  for (var x of count()) {
    console.log(x)
  } */