"use strict";
// Interface are Objects or Classes
// Literal Types
let myName; // myName value can only be 'Dave'
let userName;
userName = 'Amy'; // Must be 'Dave', 'John', or 'Amy'
// DRI - DON'T REPEAT YOURSELF
// functions  para type, para type, return type
const add = (a, b) => a + b;
const logMsg = (message) => console.log(message); // Void return type is for functions that do not return anything
logMsg('Hello');
logMsg(add(2, 3));
// logMsg(add('a', 3)); // argument type string is not assignable to argument type number
let subtract = function (c, d) {
    return c - d;
};
logMsg(subtract(4, 2));
// interface mathFunction{
//     (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(1000000, 0.0034));
// Optional Parameters must be THE LAST IN THE LIST
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(2, 3, 2));
logMsg(sumAll(2, 3)); // 3rd parameter default value is 2, unless we assign a number value otherwise
logMsg(sumAll(2, 3, 5));
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4, 5));
// never type - not used often
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// infinite loops will have a never type value
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; // without break statement, never type value to be returned. with break statement void type value to be returned
    }
};
// custom type guard isNumber, isString
const isNumber = (value) => {
    return typeof value === 'number'
        ? true
        : false;
};
const isString = (value) => {
    return typeof value === 'string'
        ? true
        : false;
};
// use of the never type
const numberOrString = (value) => {
    if (isString(value))
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!'); // createError returns a never type which will handle the possible error
};
logMsg(`numberOrString string: ${numberOrString('string')}`);
logMsg(`numberOrString number: ${numberOrString(1998)}`);
