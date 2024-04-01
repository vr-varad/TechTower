const helloWorld = (name : string) =>{
    console.log(`Hello ${name}`);
}

helloWorld("varad");

function sum (a:number,b:number):number{
    return a+b;
}
// function sum (a:number,b:number){
//     return a+b;
// } wiil not give error due to type inference.

const value : number = sum(1,2);
const value2 = sum(1,34)
console.log(value)
console.log(value2)


// function greaterThan18(age: number):boolean{
//     return age>18;
// }

function greaterThan18(age: number){
    return age>18;
}

const ableToDrive: boolean = greaterThan18(19)
const notAbleToDrive = greaterThan18(17)
console.log(ableToDrive)
console.log(notAbleToDrive)




function callback(fn : (name: string) => void){
    setTimeout(()=>{fn("varad")},1000)
}

callback(function (name: string){
    console.log(`Hi ${name}`)
}
)


const func : (name:string)=>void = (name: string) => {
    console.log(`Hi ${name}`)
    return 1;
}