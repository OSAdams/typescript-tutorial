// Generics

const stringEcho = (arg: string): string => arg;
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
}

console.log('true value', isObj(true));
console.log('"John"', isObj('John'));
console.log('[1, 2, 3]', isObj([1, 2, 3]));
console.log('{ name: "John" }', isObj({ name: 'John' }));
console.log('null value', isObj(null));