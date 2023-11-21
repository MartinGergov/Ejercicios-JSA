let resultado = new Promise((resolve, reject) => {
    const number = 15;
    if(number > 10) {
        resolve(number);
    } else {
        reject(new Error("El número es menor a 10"));
    }
})

resultado
    .then((val) => console.log(val))
    .catch((err) => console.error(err))