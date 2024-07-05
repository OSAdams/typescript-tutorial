"use strict";
class Coder {
    constructor(
    // 'readonly' once the name is assigned, it cannot be changed
    // 'private'  can only be accessed in the class
    name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
;
const Dave = new Coder('Dave', 'Rock', 42, 'TypeScript');
console.log(Dave.getAge());
// console.log(Dave.age); // Property 'age' is private and only accessible within class 'Coder'.
// console.log(Dave.lang); // Property 'lang' is protected and only accessible within class 'Coder' and its subclasses.
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'LoFi', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'Guitar');
console.log(Page.play('strums'));
// 
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; // ++ on left will increment before assignment. ++ on right will increment after assignment
    }
}
Peeps.count = 0; // 'static' count applies to the class directly itself. we do not use 'this'
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Amy.id);
console.log(Steve.id);
console.log(Peeps.count);
// Getters and Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);