interface UserData {
  name: string;
  age: number;
  dateOfBirth: Date
}

const users: Array<UserData> = [];


interface AddUser {
  (name: string, age: number, dateOfBirth: Date): boolean;
}

const saveUserDetails: AddUser = (name, age, dateOfBirth) => {
  users.push({name, age, dateOfBirth});
  return true;
}

console.log(saveUserDetails("John", 34, new Date("1996-09-10")));
saveUserDetails("Jane", 22, new Date("1973-05-04"));


const getAllUsers = (): Array<UserData> => {
  console.log(users);
  return users;
}

getAllUsers();


