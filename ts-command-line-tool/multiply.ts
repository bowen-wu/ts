#!/usr/bin/env ts-node
let e = parseInt(process.argv[2]);
let f = parseInt(process.argv[3]);

if(Number.isNaN(e) || Number.isNaN(f)) {
    console.log('只接受整数');
    process.exit(1);
}

console.log(e * f);
process.exit(0);