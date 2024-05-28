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

// type Guitarist = {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// };

interface Guitarist {
  name: string;
  active?: boolean;
  albums: (string | number)[];
}

let first: Guitarist = {
  name: "Rahman Nugar",
  active: true,
  albums: [2003, "2003"],
};

let second: Guitarist = {
  name: "John Doe",
  albums: [2003, "2003"],
};

first = second;

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name?.toUpperCase()}!`;
};

console.log(greetGuitarist(first));

//enums
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
console.log(Grade.U);

//Type Aliases
type stringorNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Developer = {
  name: string;
  active?: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringorNumber;

//functions
const add = (a: number, b: number) => {
  return a + b;
};

const logMsg = (message: any) => {
  console.log(message);
};
logMsg("Hello!");
logMsg(add(3, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(3, 3));

//optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

//default param value
const sumAll = (a: number = 1, b: number = 2, c: number = 3): number => {
  return a + b + c;
};

logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
logMsg(sumAll(1, 2, 3));
logMsg(sumAll());

//Rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(10, 20, 30, 40));

const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

const infiniteCase = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 33) break;
  }
};

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  // if (typeof value === "number") return "number";
  if (isNumber(value)) return "number";
  return createError("This should never happen");
};

logMsg(numberOrString("Hello"));