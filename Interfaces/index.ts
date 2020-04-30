import { Profile } from './profileInterface';

const profiles: Array<Profile> = [{
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
}]

console.log(profiles);


// function type interface
interface Dimensions {
  (width: number, height: number): number
}

interface Log {
  (): void
}

const area: Dimensions = (width, height) => {
  console.log(width * height);
  return width * height;
}


const statement: Log = () => {
  console.log("This is just a log");
}

statement();
area(20, 10);
