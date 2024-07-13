"use strict";
// Index Signatures
;
// interface TransactionObj {
//     readonly [index: string]: number // This is an index signature. keys will be a string, values will be a number
// };
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
// Dynamic access
// Without a loop
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
// With loop
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40; // Index signature in type 'TransactionObj' only permits reading
console.log(todaysTransactions['Dave']);
;
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student);
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // keyof creates a union type
}
;
Object.keys(student).map(key => {
    console.log(student[key]); // if you don't know the object type, keyof typeof student
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
