//Tasks/Activities
//Activity1 Understanding of Promises
const prom1 = new Promise((Resolve, reject) => {
    setTimeout(()=>{
         console.log("Promise are Resolved")
         Resolve()
    }, 2000)
})


prom1.then(
    () => {
        console.log("Resolved Successfully");
    }
)


const promiseReject = new Promise( (Resolve, reject) => {
    let flag = false
    if(flag){
        Resolve("Every Thing ok")
    }
    else{
        setTimeout( ()=> {
            reject("Error: OPps! Something Went Worng.")
        }, 2000)
    }
})
promiseReject
.then( (result)=> {
    console.log(result);
} )
.catch( (error) => {
    console.log(error);
} )

//Activity2 Promise Chaining
const promiseChain = new Promise( (Resolved, Rejected)=>{
    const flag = true
    if(flag){
        Resolved({
            username:'Muhammad Arslan',
            email: 'arslan....@gmail.com'
        })
    }
    else{
        Rejected("Opps! Error")
    }
})

promiseChain
.then((result)=>{
    console.log(result);
    return result.username
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})

//Activity3 Using Async/Await
async function waitToResolved(){
    const userObj = await promiseChain
    console.log(userObj);
    const userId = userObj.username
    console.log(1,userId);
}

waitToResolved()

async function waitToRejected(){
    try {
        const msg = await promiseReject 
    } catch (error) {
        console.log("wiatToRejected :",error);
    }
    
}

waitToRejected()

//Activity4 fetching data from api
fetch('https://catfact.ninja/fact')
.then( (result) => {
    console.log(typeof result  ,' then catch way :      '  , result);
})
.catch((error) => {
    console.log(error);
} )


async function dataFromApi(url){
    try {
        const data = await fetch(url)
        
        console.log(typeof data, "  async: await ",data);
    } catch (error) {
        console.log(error);
    }
}

dataFromApi('https://catfact.ninja/fact')

//Activity5 concurrent promises
Promise.all
([prom1, promiseChain, promiseReject])
.then((result)=>{
    console.log("result in promise.all", result);
})
.catch( (error) => {
    console.log("error in promise.all", error);
})


Promise.race([prom1, promiseChain, promiseReject]).then((result)=>{
    console.log("result in promise.race", result);
})
.catch( (error) => {
    console.log("error in promise.race", error);
})
