// let and const

//ES5
/*
var name5= "adam Smith";
var age5 = 1980;
console.log(name5)
console.log(age5)

name5= "Mike";
console.log(name5)      
*/
console.log("==================")


//const and let
const age6 = 1980;
console.log(age6)
//  age6= 1970;  It is not allowed to assign a new value to a const variable
console.log(age6)


//Difference between ES5 and ES6
//............1.............. 
//const: If the value is constant (not changing)
//let: If value is changeable

//............2..............
// variables are declared with var in ES5 is function-scopped.
// let and cont declarations are block-scopped({});


// Example

function fullnameES5(print){

    if (print){
        var firstname= "Adam"
        var lastname= "Smith"
        console.log(firstname+" "+lastname) //It works here.
    }
    console.log(firstname + " " + lastname) //It works here also because of the ES5
}


function fullnameES6(print){
    if (print) {
        let firstname = "Adam"
        let lastname = "Smith"
        console.log(firstname + " " + lastname) //It works here.
    }
    //console.log(firstname + " " + lastname) //It doesn´t work here  because of the ES6. It works only in the {}
    // To run it We have to declare them in function curly braces
}

//fullnameES6(true)

console.log("========================")
// Another example with For Loop

//ES5
/*
var i = 10;
for(var i = 0; i<5;i++){
    console.log(i)
}
console.log(i) //Here it is printing 5 because after i++ new value of i=5
*/

console.log("========================")
//ES6
let i = 10;
for (let i = 0; i < 5; i++) {
    console.log(i)
}
console.log(i) //Here it is printing 10 because let i is in the global scope.
