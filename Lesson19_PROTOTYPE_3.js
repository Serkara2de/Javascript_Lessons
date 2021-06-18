

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
console.log(bmw);
var mercedes = new Car("Mercedes", "C350", 2006, "Silver", { cylinder: 6, size: 3.5, turbo: true }, [600, 700], false)


Car.prototype.test="Test123";
bmw.__proto__.printWholeBrand=function(){
    console.log(this.make+" "+this.model)
}
bmw .printWholeBrand();
mercedes.printWholeBrand();

Car.prototype.start=function(){
    this.started = true;
}

Car.prototype.stop = function () {
    this.started = false;
}

Car.prototype.drive=function(){
    if (this.started) {
        console.log("Engine is on and ready to go")
    } else {
        console.log("First you need to start engine")
    }
}

function Bus(make, model, year,started, capacity, currentPassengerNumber) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.started=started;
    this.capacity = capacity;
    this.currentPassengerNumber = currentPassengerNumber;
    this.availableSeat = function () {
        return this.capacity - this.currentPassengerNumber;
    }
}

// Connecting prototypes (In order to acces all properties of other prototype)
Bus.prototype=Car.prototype;
var volvo = new Bus("Volvo", "B11", 2011, false, 54, 20)
volvo.__proto__.firstDoor="closed";
console.log(volvo.__proto__)
console.log(volvo.test)
volvo.printWholeBrand();

volvo.start();
console.log(volvo.drive());

