function printName () {
    const helloName = "Hello Manuel";
    function inner () {
        setTimeout(() => {
            console.log(helloName);
        }, 1000);
    };
    return inner;
};

const hello = printName ();

hello ();