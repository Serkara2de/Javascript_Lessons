

function Car(make, model, year, color, engine,hp,started) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.engine = engine,
    this.started= started,
    this.start= function() {
            this.started = true;
        }
    this.stop= function() {
        this.started = false;
    },
    this.drive = function () {
        if (this.started) {
            console.log("Engine is on and ready to go")
        } else {
            console.log("First you need to start engine")
        }
    }
}

var bmw = new Car("BMW", "M3", 2018, "Red",{cyclinder:5, size:3.5, turbo:true}, [300,400], false);
console.log(bmw);

//Another Function Constructor example for Bus
function Bus(make, model, year, capacity, currentPassengerNumber){
    this.make=make;
    this.model=model;
    this.year=year;
    this.capacity=capacity;
    this.currentPassengerNumber=currentPassengerNumber;
    this.availableSeat= function(){
        return this.capacity-this.currentPassengerNumber;
    }
} // I don't want to rewrite engine funcs for this bus. So we use prototype

//WHEN WE CREATED A FUNCTION JS CREATES 2 OBJECTS
//FIRST ONE IS OBJECT THAT VE CREATED, SECOND ONE IS PROTOTYPE
// 1- function name object
// 2- prototype object

// TO REACH PROTOTYPE THERE TWO WAYS
// 1- Z.S. Car.prototype
// 2- Z.S. bmw.__proto__

console.log(Car.prototype==bmw.__proto__)
console.log("===========");

//add property to to prototype

//1- adding property with object
console.log(bmw.__proto__);// before it is empty
bmw.__proto__.test="test1234";
console.log(bmw.__proto__); // after with test property
bmw.maxSpeed=300; // If defined a this property first checks the program first object than the constructor for the maxSpeed
console.log("===========");

//2- add property from constructor
console.log(Car.prototype);
Car.prototype.maxSpeed=250;
console.log(Car.prototype);

console.log(bmw.maxSpeed);


// Other example

var mercedes= new Car("Mercedes", "C350", 2006, "Silver", {cylinder:6, size:3.5, turbo:true}, [600,700], false)
console.log(mercedes)
console.log(mercedes.maxSpeed)
console.log(mercedes.test)

// Explanation: function constructor itself and objects that are derived from that fonction Constructor have acces to 
// same prototype object and reach, add, update the properties and methods. Whenever we created new object from that 
// constructor, it will has same right on the prototype.





