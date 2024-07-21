//Task/Activities
//Activity1 Template Literal
let person= "Faheem"
let age = 24
const personAge = `Person Name ${person} and Age of person is ${age}`
console.log(personAge);

const personAgeMultiLine = `Person Name ${person}
Person Age ${age}`
console.log(personAgeMultiLine);

//Activity2 Destructuring

const arr = [1, 2, 3, 4, 5, 6]
let [num1, num2, ...rest] = arr
console.log(num1, "     ", num2);

const book = {
    title: "Computer Science Made Easy",
    author: "muhammad arslan",
    year: 2023
}

let {title:bookName, author:writerName} = book
console.log(bookName);
console.log(writerName);

//Activity3 Spread and Rest Operator
const arrUsingSpread = [7, 8, 9, ...arr]
console.log(arrUsingSpread);

function sumAnyNum(...anyNumArguments){
    let sum = 0
    console.log(anyNumArguments);
    anyNumArguments.forEach(element => {
        sum += element
    });
    return sum
}
console.log(sumAnyNum(1,2,4,5,6,7));


//Activity4 Default Parameters
function productTwoNum(num1, num2=1){
    return num1*num2
}
console.log(productTwoNum(5));
console.log(productTwoNum(5, 4));

//Activity5 Enhanced Object Literal
const name = "Book Library"
const books = [
    {
        title: "CS",
        author: 'mit',
        year: 2022
    },
    {
        title: "ASM",
        author: 'nouman',
        year: 2020
    },
    {
        title: "OS",
        author: 'Aman',
        year: 2010
    }
]


const enhancedObjectLiteral = {
    name,
    books,

    ['bookCounts']: books.length ,

    addNewBook(obj){
        this.books.push(obj)
        this.bookCounts = books.length
    },
    getBookTitle(){
        return this.books.map( book => book.title )
    },
   
    
}

console.log(enhancedObjectLiteral);

prop1 = "firstName"
prop2 = "lastName"

const computedPropObj = {
    [prop1]: 'Muhammad',
    [prop2]: 'Arlsan',

    greeting(){
        return `Asslam-o-Alikum, How are You ${this[prop1]} ${this[prop2]}`
    }
}
console.log(computedPropObj);

let greetingMessage = computedPropObj.greeting()
console.log(greetingMessage);