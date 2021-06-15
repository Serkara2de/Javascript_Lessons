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

console.log("=====break label=====")

//00, 01...55
loop1:
for(var i=0; i<5;i++){
    loop2:
    for(var j=0;j<5;j++){
        console.log(i+","+j)
        if(i==3 && j==3){
            break loop1; //loop1'i durdurur.Normal break sadece loop2 yi durdururu loop1 kaldığı yerden loop2 ile devam eder.
            
        }
    }

}