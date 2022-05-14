"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello World!';
console.log(message);
// let can be declared without initialization 
// let a; will work
// const must be initialized, can't be reassigned
// const a; error not intialized
// const a = 1;
// a = 2; statically typed shows error before compilation
// data types
var isBeginner = true;
var total = 0;
var name = 'john';
// name = 2; error static type checking
var sentence = "My name is ".concat(name, "\nThis is a string");
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// arrays
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3];
var list3 = ['Hello', 'World!', null, undefined];
console.log(list3.length); // length is 4
// tuples, for fixed datatypes and length
var person1 = ['John', 5]; //order has to match
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c); // outputs 1
// for starting at index other than 0 {Red = 5, Green, Blue}
// any type when unsure about data type of values
var randomValue = 10;
randomValue = true;
randomValue = 'John';
// ts doesn't throw any errors 
// console.log(randomValue.name);
// randomValue();
// randomValue.toUpperCase();
// unknown type can't call methods / access properties
var randomValue2 = 10;
randomValue2 = true;
randomValue2 = 'John';
// ts throws error for unknown
// console.log(randomValue2.name);
// randomValue2();
// randomValue2.toUpperCase();
// to call methods access properties use type assertion
randomValue2.toUpperCase(); // works 
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
;
if (hasName(randomValue2)) {
    console.log(randomValue2.name);
}
else {
    console.log("randomValue2 doesn't have name property");
}
var a;
a = 10;
a = true;
var b = 20;
// b = true; error as it was initialized with number
// type inference when variable is initalized at declaration
// union of types, intellisense for methods and properties
// specific to the type of current data type, union > any
var multiType = 2;
multiType = true;
//functions
// '?' for optional parameters
// optional parameters to be at last
function add(num1, num2, num3) {
    if (num2 === void 0) { num2 = 10; }
    if (num3)
        return num1 + num2 + num3;
    else
        return num1 + num2;
}
add(1, 2, 3);
add(1, 2);
add(5);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
;
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
;
function fullName2(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
;
var p2 = {
    firstName: 'John'
};
fullName2(p);
fullName2(p2); // works as lastName is optional in Person interface
// classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
;
var emp1 = new Employee('John');
console.log(emp1.employeeName);
emp1.greet();
// console.log(emp1.employeeSSN); private can't access
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
;
var m1 = new Manager('Bruce');
m1.delegateWork();
console.log(m1.employeeName);
m1.greet();
