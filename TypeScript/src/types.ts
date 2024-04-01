type Pet = {
    name: string;
    run(): void;
};
class Cat implements Pet {
    constructor(public name: string) {
        this.name = name;
    }

    run() {
        console.log('run');
    }
}

const cat = new Cat('Tom');
console.log(cat.name);
cat.run();
// types can't be implemented by classes.



type greetArg = string | number; 

function greetME(name: greetArg ) {
    console.log(`Hello, ${name}!`);
}


// function greetME(name: (string | number)) {
//     console.log(`Hello, ${name}!`);
// }

greetME(1);
greetME("Varad")



type employee = {
    name: string,
    age: number,
    email: string,
}

interface Managar {
    name: string,
    department: string,
}


type TeamLead = employee & Managar;

const TL: TeamLead = {
    name: "Varad",
    age: 24,
    email: "abcd@gmail.com",
    department: "IT"
}


type funcAr = (a: number, b: number) => number;

const plus: funcAr = (a, b) => a + b;

console.log(plus(1, 2));