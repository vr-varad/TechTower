// function printArray(arr: number[]){
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i])
//     }
// }

type NumberArr = number[];

function printArray(arr: NumberArr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}


const arr = [1,2,3,4,5];
printArray(arr);

interface people {
    name: string,
    age: number
}

const user1: people = {
    name: "Varad",
    age: 2
}

const user3: people = {
    name: "apple",
    age: 45
}

const user4: people = {
    name: "banana",
    age: 34
}

const users : people[] = [user1, user3, user4];

function legalorNOt(people: people[]){
    for(let i=0; i<people.length; i++){
        if(people[i].age >= 18){
            console.log(`${people[i].name} is legal`)
        }   
    }
}

legalorNOt(users);