//Task/Activities

//Activity1 Function Declaration

function checkEven(num){
    if(num == 0){
        console.log("Zero");
    }
    else if(num>0){
        console.log("Positive");
    }
    else{
        console.log("Negative");
    }
}

checkEven(5)

function calculateSquare(num){
    return num**2
}
console.log(calculateSquare(5));

//Activity2 Function Exprestion
const funcExpression = function (num1, num2){
    if(num1>num2) console.log(`The number ${num1} is greater than ${num2}`);
    else if(num2>num1) console.log(`The number ${num2} is greater than ${num1}`)
    else console.log("Number Are Equal");
}

funcExpression(4,-5)

const stringConcat = function (firstName, lastName){
    return `${firstName} ${lastName}`
}

let fullName = stringConcat("Muhammad", "Arslan")
console.log(fullName);

//Activity Arrow Function

const arrowFunction = (num1, num2) => num1+num2;
console.log(arrowFunction(2,4));

const strLen = str => {
    if(str.length>5){
        return true
    }
    else{
        return false
    }
}

console.log(strLen("Muhammad Arslan"));

//Activity4 Function Parameters and Default Values

function productOfTwoNum(num1, num2=1){
    return num1 * num2
}

console.log(productOfTwoNum(4));
console.log(productOfTwoNum(4,5));

function greeting(name, age = 17){
    return `Asslam-o-Alikum ${name} your age is ${age}. What are going?`
}
console.log(greeting("Muhammad Arslan", 22));

//Activity5 Higher Order Function
function higherOrder(func, num){
    for(let start=1; start<=num; start++){
      func()
    }
}

function funcThatExe(){
    console.log("Executing in Higher-Order func");
}
higherOrder(funcThatExe, 2)

function higherOrderFunction(func1, func2, num){
    let output1 = func1(num)
    let output2 = func2(output1)
    return output2
}

const f1 = (num) => num**2
const f2 = num => num*2

console.log(higherOrderFunction(f1,f2, 4));