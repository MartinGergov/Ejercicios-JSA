const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);

console.log(keys);
console.log(values);
console.log(entries);

// Print values of person using Object.keys