"use strict";
exports.__esModule = true;
// Boolean
var isAuthenticated = false;
isAuthenticated = true;
// Number
var age = 102;
age = 12;
// String
var names = "Jane Doe";
// Array<elemType> or type[]
var count = [1, 4, 5, 3, 6];
var month = [{
        0: "Jan",
        1: "Feb",
        2: "March"
    }];
var fruits = [
    "apples",
    "mangoes",
    "oranges",
    "lemons",
    "tangerine"
];
// tuples
var role = [true, "admin"];
// object
var dictionary = {
    id: 762527,
    isLoggedIn: true,
    name: "Kate J"
};
// Enum
var Sport;
(function (Sport) {
    Sport[Sport["soccer"] = 0] = "soccer";
    Sport["hockey"] = "hockey";
    Sport["basketball"] = "basketball";
})(Sport || (Sport = {}));
var mySport = Sport.basketball;
var hisSport = Sport.hockey;
console.log(hisSport, mySport);
// Any allows any type
var mixedList = [20, "idea", { fruit: "orange" }, false];
var random = "Let's start with string";
random = 12;
random = true;
// Void means no type at all
var read = function () {
    console.log("Read Show your Work - Austin Kleon");
};
// void in variables can only be null or undefined so just use that
var a = null || undefined;
console.log("This is " + a);
read();
// undefined: Pretty sure you know what this is
var commonError = function (card) {
    console.log("Cannot read property card of " + card);
};
commonError(undefined);
// null
var profile = function (firstName, lastName) {
    console.log("I'm " + firstName + " " + lastName);
};
profile("Rainbow", null);
profile("Doctor", "Rainbow");
// never is a return type for a function with never returns/throws an exception
var exception = function (message) {
    throw new Error(message);
};
exception("Cannot redeclare block-scoped variable");
// Type Inference
var b = 12;
// b = "ahd";
