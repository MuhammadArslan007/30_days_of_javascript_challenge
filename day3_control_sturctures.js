//Task/Activities

//Activity1 if-else
let num = -5
if(num>0){
    console.log("Positive");
}
else if(num === 0){
    console.log("Zero");
}
else{
    console.log("Negative");
}

let age = 19
if(age>18){
    console.log("Person is Eligible");
}
else{
    console.log("Person Is Not Eligible");
}

//Activity2 Nested If-Else Statments
let num1 = 1
let num2 = 0
let num3 = -3

if(num1>=num2){
    if(num1>num3){
        console.log(`The Greates number is ${num1}`);
    }else{
        console.log(`The Greates number is ${num3}`);
    }
}
else{
    if(num2>=num3){
        console.log(`The Greates number is ${num2}`);
    }else{
        console.log(`The Greates number is ${num3}`);
    }
}

//Activity3 Switch Case
let daynum = 6
switch(daynum){
    case 1:
        console.log("Monday");
        break
    case 2:
        console.log("Tuesday");
        break
    case 3:
        console.log("Wednesday");
        break
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
        break
    case 6:
        console.log("Saturday");
        break
    case 7: 
        console.log("Sunday");
        break
    default:
        console.log("Enter Valid DayNumber");
}

let num5 = -1

switch(true){
    case (num5>90) :
        console.log("A Grade");
        break
    case (num5>80):
        console.log("B Grade");
        break
    case (num5>70):
        console.log("C Grade");
        break
    case (num5>60):
        console.log("D Grade");
        break
    case( num5<=60 && num5>=0):
        console.log("F Grade");
        break
    default:
        console.log("Enter Valid Marks");
}

//Activity4  Ternary Operator

let num6 = 0
num6>=0? console.log("Positive"): console.log("Negative");

//Activity5 Combination of condition

let year = 2024
if(year%4 === 0 && ( year%100 !== 0 || year%400===0 )){
    console.log("Leap Year");
}else{
    console.log("Not Leap Year");
}

