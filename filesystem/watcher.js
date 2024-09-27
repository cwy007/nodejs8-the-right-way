'use strict';

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'target.txt');

fs.watch(filePath, () => console.log('File changed'));

console.log('Now watching target.txt for changes...');
