//Tasks/Activities
//Activity1 Basic error handling with try-catch
function throwError(){
    let obj = null
    obj.property
}

try {
    throwError()
} catch (error) {
    console.log('Error from above function' + error);
}


function divideTowNum(a,b){
    if(b===0) throw `your denominater b:${b} give zero division error`;
    return a/b
}

try {
    divideTowNum(2,0)
} catch (error) {
    console.log(error);
}

//Activity2 Finally Block
function dbConnection(url){
    
    if(typeof url == 'number') throw 'Error: url is not only number'
    else console.log(url);
    
}
try {
    dbConnection(0)
} catch (error) {
    console.log(error);
} finally {
    console.log("connection is closed is run every time");
}

//Activity3 Coustom Error Object
class CoustomError extends Error {
    constructor(message){
        super(message)
    }
}

function throwCoustomError(message){
    throw new CoustomError(message)
}

try {
    throwCoustomError("My Coustm Error message")
} catch (error) {
    console.log(error.message);
}

function userInputVal(input){
    if(input.length === 0){
        throw throwCoustomError("Length of Input is Zero")
    } else{
        console.log(input);
    }
}

try {
    userInputVal("")
} catch (error) {
    console.log(error.message);
}

//Activity4 Error handling in promises
const promise1 = new Promise( (Resolved, Rejected)=>{
    let randomNum = Math.floor(Math.random() * 10 + 4)
    if(randomNum === 5 || randomNum === 7 || randomNum === 9){
        Rejected("Promise Are Rejected")
    }
    else{
        Resolved("Promise Are Resolved")
    }
} )


promise1.then( (result) => {
    console.log(result);
}).catch( (error) =>{
    console.log("Opps! ", error);
} )


async function promiseHandle(){
    try {
        const data = await promise1
        console.log("Function:  ", data);
    } catch (error) {
        console.log("Function Opps! ", error);
    }
}

promiseHandle()

//Activity5 Grace full Error Handling in Fetch

fetch('example.com')
.then((result) => {
    console.log(result);
} )
.catch( (e) => {
    console.log("Network Request failed: " + e);
})


async function RequestFail(url) {
    try {
        const data = await fetch(url)
        console.log(data);
        
    } catch (error) {
        console.log("RequestFail: "+ error);
    }
}

RequestFail('exmaple.com')