//Tasks/Activities

//Activity1 Understanding the Closures
function outer(){
    let outerVar = "Outer function variable"
    function inner() {
        console.log(outerVar);
        outerVar = "Changed into the inner function"
        console.log('chage the outer var in inner function');
        console.log(outerVar);
    }
    return inner
}

const outercalled = outer()
outercalled()


function PrivateCounter(){
    let counter = 0
    function increment(){
        counter++;
        return counter
    }
    return {increment}
}

let counter = PrivateCounter()
counter.increment()
counter.increment()
console.log(counter.increment());

//Activity2 Practical Closures
function CreateUniqueID(){
    let source = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    const idTrack = []
    function GenrateID(){
        let id = ''
        for(let i=0; i<5; i++){
            let index = Math.floor(Math.random() * source.length )
            id = id + source[index]
        }
        if(!idTrack.includes(id)){
            idTrack.push(id)
            return id
        }
        else{
            return GenrateID()
        }
        
    }
    return {GenrateID}
}

const uniqueID = CreateUniqueID()
console.log(uniqueID.GenrateID());

function UserCapture(userName){
    function greeeting(){
        return `how are you ${userName}`
    }
    return greeeting
}

console.log(UserCapture("muhammad arslan")());

//Activity3 Closures in Loop
const arr = []

for(let i = 0; i<=5; i++){

    function LogIndex(i) {
        
        function genrateindex(){
            
            return i
        }
        return genrateindex
    }
    arr.push(LogIndex(i))
}
console.log(arr);
arr.forEach(element => {
    console.log(element()); 
});


//Activity4 Module Pattern

function ManageItems(){
    const itemsList = []
    function add(item){
        itemsList.push(item)
    };
    function remove(item){
        const index = itemsList.indexOf(item)
        if(index>-1) itemsList.splice(index, 1)
    };
    function listItem(){
        itemsList.forEach( (item) =>{
            console.log(item);
        })
    }
    return {
        add,
        remove,
        listItem
    }

}

const items = ManageItems()
items.add("item1")
items.add('item2')
items.listItem()
items.remove('item1')
items.listItem()

//Activity5 Memoization
function Memoization(){
    let arr=[]
    function compute(a,b){
        let c = a*b
        arr.push(c)
    }
    return{
        compute,
        arr
    }
}

let comp = Memoization()
comp.compute(3,4)
comp.compute(4,5)
console.log(comp.arr);


function MemoizeFactorial(){
    const cache = {}
    function Factorial(num){
        if(num === 0) return 1;

        if(cache[num]!==undefined){
          
            return cache[num] 
        }
        else{
            cache[num] = num * Factorial(num-1)
            return cache[num]
        }
    }
    return Factorial
}

const fastFactorial = MemoizeFactorial()
console.log(fastFactorial(12));






