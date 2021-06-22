//async and sync


// async: skipps first one according to setTimout 2 seconds executes other lines 
// than after 2 second comes back and runs this func.
/*
function first(){
    setTimeout(() =>{
        console.log("first one")
    },2000)
   
}

function second() {
    console.log("second one")
}

function third() {
    console.log("third one")
}

first();
second();
third();

// setTimeout() like syntax below waits 3 seconds and runs like Thread.sleep in Java
setTimeout(()=> {
    console.log("after wait")
},3000)
*/
// callback

/*
function first1(callback) {
    setTimeout(() => {
        console.log("first one")
        callback(third3);
    }, 2000)

}

function second2(callback) {
    setTimeout(() => {
        console.log("second one")
        callback();
    }, 1000)
}

function third3() {
    setTimeout(() => {
        console.log("third one")
    }, 1000)
}

first1(second2);
*/
console.log("=========")

// Another callback example

/*
Drive a car

1- Get into the car
2- Start the engine
3- Drive
*/

function getIntoTheCar(key, callback){
    if(key){
    setTimeout(()=>{
        console.log("Unlocking the car...")
        console.log("Inside the car")
        callback(drive);
    },5000)
}else{
    console.log("Without key You can not go on!!!")
}
}

function startEngine(callback){
    setTimeout(()=>{
        console.log("Starting the Engine")
        console.log("Engine is on ready to go...")
        callback();
    },2000)
}

function drive(){
    setTimeout(()=>{
        console.log("Driving")
    },1000)
}

getIntoTheCar(true,startEngine)
