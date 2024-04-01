function add(a: number, b: number): number {
    return a + b;
}
function multiply(a: number, b: number): number {
    return a * b;
}
function divide(a: number, b: number): number {
    return a / b;
}
function subtract(a: number, b: number): number {
    return a - b;
}

const addition = add(1, 2);
const multiplication = multiply(1, 2);
const division = divide(1, 2);
const subtraction = subtract(1, 2);
console.log(addition, multiplication, division, subtraction);