// Adding behavior to the object

var car4 = {
    make: "Toyota",
    model: "Camry",
    milage: 27000,
    year: 2018,
    color: "Grey",
    engine: 2.5,
    started:true,
    start:function(){
        this.started=true;
    },
    stop:function(){
        this.started=false
    },
    drive:function(){
        return "I am driving "+this.make; // Here this means make is inside the object
    },
    drive2:function(){
        if(this.started){
            console.log("Engine is on and ready to go")
        }else{
            console.log("First you need to start engine")
        }
    }
}

console.log(car4.drive());
car4.drive2();