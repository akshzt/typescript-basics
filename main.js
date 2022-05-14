"use strict";
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
console.log(randomValue.name);
randomValue();
randomValue.toUpperCase();
// unknown type can't call methods / access properties
var randomValue2 = 10;
randomValue2 = true;
randomValue2 = 'John';
// ts throws error for unknown
// console.log(randomValue2.name);
// randomValue2();
// randomValue2.toUpperCase();
