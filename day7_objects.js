//Task/Activities
//Activity1 Object Creation and Access
const books = {
    title:"Computer Science book",
    author:"MIT",
    year: 2000
}

console.log(books);


console.log(books["author"]);
console.log(books["year"]);

console.log(books.title);

//Activity2 Object Methods
const book = {
    title:"Computer Science book",
    author:"MIT",
    year: 2000,

    titleAuthor:  function ()  {
        return  `the book title is ${this.title} and author is ${this.author}`
    },

    updateYear: function (year){
        return this.year = year
    }
}

console.log(book.titleAuthor());
console.log(book.updateYear(2001));
console.log(book);

//Activity3 Nested objects
const library = {
    Name: "CS book Library",
    books :[
        {
            title:'DSA',
            author:'Himat jain',
            year:2002
        },
        {
            title:'System Design',
            author: 'coreman',
            year: 1999
        },
        {
            title:"python",
            author: "guido",
            year: 1989
        }
    ]
}

console.log(library);

console.log(library.Name);


library.books.forEach(element => {
    console.log(element.title);
});

//Activity4 The this Keywords
const bookModified = {
    title:"Computer Science book",
    author:"MIT",
    year: 2000,

    titleYear:  function ()  {
        return  `the book title is ${this.title} and year of Publising is ${this.year}`
    },

}

console.log(bookModified.titleYear());

//Activity5 Object Iteration
for (const key in bookModified) {
    if (bookModified.hasOwnProperty.call(bookModified, key)) {
        const element = bookModified[key];
        if(typeof element !== "function")
        console.log( element);
        
    }
}


console.log(Object.values(book));
console.log(Object.keys(book));