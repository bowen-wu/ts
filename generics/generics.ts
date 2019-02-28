#!/usr/bin/env ts-node

{
    // 泛型 -> 用一个东西表示多种(广泛)类型
    function returnIt<T>(sth: T): T {
        return sth;
    }

    // 泛型数组
    function returnArray<T>(array: T[]): T[] {
        // === function returnArray<T>(array: Array<T>): Array<T> {
        return array;
    }

    interface Human {
        name: string;
        age: number;
    }

    // <> 不需要声明
    let s: string = returnIt<string>('hi');
    let n: number = returnIt<number>(1);
    let b: boolean = returnIt<boolean>(false);
    let h: Human = returnIt<Human>({name: 'tom', age: 19});

    let arr: Array<number> = returnArray([1, 2, 3]);
    let arrHuman: Array<Human> = returnArray<Human>([{name: 'tom', age: 18}, {name: 'jack', age: 19}]);

    // 泛型的使用
    let ss: Array<string> = ['a', 'b'];

    // 另一种定义
    let returnIt2: <T>(arg: T) => T = returnIt;
    console.log('returnIt2', returnIt2);

    // 泛型与接口一起使用
    interface add {
        (a: number, b: number): number;
    }

    let numberAdd: add = (a: number, b: number): number => {
        return a + b;
    }

    interface anyAdd<T> { // 将 T 写在接口后面
        (a: T, b: T): T;
    }

    let stringAdd: anyAdd<string> = (a: string, b: string): string => {
        return a + b;
    } 

    let numberAdd2: anyAdd<number> = (a: number, b: number): number => {
        return a + b;
    } 

    // 泛型约束
    interface hasLength {
        length: number;
    }

    function returnIt3<T extends hasLength>(sth: T): T {
        // 让 T 必须有 length 属性 -> interface
        console.log(sth.length);
        return sth;
    }
}
