//array that contains one or more array
var cars = [
    ["Honda",2020, "Civic"],    //0
    ["Toyota",2021, "Corolla"], //1
    ["BMW",2019, "3.20"],       //2
    ["Audi", 2018, "A6"]        //3
      //0     //1   //2
];

console.log(cars[0][0]);
console.log(cars[2][2]);

for(var i=0; i<cars.length;i++ ){
    for(var j=0; j<cars[i].length; j++){
        console.log(cars[i][j])
    }
}