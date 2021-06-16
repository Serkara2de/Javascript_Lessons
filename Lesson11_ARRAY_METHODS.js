var car = "Mercedes";
var cars = ["Honda","Toyota", "BMW", "Audi"];

console.log(Array.isArray(car));

//isArray();
console.log(Array.isArray(cars));

//toString();
console.log(cars.toString());

//push(); adds element to the and of array
cars.push("Ford","Kia");
console.log(cars.toString());

// pop(); removes the the element at the end of array and returns the element to the caller
cars.pop();
console.log(cars.length);
console.log(cars.toString());

//shift(); removes the first element from an array and returns that removed element
var shifted = cars.shift();
console.log(shifted);
console.log(cars.toString());

//splice() To delete elements in araay, you have to pass two arguments to the splice() method
cars.splice(0,2);
console.log(cars.toString());

//splice() You can insert one or more element into an array by passing three or more arguments to the splice() method with the second argument is zero
cars.splice(2,0,"Honda")
console.log(cars.toString());

//splice() to change the element we may use like in the example
cars.splice(2,1,"Mercedes");
console.log(cars.toString());

//slice() Returns a shallow copy of a portion of an array into a new array selected from begin to end (End is not included). The original array will not be effected
var copyCars = cars.slice(1, 3);
console.log(copyCars);

// indexOf() and last indexOf() indexOf returns the first index at which a given element can be found in the array, or -1 if it is not present
console.log(cars.indexOf("Ferrari"));
console.log(cars.indexOf("Mercedes"));
console.log(cars.lastIndexOf("Audi"));

//sort() sorts the elements of an array in place and returns array
var months =["March", "Jan", "July","November"];
months.sort();
console.log(months);

var array1 = [3,1,55,8,30] //compares only the first numbers so 8 is at the end
array1.sort();
console.log(array1);

var animals = ["Cat", "dog", "Bee", "elephant"];
animals.sort();
console.log(animals);

var mixArray= [1, "Dog", "cat", 67];
mixArray.sort();
console.log(mixArray);


