const isLogged = true;

let promise1 = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged === true) {
      resolve(Math.random());
    } else {
      reject(new Error("Not logged in"));
    }
  });
};

let promise2 = (result) => {
  return new Promise((resolve, reject) => {
    if (result > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Number is lower than 0.5"));
    }
  });
};

promise1(isLogged)
  .then(promise2)
  .then((result) => console.log(result))
  .catch((err) => console.error(err.message));
