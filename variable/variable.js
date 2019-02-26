#!/usr/bin/env ts-node
{
    var a = null;
    var b = undefined;
    var c = true;
    var d = 'hi';
    var e = 1;
    var obj = { name: 'aaa' };
}
// Any
{
    var n = 123;
    console.log(1, n);
    n = '1';
    console.log(2, n);
}
// 枚举 -> 用字符串表示某几种状态，可以对有限的状态进行枚举
{
    var Gender = void 0;
    (function (Gender) {
        Gender["Man"] = "man";
        Gender["Woman"] = "woman";
    })(Gender || (Gender = {}));
    var gender = Gender.Man;
    console.log('gender 1', gender);
    gender = Gender.Woman;
    console.log('gender 2', gender);
}
// void -> 空类型
{
    function print(x) {
        console.log(x);
    }
    print(1);
}
// undefined | null -> 默认情况下 null 和 undefined 是所有类型的子类型，可以把 null | undefined 赋值给任意类型的变量
{
    var a = undefined;
    var b = undefined;
}
// 断言( 类型转换 ) -> 主观保证 -> 两种方式
{
    var n = '123';
    console.log(n.split('')); // 存在隐患，运行时才报错
    console.log(n.split('')); // 断言 n 是 string，是主观判断，不知道具体类型
    console.log(n.split(''));
    var a = 123;
    var a1 = a.toString();
    console.log('remark type value');
    console.log('a1 -> string,', typeof a1, a1);
    var b = '123';
    var b1 = parseInt(b);
    console.log('b1 -> number,', typeof b1, b1);
    var c = 1;
    var c1 = Boolean(c);
    console.log('c1 -> boolean,', typeof c1, c1);
    var obj = { name: 'xxx', age: 18 };
    var str1 = JSON.stringify(obj);
    console.log('str1 -> ', typeof str1, str1);
    var str = "{\"name\": \"xxx\", \"age\": 18}";
    var obj1 = JSON.parse(str);
    console.log('obj -> ', typeof obj1, obj1);
}
// 变量声明
{
    // var -> 永远不用， 用 let | const
}
// 解构
{
    function sayHi(_a) {
        var name = _a.name, age = _a.age;
        console.log("hi, " + name + " " + age);
    }
    sayHi({ name: 'bowen', age: 18 });
}
