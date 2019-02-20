#!/usr/bin/env ts-node
let c: number = parseInt(process.argv[2]);
let d: number = parseInt(process.argv[3]);

if(Number.isNaN(c) || Number.isNaN(d)) {
    console.log('只接受整数');
    process.exit(1);
}

console.log(c - d);
process.exit(0);