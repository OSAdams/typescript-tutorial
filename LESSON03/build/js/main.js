"use strict";
// LET VARIABLE VALUES ARE MUTABLE, CONST VALUES ARE NOT MUTABLE
// ARRAYS
let stringArr = ['eye', 'have', '10'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
// stringArr[0] = 42; -- type string array
stringArr[0] = 'John'; // valid, value type string
// stringArr.push(42) // number is not assignable to value type string
guitars[0] = 1984; // valid, guitar index values can be a string or number
guitars.unshift('Jim'); // valid, guitar index values can be a string or number
// guitars.unshift(true) // invalid, guitars only accepts strings or numbers value
// stringArr = guitars // invalid, guitars contains number values and stringArr only accepts string value types
guitars = stringArr; // valid, guitars can contain string or number values
let test = []; // type INFERRS any type value
let bands = []; // type EXPLICITS string index values in the array
bands.push('Van Halen'); // valid, van halen is a string type value
// More strict, TUPLE. Define specific types and a specific array length
let myTuple = ['Dave', 42, true]; // valid Tuple [string, number, boolean] value types
let mixed = ['John', 1, false];
// mixed = myTuple; // valid, index value types match and variable value type match
// myTuple = mixed; // invalid, mixed is not required to have 3 elements in the array. It's a possibility that mixed may not have 3 elements
// you cannot assign mixed to a tuple that only allows 3 index values.
// OBJECTS
let myObj; // valid, assigned value will be an object type. keep in mind - arrays are also an object;
myObj = []; // valid
console.log(typeof myObj); // an array is a typeof object in javascript
myObj = bands; // valid, bands is an array value, array is typeof object
myObj = {}; // valid
const exampleObj = {
    prop1: 'Owen',
    prop2: true
};
let evh = {
    name: 'Eddie', // must have name proptery with string value
    active: false, // must have active proptery with boolean value
    albums: [1984, 5150, 'OU812'] // must have alumbs array type with string or number type index values
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'III']
};
// evh = jp // valid because all values meet type requirements defined in our type annotation
let jimmeh = {
    name: 'Jimmeh',
    albums: [1942, 4219, 'hello world']
};
console.log('evh: ', evh);
console.log('jp: ', jp);
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
// Enums
// "Unlike most TypeScript features, Enums are not type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 24] = "U";
    Grade[Grade["D"] = 25] = "D";
    Grade[Grade["C"] = 26] = "C";
    Grade[Grade["B"] = 27] = "B";
    Grade[Grade["A"] = 28] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
