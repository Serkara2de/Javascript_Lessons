// For in loop, function constructor
/*
Syntax
for(variable in object){
    code..
}
*/

var car4 = {
    make: "Toyota",
    model: "Camry",
    milage: 27000,
    year: 2018,
    color: "Grey",
    engine: 2.5
}

for ( carProperties in car4) {
    console.log(carProperties+":"+car4[carProperties])
}

console.log("===============")
var currentModel="";
for(carProperties in car4){
    if(carProperties=="model"){
        currentModel=car4[carProperties]
    }
}
console.log(currentModel)


//Object contructor creation
//define my template

function Car(make, model, year, color, engine){
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
    this.engine=engine;
    this.drive= function(){
        console.log("I am driving "+this.make)
    }
}

//create objects from function contructor

var toyota = new Car("Toyota", "Camry", 2018, "Blue", 2.0);
var mercedes = new Car("Mercedes", "C350", 2006, "Silver", 3.5);
var honda = new Car("Honda", "Civic", 2010, "Blac", 1.6);
var bmw = new Car("BMW", "M3", 2018, "White", 3.2);
console.log(mercedes)
console.log(mercedes.color)
mercedes.drive();

console.log("===============")
//adding properties to object
mercedes.sunroof=true;
console.log(mercedes.sunroof);


console.log("===============")
//adding methods/functions to object
mercedes.calcMaxSpeed= function(gang, engine){
    console.log("Max speed is "+(gang*engine)+"km")
}
mercedes.calcMaxSpeed(7,35);
