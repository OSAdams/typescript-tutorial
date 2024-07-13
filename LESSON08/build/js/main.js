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
