"use strict";
let myName;
let age;
let isLoading;
let what;
let album;
myName = "Nugar";
age = 21;
isLoading = true;
what = 33;
what = "what";
album = 2003;
album = "Here";
console.log(what);
console.log(album);
const sum = (a, b) => {
    return a + b;
};
let postId;
let isActive;
let re = /\w+/g;
//Arrays
let stringArr = ["one", "hey", "Dave"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVM", 2003, true];
stringArr[0] = "John";
stringArr.push("42");
guitars.unshift("Jim");
guitars = stringArr;
mixedData = guitars;
console.log(guitars);
//Tuples
let myTuple = ["Nugar", 21, true];
let mixed = ["john", 1, false];
mixed = myTuple;
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
const exampleObj = {
    prop1: "Nugar",
    prop2: true,
};
exampleObj.prop2 = false;
let first = {
    name: "Rahman Nugar",
    active: true,
    albums: [2003, "2003"],
};
let second = {
    name: "John Doe",
    albums: [2003, "2003"],
};
first = second;
const greetGuitarist = (guitarist) => {
    var _a;
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
};
console.log(greetGuitarist(first));
//enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(3, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(3, 3));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//default param value
const sumAll = (a = 1, b = 2, c = 3) => {
    return a + b + c;
};
logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
logMsg(sumAll(1, 2, 3));
logMsg(sumAll());
//Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 20, 30, 40));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infiniteCase = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 33)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    // if (typeof value === "number") return "number";
    if (isNumber(value))
        return "number";
    return createError("This should never happen");
};
logMsg(numberOrString("Hello"));
//convert to more or less specific
let a = "Hello";
let b = a; //less specific
let c = a; //more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
logMsg(addOrConcat(1, 2, "concat"));
//The DOM
const image = document.querySelector("img");
const myImage = document.getElementById("img");
const nextImage = document.getElementById("img");
//image.src;
//myImage.src;
//classes
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
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
    getLang() {
        return `Hello, I write ${this.lang}`;
    }
}
const thirtythree = new Coder("Rahman Nugar", "Afrobeats", 21);
logMsg(thirtythree.getAge());
logMsg(thirtythree.getLang());
class webDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const twothird = new webDev("HP 830 g5", "John Doe", "Hip-pop", 21);
logMsg(twothird.getLang());
class Rapper {
    constructor(name, genre) {
        this.name = name;
        this.genre = genre;
    }
    play(action) {
        return `${this.name} ${action} ${this.genre}`;
    }
}
const records33 = new Rapper("Rahman Nugar", "rap");
logMsg(records33.play("does"));
//
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const steve = new Peeps("Steve");
const chris = new Peeps("Chris");
logMsg(steve.id);
logMsg(chris.id);
logMsg(Peeps.count);
