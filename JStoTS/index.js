var users = [];
var saveUserDetails = function (name, age, dateOfBirth) {
    users.push({ name: name, age: age, dateOfBirth: dateOfBirth });
    return true;
};
console.log(saveUserDetails("John", 34, new Date("1996-09-10")));
saveUserDetails("Jane", 22, new Date("1973-05-04"));
var getAllUsers = function () {
    console.log(users);
    return users;
};
getAllUsers();
