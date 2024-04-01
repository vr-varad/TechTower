// type opt = number | string;

// function output(arr: (number | string)[]): opt {
//     return arr[0];
// }


// const out = output([1, 2, 3]);
// console.log(out); // 1
// const out2 = output(['a', 'b', 'c']);
// console.log(out2); // a


function output<T>(arr: T) {
    return arr;
}

const out = output<number>(1);
console.log(out); // 1
const out2 = output<string>('a');
console.log(out2); // a