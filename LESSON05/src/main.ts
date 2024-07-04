// Type Assertions
// Sometimes you will have information about the type of value that TypeScript can't know about
// We're telling the typescript compiler that we have more detail about the type

type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specifics
let a: One = 'hello';
let b = a as Two; // assignment to a less specific type
let c = a as Three; // assignment to a more specific type

// cannot use this type of syntax in React <type>
let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b;
    return '' + a + b;
}

let myVal: string = addOrConcat(2, 2, 'concat') as string; // assertion is that addOrConcat will return a string in this instance

// be careful. TS does not see a problem here - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number; // this will return a string - we know this from the function definition code block

// unkown is like any except you cannot use unknown anywhere
(10 as unknown) as string; // double casting or forced casting. two assertions

// The DOM
const img = document.querySelector('img') as HTMLImageElement; // We know that we have an HTML Image Element, as clause removes error
const myImg = document.getElementById('#img') as HTMLImageElement; // We know this element is an Image Element
const nextImg = <HTMLImageElement>document.getElementById('#img'); // This syntax will not work in TS React

img.src
myImg.src