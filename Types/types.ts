// Boolean
const isAuthenticated: boolean = false;

// Number
let age: number = 102;
age = 12;

// String
const names: string = "Jane Doe";

// Array<elemType> or type[]
const count: Array<number> = [1,4,5,3,6];

const month: Array<object> = [{
  0: "Jan",
  1: "Feb",
  2: "March"
}];

const fruits: string[] = [
  "apples",
  "mangoes",
  "oranges",
  "lemons",
  "tangerine"
];

// tuples
const role: [boolean, string] = [true, "admin"];

// object
const dictionary: User = {
  id: 762527,
  isLoggedIn: true,
  name: "Kate J",
}

interface User {
  id: number;
  email?: string;
  isLoggedIn: boolean;
  name: string | undefined;
}

// Enum
enum Sport {
  soccer, // explain values
  hockey = "hockey",
  basketball = "basketball"
}

const mySport: Sport = Sport.basketball;
const hisSport: Sport = Sport.hockey;

console.log(hisSport, mySport);

// Any allows any type
const mixedList: any = [ 20, "idea", {fruit: "orange"}, false ];
let random: any = "Let's start with string";
random = 12;
random = true;

// Void means no type at all
const read = (): void => {
  console.log(`Read Show your Work - Austin Kleon`);
}

// void in variables can only be null or undefined so just use that
const a: void = null || undefined;
console.log(`This is ${a}`);

read();

// undefined: Pretty sure you know what this is
const commonError = (card: undefined) => {
  console.log(`Cannot read property card of ${card}`)
}

commonError(undefined);

// null
const profile = (firstName: string, lastName?: string | null) => {
  console.log(`I'm ${firstName} ${lastName}`);
}

profile("Rainbow");
profile("Doctor", "Rainbow");


// never is a return type for a function with never returns
// One with unreachable code
// This would help with Exhaustive checks: Not all code paths return a value

const exhaust = (key?: number | string) => {
  if(typeof(key) === "number") {
    return true;
  } else if(typeof(key) === "string") {
    return false
  }
  // Some code paths do not return a value
  exception("Not all code paths return a value")
}

const exception = (message: string): never => {
  throw new Error(message);
}

exhaust();

// Type Inference
let b = 12;
// b = "ahd";
