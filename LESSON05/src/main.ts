// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
};

type UserId = stringOrNumber;

// Interface are Objects or Classes

// Literal Types
let myName: 'Dave'; // myName value can only be 'Dave'

let userName: 'Dave' | 'John' | 'Amy';

userName = 'Amy'; // Must be 'Dave', 'John', or 'Amy'

// DRI - DON'T REPEAT YOURSELF

// functions  para type, para type, return type
const add = (a: number, b: number): number => a + b;

const logMsg = (message: any): void => console.log(message); // Void return type is for functions that do not return anything

logMsg('Hello');
logMsg(add(2, 3));
// logMsg(add('a', 3)); // argument type string is not assignable to argument type number

let subtract = function (c: number, d: number): number {
    return c - d;
}

logMsg(subtract(4, 2));

type mathFunction = (a: number, b:number) => number
// interface mathFunction{
//     (a: number, b: number): number;
// }

let multiply: mathFunction = function(c, d) {
    return c * d;
}

logMsg(multiply(1000000, 0.0034));

// Optional Parameters must be THE LAST IN THE LIST
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}

const sumAll = (a: number, b: number, c: number = 2): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}

logMsg(addAll(2, 3, 2));
logMsg(sumAll(2, 3)); // 3rd parameter default value is 2, unless we assign a number value otherwise
logMsg(sumAll(2, 3, 5))

// Rest Parameters
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr);
}

logMsg(total(1, 2, 3, 4, 5))

// never type - not used often

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

// infinite loops will have a never type value
const infinite = () => {
    let i: number = 1;
    while(true) {
        i++
        if (i > 100) break; // without break statement, never type value to be returned. with break statement void type value to be returned
    }
}

// custom type guard isNumber, isString
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true
        : false;
}

const isString = (value: any): boolean => {
    return typeof value === 'string'
        ? true
        : false;
}

// use of the never type
const numberOrString = (value: number | string): string => { // return can be string | undefined
    if (isString(value)) return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!'); // createError returns a never type which will handle the possible error
}

logMsg(`numberOrString string: ${numberOrString('string')}`);
logMsg(`numberOrString number: ${numberOrString(1998)}`);