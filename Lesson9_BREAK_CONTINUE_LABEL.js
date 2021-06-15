console.log("=====break=====")
for (var i=0; i<10; i++){
    if(i==6){
        break;
    }
    console.log(i)
}

console.log("=====continue=====")

for (var i = 0; i < 10; i++) {
    if (i == 7) {
        continue;
    }
    console.log(i)
}