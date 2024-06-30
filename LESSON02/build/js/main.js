"use strict";
let myName = 'Owen'; // explicitly declared type is string {: string}
const myName2 = 'Adams'; // inferred type is string
// myName = 42; 'number is not assignable to type 'string''
let meaningOfLife;
let isLoading;
meaningOfLife = 42; // type is number, value must be number
isLoading = true; // type is boolean, value must be boolean
let album; // Any type of value can be assigned to the variable. This is how you 'defeat' typescript
album = 'Van Halen';
album = true;
album = 1942;
