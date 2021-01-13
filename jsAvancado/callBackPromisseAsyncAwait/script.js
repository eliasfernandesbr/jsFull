//CALLBACK .>.PROMISE.>.ASYNC/AWAIT

const fs = require("fs");




console.log(1);

function callBack(err, contents) {
    console.log(err, contents);
    
}

fs.readFile('in1.txt', callBack);

console.log(2);

console.log(3);