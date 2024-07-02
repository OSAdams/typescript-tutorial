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
let bands: string[] = []; // type EXPLICITS string index values in the array
bands.push('Van Halen'); // valid, van halen is a string type value

// More strict, TUPLE. Define specific types and a specific array length
let myTuple: [string, number, boolean] = ['Dave', 42, true]; // valid Tuple [string, number, boolean] value types

let mixed = ['John', 1, false]; 

// mixed = myTuple; // valid, index value types match and variable value type match
// myTuple = mixed; // invalid, mixed is not required to have 3 elements in the array. It's a possibility that mixed may not have 3 elements
// you cannot assign mixed to a tuple that only allows 3 index values.

// OBJECTS

let myObj: object; // valid, assigned value will be an object type. keep in mind - arrays are also an object;
myObj = []; // valid
console.log(typeof myObj); // an array is a typeof object in javascript
myObj = bands; // valid, bands is an array value, array is typeof object
myObj = {}; // valid

const exampleObj = {
    prop1: 'Owen',
    prop2: true
};

// exampleObj.prop2 = 42; // invalid, prop2 must be boolean value
// What if we want to annotate the types? Define the object value types in advanced

type Guitarist = { // interface Guitarist { prop: value } || type Guitarist = { prop: value }
    name: string,
    active?: boolean, // now a union type, boolean or undefined // active?:
    albums: (string | number)[]; // UNION TYPE (string | number) index values in the array
};

let evh: Guitarist = {
    name: 'Eddie', // must have name proptery with string value
    active: false, // must have active proptery with boolean value
    albums: [1984, 5150, 'OU812'] // must have alumbs array type with string or number type index values
};

let jp: Guitarist = {
    name: 'Jimmy', 
    active: true,
    albums: ['I', 'II', 'III']
};

// evh = jp // valid because all values meet type requirements defined in our type annotation

let jimmeh: Guitarist = { // valid, active property can have boolean or undefined assignment
    name: 'Jimmeh',
    albums: [1942, 4219, 'hello world']
};

console.log('evh: ', evh);
console.log('jp: ', jp);

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello!';
};

console.log(greetGuitarist(jp));

// Enums
// "Unlike most TypeScript features, Enums are not type-level addition to JavaScript but something added to the language and runtime."

enum Grade { // Enumerated, started at position = 0 -- Unless assigned to a different number otherwise
    U = 24,
    D,
    C,
    B,
    A
}

console.log(Grade.U);