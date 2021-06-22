// Array

// map()
// map() method creates a new arry with the results of calling a provided function on e very element in the calling array.

let numArray = [1,2,3,4,5,6]

let arr1 = numArray.map(num => num*2)
console.log(arr1)
console.log("=================")


//from()
let str = "Cybertek12335rrrrr"
let x = Array.from(str)
console.log(x)
console.log("=================")

// findIndex()
// findIndex() returns the index of the first element in the array that matches with the provided function

var ages = [12,13,15,16,20.17,18,21,24]
//index     0  1   2  3  4  5  6  7 
console.log(ages.findIndex(age => age>=18))

//find()
//find() returns the value of the first element in the array that matches with the provided function
console.log(ages.find(age => age>=21))

// shortcut explanation of the (the long way of creating function) above
function calAge(age){
    return age>=21
}