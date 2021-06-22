// promise

function getIntoTheCar(key, callback) {
    if (key) {
        setTimeout(() => {
            console.log("Unlocking the car...")
            console.log("Inside the car")
            callback(drive);
        }, 5000)
    } else {
        console.log("Without key You can not go on!!!")
    }
}

function startEngine(callback) {
    setTimeout(() => {
        console.log("Starting the Engine")
        console.log("Engine is on ready to go...")
        callback();
    }, 2000)
}

function drive() {
    setTimeout(() => {
        console.log("Driving")
    }, 1000)
}

//getIntoTheCar(true, startEngine)

let key=true;

let promiseGetIntoTheCar = new Promise(function(resolve, reject){
    if (key) {
        setTimeout(() => {
            console.log("Unlocking the car...")
            console.log("Inside the car")
            resolve("GetIntoTheCar: Done")
        }, 5000)
    } else {
        console.log("Without key You can not go on!!!")
        reject("GetIntoTheCar: Fail")
    }
})

promiseGetIntoTheCar.then(function(result){
    console.log(result)}).catch(function(result){
        confirm.log(result)
    })


    // Tam anlamadim bir daha bakkkk