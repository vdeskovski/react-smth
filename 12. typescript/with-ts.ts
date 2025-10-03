const add = (a: number, b: number) => {
    return a + b;
  };
  
console.log(add(5, 3));

let hobbies: string[];
hobbies = ["qwe", "wqe"]

type Person = {
  name: string,
  age: number
}

// let person: {
//   name: string,
//   age: number
// }
let person: Person
person = {
name: "joe",
age: 21
}

let people: Person[]; // array of objs

let course: string | number = "React course"
course = 123;

function sub(a: number, b: number): number{
  return a + b;
}

function print(value: any){
  console.log(value);
}

// GENERICS

function insertAtBeginning<T>(array: T[], value: T): T[]{
  const newArray = [value, ...array]
  return newArray;
}

const updated = insertAtBeginning([1,2,3], 3)
const updated2 = insertAtBeginning(["a","b"], "c")