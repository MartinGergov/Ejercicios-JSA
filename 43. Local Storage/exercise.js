

const user = {
  id: 1,
  name: "John",
  age: 25,
};

let stringUser = JSON.stringify(user)

localStorage.setItem("userData", stringUser)

let getItem = localStorage.getItem("userData")


function printData() {
  const saved = localStorage.getItem("userData");
  return saved
}

const consoleData = printData();
console.log(JSON.parse(consoleData));
