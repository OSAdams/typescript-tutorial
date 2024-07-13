"use strict";
// Generics
const stringEcho = (arg) => arg;
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log('true value', isObj(true));
console.log('"John"', isObj('John'));
console.log('[1, 2, 3]', isObj([1, 2, 3]));
console.log('{ name: "John" }', isObj({ name: 'John' }));
console.log('null value', isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg }; // !! is a double bang operator, returns a boolean
};
console.log('boolean false', isTrue(false));
console.log('number 0', isTrue(0));
console.log('boolean true', isTrue(true));
console.log('number 1', isTrue(1));
console.log('string "Dave"', isTrue('Dave'));
console.log('string ""', isTrue(''));
console.log('null value', isTrue(null));
console.log('undefined value', isTrue(undefined));
console.log('object {}', isTrue({}));
console.log('object { name: "Dave" }', isTrue({ name: 'Dave' }));
console.log('array []', isTrue([]));
console.log('array [1, 2, 3]', isTrue([1, 2, 3]));
console.log('NaN value', isTrue(NaN));
console.log('number -0', isTrue(-0));
