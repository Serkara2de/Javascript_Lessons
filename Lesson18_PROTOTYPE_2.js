
//creating empty object two ways
var obj1={};
var obj2= new Object();

// Js engine top level function constructor Object()
// top level prototype Object prototype

function Car(make, model, year, color, engine, hp, started) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.color = color,
        this.engine = engine,
        this.started = started,
        this.start = function () {
            this.started = true;
        }
    this.stop = function () {
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

var bmw = new Car("BMW", "M3", 2018, "Red", { cyclinder: 5, size: 3.5, turbo: true }, [300, 400], false);

var mercedes = new Car("Mercedes", "C350", 2006, "Silver", { cylinder: 6, size: 3.5, turbo: true }, [600, 700], false)

// Creating properties from top level Object
obj1.__proto__.power="300hp"
console.log(mercedes.power)

bmw.__proto__.__proto__.objMethod=function(){
    console.log("I am an object")
}
// We are calling it from another objects and they have the same access.
obj2.objMethod();
obj1.objMethod();
mercedes.objMethod();
Car.objMethod();
Object.objMethod();
