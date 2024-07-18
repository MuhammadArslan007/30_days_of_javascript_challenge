//Task/Activities

//Activity1 arthmetic operator
let num1 = 5
let num2 = 6
console.log(num1+num2);
console.log(num2-num1);
console.log(num1*num2);
console.log(num2%num1);
console.log(num1**num2);

//Activity2 assignment operator

num1 += num2
console.log(num1);
num1 -= num2
console.log(num1);

//Activity3 comparison Operator
console.log(num1>num2);
console.log(num1<num2);

console.log(num1>=num2);
console.log(num1<=num2);

console.log(num1 == num2);
console.log(num1 === num2);


//Activity Logical operator
let num3 = 7
let num4 = 5
console.log(num1>num2 && num3>num4);
console.log(num1<num2 && num3>num4);
console.log(num1<num2 || num3>num4);
console.log(num1>num2 && num3>num4);
console.log(!num1);
console.log(!true);

//Activity5 ternary operator
let checknum = 0
checknum == 0? console.log("Zero"): (checknum%2?console.log("odd"):console.log("even"));