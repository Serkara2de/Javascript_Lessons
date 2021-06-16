// First way create an empty array and than assign values
var countries = new Array(); //ORRR var countries = new Array("USA", "Germany", "Turkey");
countries = ["USA", "Germany", "Turkey"];
console.log(countries);


// Second way create directly with values COMMON WAY
var fruits=["Orange", "Banana", "Plum", "Apple"];
console.log(fruits[1])
console.log(fruits.length);

for (var i=0; i<fruits.length; i++){
    console.log(fruits[i])
}
