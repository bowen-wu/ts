#!/usr/bin/env ts-node

{
    // 类型兼容性
    // 如果 x 要兼容 y，那么 y 至少要具有与 x 相同的属性
    // 优点: 可以少声明类型
    interface Human {
        name: string;
        age: number;
    }

    interface H extends Human {
        gender?: string;
        grade?: number;
    }

    let n = Math.random();

    let y = {name: 'tom', age: 18, gender: 'male'};
    // let x: Human = {name: 'tom', age: 18, gender: 'male'};   // error
    let x:Human = y;  // 不报错 -> 检查 x 中每个属性，看是否能在 y 中也找到对应属性。满足则赋值成功

    let z = {name: 'jack', age: 7, grade: 1};

    let a: H;
    if(n > 0.5) {
        a = y;
    } else {
        a = z;
    }
}
{
    // soundness -> 可靠性
    // sound -> 合理的， 正确的 -> 从逻辑以及语法上可以推断出代码有没有问题

    // sound -> 能够完全推断出有没有问题
    // unsound -> 明明推断出有问题，但是不报错

    // ts -> unsound

}