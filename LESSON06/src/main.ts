class Coder {
    publicLang!: string;
    constructor(
        // 'readonly' once the name is assigned, it cannot be changed
        // 'private'  can only be accessed in the class
        public readonly name: string, 
        public music: string,
        private age: number,
        protected lang: string = 'TypeScript'
    ) {
        this.name = name;
        this.music= music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `Hello, I'm ${this.age}`;
    }
};

const Dave = new Coder('Dave', 'Rock', 42, 'TypeScript');
console.log(Dave.getAge());
// console.log(Dave.age); // Property 'age' is private and only accessible within class 'Coder'.
// console.log(Dave.lang); // Property 'lang' is protected and only accessible within class 'Coder' and its subclasses.

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age);
        this.computer = computer;
    }

    public getLang() {
        return `I write ${this.lang}`;
    }
}

const Sara = new WebDev('Mac', 'Sara', 'LoFi', 25);
console.log(Sara.getLang());

// Implementing and interface to a class

interface Musician {
    name: string, 
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string
    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Page = new Guitarist('Jimmy', 'Guitar');
console.log(Page.play('strums'));

// 

class Peeps {
    static count: number = 0 // 'static' count applies to the class directly itself. we do not use 'this'
    static getCount(): number {
        return Peeps.count;
    }
    public id: number;
    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count; // ++ on left will increment before assignment. ++ on right will increment after assignment
    }
}

const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');

console.log(Amy.id);
console.log(Steve.id);
console.log(Peeps.count);

// Getters and Setters

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] { // readonly because there isn't a setter
        return this.dataState;
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return
        } else throw new Error('Param is not an array of strings');
    }
 }

 const MyBands = new Bands();
 MyBands.data = ['Neil Young', 'Led Zep'];
 MyBands.data = [...MyBands.data, 'ZZ Top'];
 console.log(MyBands.data);