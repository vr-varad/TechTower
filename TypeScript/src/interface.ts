interface User {
    name: string;
    age: number;
    email: string;
    phone: string;
    address?: string;
}

const user: User = {
    name: "Varad",
    age: 2,
    email: "varadgupta21@gmail.com",
    phone: "1234567890",
    address: "India"
}

const user2 : User = {
    name: "Varun",
    age: 20,
    email: "varun@gmail.com",
    phone: "1234567890",
}


function islegal(user: User): boolean {
    return user.age >= 18;
}

const legal = islegal(user);
const legal2 = islegal(user2)
console.log(legal);
console.log(legal2);


interface Person{
    name: string,
    age: number,
    greet(name: string): void
}


// interfaces can be implemented by classes but types can't be implemented by classes.
class Employee implements Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    greet(name: string){
        console.log(`Hi ${name}, my name is ${this.name}`);
    }
}


const emp = new Employee("Varad", 20);
emp.greet("Varun");


interface one {
    name: string;
    age: number;
}

interface two{
    email: string;
    phone: string;
}

interface three extends one, two{
    address: string;
}


const obj: three = {
    name: "Varad",
    age: 20,
    email: "abcd@gmail.com",
    phone: "1234567890",
    address: "India"
}
//Interfaces support extending other interfaces using the extends keyword.
// This allows you to create new interfaces that inherit properties and methods from existing ones.

//When two interfaces with the same name are declared, it can merge these two interfaces.




// What should We Use?
// Use interfaces when:

// A new object or an object method needs to be defined.
// You wish to benefit from declaration merging.
// Use types when:

// You need to define a primitive-type alias
// Defining tuple types
// Defining a union
// You must create functions and attempt to overload them in object types through composition.
// Requiring the use of mapped types
// In the end, you should carefully consider and assess the situation before deciding whether to use a type alias or an interface.

Types are better for working with functions, complex types, etc.