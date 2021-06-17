// length, charAt(), concat(), includes(), indexOf(), replace(), search(), slice(), 
// split(), substr(), substring(), toLowerCase(), toUpperCase(), trim()
//length
var str = "Stepstone Family";
console.log(str.length)

//charAt()
console.log(str.charAt(0));
console.log(str.charAt(8));
console.log(str.charAt(9));
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
} 

var newStr="";
for (var i=str.length; i>=0; i-- ){
    newStr+=str.charAt(i)
}console.log(newStr);

//concat()

var firstname, lastname;
firstname="Adam";
lastname="Smith";

console.log(firstname.concat(" ").concat(lastname));

veryNewStr= str.concat(newStr);
console.log(veryNewStr);

//includes() returns true or false (adam and madam will return true)
var str3="Hello madam, are you here?";
console.log(str3.includes("adam"));
console.log(str3.includes("madam"))
console.log(str3.includes("madem"))

//indexOf() it gives starting index number of searched element
var str4= "Hello Mike, Welcome to Amazon world";
var newStr4= str4.indexOf("Amazon");
console.log(newStr4);

//replace() replaces the value
 var str5="Ebay is a very good website"
 var replaced=str5.replace("Ebay", "Amazon")
console.log(replaced)

//search() returns the index of given value
console.log(str5.search("very"))
console.log(str5.indexOf("very",11)) // This means: Lokk for after the 11. index number so it gives -1
// This is the only difference between seach and indexOf

//slice() extracts a section of a string and returns it as a new string.According to index number
var str6="The morning is upon us."
console.log(str6.slice(4,11))
console.log(str6.slice(4,-2))
console.log(str6.slice(12))
console.log(str6.slice(30)) //"" verir.

//split() is used to split a string into an array of substring and returns the new array.
// Delimeter for the split function. It can be a space or any character and javascript will look for that inside the strin and split.
var str7="It will display the size of the array"
var arr= str7.split(" ")
console.log(arr)
for(var i=0; i<arr.length; i++){
    console.log(arr[i])
}
var strArr= str7.split("the")
console.log(strArr)

//substr() first strating index than number of charcters to be shown
console.log(str7.substr(3))
console.log(str7.substr(3,4))
console.log(str7.substr(-3, 2)) // - starts from end and adds 2 characters so it is "ra"
console.log(str7.substr(-40))

console.log("=================")
//substring() needs starting and ending index to show. The main difference between substr() is this..
console.log(str7.substring(3))
console.log(str7.substring(3, 4))
console.log(str7.substring(-3, 2))
console.log(str7.substring(-40))

console.log("=================")

// toLowerCase(), toUpperCase()
console.log(str7.toLowerCase())
console.log(str7.toUpperCase())
console.log("=================")

//trim() removes the spaces from only both starts and ends of a string
var str8="   Javascript    "
console.log(str8)
console.log(str8.trim()) 