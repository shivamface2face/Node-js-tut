
let a = 9;
let b = 0;

// setTimeout(() => {
//     b = 12;
// }, 3000);

let watingdata = new Promise((resolvve, rejext) => {
    setTimeout(() => {
        // b = 12;
        resolvve(20);
    }, 3000);
});

watingdata.then((data) => {
    console.log(a + data);
});

// console.log(a + b);