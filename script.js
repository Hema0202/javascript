//OOPS

// what is oop
// oop classes
// objects
// class property
// class methods
// constructor
// inheritence
// polymorphism
// encapsulation


class Person {
    name;
    age;

    constructor(name, age){
        this.name = name ?? "newPerson";
        this.age = age ?? "18";
    }

    about(){
        console.log("I am a Person");
    }
}

class Employee extends Person{
    constructor(name, age){
        super(name, age);
    }

    about(){
        console.log("I am an Employee");
    }
}

// const p1 = new Person("Hema", 16);

// console.log(p1);

const e1 = new Employee();

e1.about();