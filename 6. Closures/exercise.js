function printName () {
    const helloName = "Hello Manuel";
    function inner () {
        console.log(helloName);
    };
    return inner;
};

const hello = printName ();
hello ();
