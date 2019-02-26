#!/usr/bin/env ts-node



// Number String Boolean null undefined Object  Symbol
{
    let a: null = null;
    let b: undefined = undefined;
    let c: boolean = true;
    let d: string = 'hi';
    let e: number = 1;
    let obj: object = {name: 'aaa'};
}

// Any
{
    let n: any = 123;
    console.log(1, n);
    n = '1';
    console.log(2, n);
}


// 枚举 -> 用字符串表示某几种状态，可以对有限的状态进行枚举
{
    enum Gender {
        Man = 'man',
        Woman = 'woman'
    }
    
    let gender: Gender = Gender.Man;
    console.log('gender 1', gender);
    gender = Gender.Woman;
    console.log('gender 2', gender);
}

// void -> 空类型
{
    function print(x: any): void {
        console.log(x);
    }
    
    print(1);
}

// undefined | null -> 默认情况下 null 和 undefined 是所有类型的子类型，可以把 null | undefined 赋值给任意类型的变量
{
    let a: number = undefined;
    let b: string = undefined;
}

// 断言( 类型转换 ) -> 主观保证 -> 两种方式
{
    let n: any = '123';
    console.log(n.split(''));  // 存在隐患，运行时才报错

    console.log((<string>n).split(''));  // 断言 n 是 string，是主观判断，不知道具体类型

    console.log((n as string).split(''));

    let a: number = 123;
    let a1: string = a.toString();
    console.log('remark type value')
    console.log('a1 -> string,', typeof a1, a1);

    let b: string = '123';
    let b1: number = parseInt(b);
    console.log('b1 -> number,', typeof b1, b1);

    let c: number = 1;
    let c1: boolean = Boolean(c);
    console.log('c1 -> boolean,', typeof c1, c1);

    let obj: object = {name: 'xxx', age: 18};
    let str1: string = JSON.stringify(obj);
    console.log('str1 -> ', typeof str1, str1);

    let str: string = `{"name": "xxx", "age": 18}`;
    let obj1: object = JSON.parse(str);
    console.log('obj -> ', typeof obj1, obj1);
}

// 变量声明
{
    // var -> 永远不用， 用 let | const
}

// 解构
{
    function sayHi({name, age}: any) {
        console.log(`hi, ${name} ${age}`)
    }
    sayHi({name: 'bowen', age: 18});
}