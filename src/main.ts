let myName: string;
let age: number;
let isLoading: boolean;
let what: any;
let album: string | number;

myName = "Nugar";
age = 21;
isLoading = true;
what = 33;
what = "what";
album = 2003;
album = "Here";

console.log(what);
console.log(album);

const sum = (a: number, b: string) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;

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
let myTuple: [string, number, boolean] = ["Nugar", 21, true];

let mixed = ["john", 1, false];

mixed = myTuple;

//Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);

const exampleObj = {
  prop1: "Nugar",
  prop2: true,
};

exampleObj.prop2 = false;

type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};
let first: Guitarist = {
  name: "Rahman Nugar",
  active: false,
  albums: [2003, "2003"],
};

let second: Guitarist = {
  name: "Rahman Nugar",
  active: false,
  albums: [2003, "2003"],
};

first = second;
