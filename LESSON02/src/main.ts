let myName: string = 'Owen' // explicitly declared type is string {: string}
const myName2 = 'Adams' // inferred type is string

// myName = 42; 'number is not assignable to type 'string''

let meaningOfLife: number;
let isLoading: boolean;

meaningOfLife = 42; // type is number, value must be number
isLoading = true; // type is boolean, value must be boolean

let album: any; // Any type of value can be assigned to the variable. This is how you 'defeat' typescript

album = 'Van Halen';
album = true;
album = 1942;

const sum = (a: number, b: string) => a + b;

let album2: string | number;
album2 = 'Van Halen'
// album2 = true; 'invalude, must be a string or number;

let postId: string | number; // value must be a string or a number -- '123' 123
let isActive: number | boolean | string; // value must be a number or a boolean -- 123 true 'hello world'

let re = /\w+/g; // select all words globally; INFERRED RegEx type;
let re2: RegExp = /\w+/g; // EXPLICITLY assigned RegEx type value