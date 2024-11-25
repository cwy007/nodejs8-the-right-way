'use strict'
const fs = require('fs');

fs.readFile('target.txt', (err, data) => {
    if (err) {
        throw err;
    }

    console.log('data--->1')
    // staging content in a Buffer
    // data type is Buffer
    console.log(data)
    console.log('data--->1')

    console.log(data.toString());
});

// $ node read-simple.js
