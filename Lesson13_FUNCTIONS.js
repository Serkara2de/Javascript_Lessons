
// Like methods in Java
//Without parameter
function sayHi(){
    console.log("Hi Everyone!")
}
sayHi();


//With parameter
function saySpecialHi(name){
    console.log("Hi "+name)
}
saySpecialHi("Serkan");

//With array parameter 
function sayHiPeople(array){
    for (var i=0; i<array.length; i++){
        console.log("Hi "+array[i]+"!")
    }
}

sayHiPeople(["Serkan", "Jamal", "Ozi"])
//ORRR
var people= ["Serkan", "Jamal", "Ozi"]
sayHiPeople(people)

 function sumNumbers(num1, num2){
     console.log(num1+num2)
 }
 sumNumbers(10,20)

 function sumArray(myArray){
     var sum=0;
     for(var i=0; i<myArray.length; i++){
         sum=sum+myArray[i]
     } console.log(sum)
 }
 sumArray([10,20,30,40])

 //With return
function sumArray2(myArray) {
    var sum = 0;
    for (var i = 0; i < myArray.length; i++) {
        sum = sum + myArray[i]
    } return sum;
}
console.log(sumArray2([10, 20, 30, 40])*2)
//ORRR
var result = sumArray2([10, 20, 30, 40]);
console.log(result*2)

//function call in function
function timesTwo(num1,num2){
    console.log(num1*num2)
}
timesTwo(4,sumArray2([10,20,30,40]))


//Example
function login(username, password){
    if(username="Adam" && password=="1234"){
        return true;
    }else{
        return false;
    }
}

function buy(loginCheck, item){
   var productList=["Apple","Dell", "Lenovo"]
    if(loginCheck== true){
        for(var i=0; i<productList.length; i++){
            if(productList[i]==item){
                console.log("Thank your your order has benn placed")
                break;
            } else if (i == productList.length - 1) {
                console.log("We couldn't find your item")
            }
        }
    }else{
        console.log("Acces denied. You should first login")
    }
}

buy(login("Adam", "1234"),"Acer");