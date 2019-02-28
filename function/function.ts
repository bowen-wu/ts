#!/usr/bin/env ts-node

// function -> 特殊的对象 -> 可以被调用 -> 可以被调用的对象是函数
// 方法 -> 如果一个函数是另外一个对象上的属性，那么这个函数又叫做方法

{
    // 声明函数
    function hi(name: string, age?: number): void {
        // this + arguments
        console.log(`hi, ${name}`);
    }
    let hi2 = function (name: string, age: number = 18): string {
        console.log(`hi, ${name}`);
        return 'hi';
    }

    let hi3 = (name: string, age?: number): string | number => {
        console.log(`hi, ${name}`);
        if(age > 18) {
            return 'hi';
        } else {
            return 404;
        }
    }

    function add(a: number, b: number): number {
        // 形式参数 -> 形参 -> 一种变量声明
        // let a = arguments[0];
        // let b = arguments[1];
        return a + b;
    }

    let c = add(100, 200);   // 实际参数 -> 实参
    let d = add.call(undefined, 100, 200);
    // 调用时：
    // 1. 构造 arguments -> argumrnts = {0: 100, 1: 200, length: 2}
}