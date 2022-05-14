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
// console.log(randomValue.name);
// randomValue();
// randomValue.toUpperCase();

// unknown type can't call methods / access properties

let randomValue2 : unknown = 10;
randomValue2 = true;
randomValue2 = 'John';

// ts throws error for unknown
// console.log(randomValue2.name);
// randomValue2();
// randomValue2.toUpperCase();

// to call methods access properties use type assertion

(randomValue2 as string).toUpperCase(); // works 

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
           typeof obj === "object" &&
           "name" in obj
};

if ( hasName(randomValue2) ) {
    console.log(randomValue2.name)
} else {
    console.log("randomValue2 doesn't have name property")
}

let a;
a = 10;
a = true;

let b = 20;
// b = true; error as it was initialized with number
// type inference when variable is initalized at declaration

// union of types, intellisense for methods and properties
// specific to the type of current data type, union > any
let multiType: number | boolean = 2;
multiType = true;

//functions
// '?' for optional parameters
// optional parameters to be at last
function add(num1: number, num2: number = 10, num3?: number): number {
    if( num3 )
        return num1 + num2 + num3;
    else
        return num1 + num2;
}
add(1,2,3);
add(1, 2);
add(5);

function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
};

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne',
};

fullName(p);

// interface

interface Person {
    firstName: string;
    lastName?: string;
};

function fullName2(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
};
let p2 = {
    firstName: 'John'
}
fullName2(p);
fullName2(p2); // works as lastName is optional in Person interface

// classes

class Employee {
    employeeName: string;
    private employeeSSN: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
};

let emp1 = new Employee('John');
console.log(emp1.employeeName);
emp1.greet();
// console.log(emp1.employeeSSN); private can't access

class Manager extends Employee {
    
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
};

let m1 = new Manager('Bruce');
m1.delegateWork();
console.log(m1.employeeName);
m1.greet();