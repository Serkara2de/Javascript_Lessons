// template string

// With the help of `` sign and with syntax below we may do string manipulation Just Like in Jenkins
console.log("********* Template String ************")
let year = 1977;

console.log("I am "+(2021-year)+" years old")

console.log(`I am ${2020-year} years old`)

function calAge(year){
    return 2019-year;
}

console.log(`I am ${calAge(year)} years old.`)

console.log("********* Arrow  Function ************")
 
//ES5 creating function
//way 1

function printStrES5(a){
    return a
}
console.log(printStrES5("Test123 Way 1"))

console.log("====================")

// way 2
var printStrES52 = function(b){
    return b
}
console.log(printStrES52("Test123 Way 2"))


console.log("====================")
console.log("====================")
//ES6 creating function

//with one parameter
let printStrEs6 = a => a;
console.log(printStrEs6("Test123 ES6"))

// without parameter 
let printStrES6OhneParameter = () => {console.log("Test123 ES6 without parameter")}
printStrES6OhneParameter()

// multi parameter function ES6 
let sum = (num1, num2, num3) => num1+num2+num3;
console.log(sum(2,4,6))

