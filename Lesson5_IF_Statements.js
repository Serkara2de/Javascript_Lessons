

// IF statements
console.log("before if");

if(5>3){
    console.log("First Statement")
}

console.log("After if");
console.log("================")

var apples, oranges;
apples = 10;
oranges=6;
if(apples>oranges){
    console.log("I have more Apples than Oranges ");
};
console.log("================")

var userName ="Adam";

if(userName=="Adam"){
    console.log("Welcome "+userName)
}
console.log("================")

var books = 12;
if(books<20){
    books= books+10;
}
console.log(books);


//IF ELSE Statements

/*var isTheWeatherNice = false;

if(isTheWeatherNice){
    console.log("Lets go swimming")
}else{
    console.log("Stay at home and watch TV")
}
console.log("================")

var benutzerName, password, inputBenutzerName, inputPassword;

benutzerName="Mattihas"
password="gehalt.de"

inputBenutzerName = prompt("Enter benutzername");
inputPassword= prompt("Enter password");

if(benutzerName==inputBenutzerName && password==inputPassword){
    console.log("Acces granted")
    console.log("Welcome "+benutzerName)
}else{
    console.log("Benutzername oder passwort ist nicht korrekt!")
}
*/

//IF ELSE IF ELSE Statement

var score;
score= parseInt("60");

if(score>90){
    console.log("A")
} else if(score > 80 ) {
    console.log("B")
} else if (score > 70 ) {
    console.log("C")
} else if (score > 60 ) {
    console.log("D")
} else {
    console.log("F")
}


