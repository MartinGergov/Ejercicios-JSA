const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon"

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

// Cambia el valor en los dos porque hacen referencia al mismo objeto. Person2 no es un objeto nuevo, solamente apunta a Person1 así que cualquier cambio afecta a los dos.
