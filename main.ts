export {};

let message = 'Hello World!';
console.log(message);

// let can be declared without initialization 
// let a; will work

// const must be initialized, can't be reassigned
// const a; error not intialized

// const a = 1;
// a = 2; statically typed shows error before compilation


// data types
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'john';

// name = 2; error static type checking

let sentence: string = `My name is ${name}
This is a string`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// arrays

let list1: number[] = [1, 2, 3, 4];
let list2: Array<number> = [1, 2, 3];
let list3: Array<string> = ['Hello', 'World!', null, undefined];
console.log(list3.length) // length is 4

// tuples, for fixed datatypes and length
let person1: [string, number] = ['John', 5]; //order has to match

// enums
enum Color {Red, Green, Blue};

let c: Color = Color.Green;
console.log(c); // outputs 1

// for starting at index other than 0 {Red = 5, Green, Blue}

// any type when unsure about data type of values

let randomValue: any = 10;
randomValue = true;
randomValue = 'John';

// ts doesn't throw any errors 
console.log(randomValue.name);
randomValue();
randomValue.toUpperCase();

// unknown type can't call methods / access properties

let randomValue2 : unknown = 10;
randomValue2 = true;
randomValue2 = 'John';

// ts throws error for unknown
// console.log(randomValue2.name);
// randomValue2();
// randomValue2.toUpperCase();