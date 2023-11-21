function printAsyncName(callback, name) {
  setTimeout(() => {
    console.log("Hello");
    callback();
  }, 1000);
  setTimeout(() => {
    console.log(name);
  }, 2000);
}

printAsyncName(() => console.log(), "Manuel");
