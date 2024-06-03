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
logMsg(numberOrString("Hello here"));
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
const presentTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
logMsg(presentTransaction.Pizza);
const netBalance = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
logMsg(netBalance(presentTransaction));
const studentObj = {
    name: "Adenuga Abdulrahmon",
    GPA: 4.3,
    classes: [100, 200, 300, 400],
};
logMsg(studentObj.test);
for (const key in studentObj) {
    logMsg(`${key}: ${studentObj[key]}`);
}
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
logMsg(isObj(true));
const processUser = (user) => {
    //process user with logic here
    return user;
};
logMsg(processUser({ id: 1, name: "Nugar" }));
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653",
            },
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
        },
    },
];
logMsg(getUsersProperty(usersArray, "email"));
logMsg(getUsersProperty(usersArray, "username"));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject(78);
logMsg(store.state);
store.state = 12;
const myState = new StateObject([15]);
myState.state = ["Rahman", 21, true];
logMsg(myState.state);
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final year project",
    grade: 0,
};
logMsg(updateAssignment(assign1, { grade: 99 }));
const assignGrade = updateAssignment(assign1, { grade: 97 });
