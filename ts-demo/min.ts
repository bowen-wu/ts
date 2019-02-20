// 重载
function add (a: string, b: string): string;
function add (a: number, b: number): number;
function add (a: any, b: any): any{
    return a + b;
}

// 返回值 类型
function min(a: number, b: number): number {
    if(a > b) {
        return b;
    } else {
        return a;
    }
}

// 枚举
enum Gender {
    Male,
    Female
}

interface Person{
    gender: Gender
}

// 数组 -> number[] | Array<number>
function marry(a: Person, b: Person): [Person, Person] {
    if(a.gender !== b.gender) {
        return [a, b];
    } else {
        throw new Error('性别相同！');
    }
}

let man = {gender: Gender.Male};
let woman = {gender: Gender.Female};

console.log(marry(man, woman));

console.log('min', min(1, 2));

console.log('add -> number', add(1, 2));

console.log('add -> string', add('1', '2'));