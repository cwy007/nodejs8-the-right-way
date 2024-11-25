'use strict';
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if (!filename) {
    throw Error('A file to watch must be specified!');
}

fs.watch(filename, () => {
    const ls = spawn('ls', ['-l', '-h', filename]);
    // ls.stdout.pipe(process.stdout);
    let output = '';

    ls.stdout.on('data', (chunk) => {
        // console.log('chunk', chunk);
        // chunk is a Buffer
        output += chunk;
    });

    ls.on('close', () => {
        const parts = output.split(/\s+/);
        console.log([parts[0], parts[4], parts[8]]);
    })
});
console.log(`Now watching ${filename} for changes...`);

// $ node watcher-spawn.js target.txt
//
// $ touch target.txt
//
