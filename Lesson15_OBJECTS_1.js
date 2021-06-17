/*
var car1Make ="Toyota";
var car1Model = "Camry";
var car1Year = 2018;
var car1Color = "Grey";
var car1Engine = 2.5;

var car2Make = "Honda";
var car2Model = "Civic";
var car2Year = 2015;
var car2Color = "Blue";
var car2Engine = 1.8;

var car3Make = "Audi";
var car3Model = "A7";
var car3Year = 2015;
var car3Color = "Black";
var car3Engine = 3.0;

console.log("I have " + car1Year + " " + car1Make + " " + car1Model);
console.log("I have " + car2Year + " " + car2Make + " " + car2Model);
console.log("I have " + car3Year + " " + car3Make + " " + car3Model);
*/


// First way of creating an object
var car1 = {
    // key and values for the object
    make:"Toyota",
    model:"Camry",
    year:2018,
    color:"Grey",
    engine:2.5
}

//Reaching object
//First Way
console.log(car1.make);
console.log(car1.year);
console.log(car1.color);

console.log("=============");
//Second way
console.log(car1["make"])
console.log(car1["engine"])
console.log(car1["year"])//Here year string is for calling value not e real string
console.log("=============");

// Second way of creating an object
var car2 = new Object();
car2.make="Honda";
car2.Model = "Civic";
car2.Year = 2015;
car2.Color = "Blue";
car2.Engine = 1.8;

console.log(car2)
console.log("=============");

//How to update property

car2.color="White";
console.log(car2.color);

delete car2.color;
console.log(car2.color);

//add new property
car1.turbo=true;
console.log(car1.turbo);

console.log("=============");

// TASK Display "My Audi engine size is 3.0 and hp is 550"

var car3={
    make:"Audi",
    model:"Q7",
    engine:{
        cylinders:4,
        size:"3.0",
        turbo:true
    },
    hp:[350,400,500]
};

console.log("My "+car3.make+" engine size is "+car3.engine.size+" and hp is "+car3.hp[2]);

// Task You are looking for a car
//      -Built in 2013 or newer
//      -20000 miles or less

//Write a fınction that will prequalify cars for you. If the car meets your criteria then the function
// returns true; otherwise the car is not worth your time and the function returns false
var car4 = {
    make: "Toyota",
    model: "Camry",
    milage:27000,
    year: 2018,
    color: "Grey",
    engine: 2.5
}

function carSelection(car4){
if(car4.year>=2013 && car4.milage<=20000){
    return true;
}else{
    console.log("It is not worth your time!")
    return false;
    }
}

console.log(carSelection(car4));

