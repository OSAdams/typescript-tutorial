"use strict";
// Type Assertions
// Sometimes you will have information about the type of value that TypeScript can't know about
// We're telling the typescript compiler that we have more detail about the type
// convert to more or less specifics
let a = 'hello';
let b = a; // assignment to a less specific type
let c = a; // assignment to a more specific type
// cannot use this type of syntax in React <type>
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat'); // assertion is that addOrConcat will return a string in this instance
// be careful. TS does not see a problem here - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat'); // this will return a string - we know this from the function definition code block
// unkown is like any except you cannot use unknown anywhere
10; // double casting or forced casting. two assertions
// The DOM
const img = document.querySelector('img'); // We know that we have an HTML Image Element, as clause removes error
const myImg = document.getElementById('#img'); // We know this element is an Image Element
const nextImg = document.getElementById('#img'); // This syntax will not work in TS React
img.src;
myImg.src;
