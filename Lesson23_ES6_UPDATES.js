// for ...of loop

let myArray = [12,23,4,"Apple", "Hallo"]

for (const arr of myArray) {
    console.log(arr)
}
console.log("============")

// for each loop
myArray.forEach(arr1 => {
    console.log(arr1)
});

console.log("============")

//Spread
//...

let mid = [3,4]
let arr1 = [1,2,...mid,5,6]
console.log(arr1)


// Examples

function sum(num1,num2,num3,num4){
    return num1+num2+num3+num4
}
let numbers = [2,3,4,5,6,7,8]

console.log(sum(...numbers))


// rest operator used when creating a function
//...

// Example sum function 1 to unlimited

function sumAll(...otherNumbers){
    let sum = 0;
    for (var num of otherNumbers) {
        sum=sum+num;
    }
    return sum;
}
console.log(sumAll(2,3,4,5,6,7,8))