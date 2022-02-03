/* //pure functions
sum(x, y)           // sum is function taking x and y as arguments
    return x + y    // sum is returning sum of x and y without changing them

 */
//calculating area ,circumference with single function

/*   const radius = [2,3,4,5]

    const area = function (radius){
        return Math.PI *radius*radius;
    };

    const circumference = function(radius){
        return 2*Math.PI*radius;
    }
    const calculate = function(radius,logic){
        const result =[];
        for(i=0;i<radius.length;i++){
            result.push(logic(radius[i]))
        }return result;

    };

    console.log(calculate(radius,area))
    console.log(calculate(radius,circumference))

    console.log(radius.map(area))   //map function does the same
    
    Array.prototype.calculate = function(logic){ //if we write in this form calculate can be used as same as map
        const result =[];
        for(i=0;i<this.length;i++){
            result.push(logic(this[i])) //this is pointing to array
        }return result;

    };
    console.log(radius.calculate(area)) */

//array

 /* let studentIds = [2, 6, 8, 9, 60];
console.log(studentIds);

for(i=0;i<studentIds.length;i++){
    copystudentIds[i] +=   5;
}
console.log(studentIds) 
 */
//
/* let studentIds = [2, 6, 8, 9, 60];

//let copystudentIds = studentIds  //if we make a copy like this it copies the reference too
let copystudentIds = [...studentIds]//this is called rest operator which copies the values only
console.log(studentIds);

for(i=0;i<copystudentIds.length;i++){
    copystudentIds[i] +=   5;
}
console.log(copystudentIds) */

//object
/* 
let student ={
    id:1,
    name:"jaseela",
};
console.log(student)
//let copyStudent = student ;
let copyStudent = {...student} ; //here rest operator is in curly brackets
copyStudent.name= "jaseela jaleel"
console.log(copyStudent) */


