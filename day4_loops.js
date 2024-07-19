// Tasks/Activities

//Activity1 for loop
for(let num=1; num<=10; num++){
    console.log(num);
}

for(let num=1; num<=10;num++){
    console.log(`5 * ${num} = ${5*num}`);
}

//Activity2 while loop
let sum = 0
let start = 1
while(start<=5){
    sum += start
    start++
}
console.log(`the sum is ${sum}`);

let s = 10
while(s>=1){
    console.log(s);
    s--
}

//Activity3 Do while loop
let dos = 1
do{
    console.log(dos);
    dos++
}while(dos<=5)

let factorial = 1
let fs = 1
do {
    factorial = factorial * fs
    fs++
}while(fs<=5)

console.log(factorial);

//Activity4 nested loop

for(let row = 1; row<=5; row++){
    let printStar = ""
    for(let col=1; col<=row; col++){
        printStar = printStar + "* "
    }
    console.log(printStar);
}

//Activity5 Loop control statment
for(let start=1; start<=10;start++){
    if(start===5) continue;
    console.log(start);
}
for(let start=1; start<=10;start++){
    if(start===7) break;
    console.log(start);
}