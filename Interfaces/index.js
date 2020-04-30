"use strict";
exports.__esModule = true;
var profiles = [{
        profile: {
            firstName: "Puppy",
            lastName: "Dog",
            age: 5
        },
        records: {
            bloodGroup: "B+",
            condition: {
                name: "Flu",
                diagnosisDate: new Date("2020-03-01")
            }
        }
    }];
console.log(profiles);
var area = function (width, height) {
    console.log(width * height);
    return width * height;
};
var statement = function () {
    console.log("This is just a log");
};
statement();
area(20, 10);
