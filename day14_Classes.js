//Tasks/Activities

//Activity1 Define Classes

class Person{
     name = 'arslan';
     age = 24;
     greeting(){
        return `Asslam-o-alikum How are you ${this.name}`
     }
}

const arr = new Person()
console.log(arr.greeting());

class PersonClass {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    static greetingP(){
        console.log("Welcome to the Application");
    }
    greeting(){
        return `How Are You ${this.name}`
    }
    updateAge(newAge){
        this.age = newAge
        console.log(this.age);
    }

}

const p1 = new PersonClass("person", 22)
console.log(p1.greeting());

console.log(p1.age);
p1.updateAge(25)
console.log(p1.age);

//Activity2 Class Inheritance
class Students extends PersonClass{
    static enrollStudents = 0
    constructor(studentName, age, studentID){
        super(studentName, age)
        this.constructor.enrollStudents++
        this.studentID = studentID
    }
    greeting(){
        return `Asslam-o-alikum Mr.${this.name} WelCome to the classRoom. your student is ${this.studentID}.`
    }
    
    getStudentID(){
        return `StudentID: ${this.studentID}`
    }
}

const s1 = new Students("Arslan", 24, 222392)
console.log(s1.greeting());

console.log(s1.getStudentID());
console.log(s1.age);
s1.updateAge(25)

//Activity Static Methods and Properties
PersonClass.greetingP()
console.log(Students.enrollStudents);

//Activity4 get and set

class PersonWithGetterSetter{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    get getFullName(){
        return `${this.firstName} ${this.lastName}`
    };
    set setName (nameObj){
        this.firstName = nameObj.firstName
        this.lastName = nameObj.lastName
    }
}

const p = new PersonWithGetterSetter("Muhammad", "Arslan", 24)
console.log(p.getFullName);
p.setName = {
    firstName:'Muhammad',
    lastName: "Shafqat"
}
console.log(p.getFullName);

//Activity5 Private field
class Account{
    #balance;
    constructor(balance){
        this.#balance = balance
    }
    Deposite(balance){
        this.#balance += balance
        console.log(`Your current balance is: ${this.#balance}`);
    }
    WithDraw(balance){
        if(balance<0 || balance>this.#balance) console.log("Your balance is inSuffecient"); 
        else{
            this.#balance -= balance
            console.log('Your Current Balance is: ' + this.#balance);
        
        }

    }
    balanceInquary(){
        console.log(`YOur balance : ${this.#balance}`);
    }
}

const acc = new Account(5000)
console.log(acc.WithDraw(60));
acc.Deposite(1000)
acc.balanceInquary()