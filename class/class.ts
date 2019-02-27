#!/usr/bin/env ts-node

// 类 -> 是用来描述一个对象必须有什么属性

// 类 VS 接口 -> 接口是低配版的类，类是高配版的接口

// 类可以让系统更加可预测

{
    // 声明 类
    class Human {
        // static -> 声明 Human 的属性 -> 静态属性
        static ownProperty = 'I am Human own property';

        // 非函数属性
        name: string;
        age: number;

        // constructor -> 实例化时可以传递参数
        constructor(name: string, age: number) {
            console.log('call me', `参数为${name} + ${age}`);
            this.name = name;
            this.age = age;
        }

        // 函数属性
        move(): void {
            console.log('I am moving');
        }
        say(): string {
            this.move();
            return 'hi';
        }
    }
    let tom = new Human('tom', 18);
    tom.move();
    
    console.log('tom -> ', tom);
    console.log('Human.ownProperty -> ', Human.ownProperty);
}

{
    // 类继承 -> 在继承另一个类时 contructor 中必须调用 super
    class Animal {
        kind: string;
        birth: string;
        constructor(kind: string) {
            this.kind = kind;
            if(this.kind === '哺乳动物') {
                this.birth = '胎生';
            } else {
                this.birth = '卵生';
            }
        }
        move(): void {
            console.log('I am moving');
        }
    }
    class Human extends Animal {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            super('哺乳动物');
            console.log('call me', `参数为${name} + ${age}`);
            this.name = name;
            this.age = age;
        }

        say(): string {
            this.move();
            return 'hi';
        }
    }

    let tom = new Human('tom', 18);

    console.log('tom -> ', tom);
}

{
    // 修饰符 -> private + public + protected -> 修饰对象属性作用域
    // public -> 默认都是 public -> 在 class 外也可以访问
    // protected -> 在自己的 class 和后代 class 中可以使用，实例不可以使用
    class Human {
        name: string;
        age: number;

        // private 只有在 Human 中可以使用，其他地方访问不到 -> 类似局部变量
        private secret: string;
        constructor(name: string, age: number) {
            console.log('call me', `参数为${name} + ${age}`);
            this.name = name;
            this.age = age;
            this.secret = 'this is my secret';
        }
    }
    let tom = new Human('tom', 18);
    
    // console.log(Human.secret);  // error
    console.log('tom -> ', tom);
}
{
    // get | set -> 设计模式
    class Human {
        name: string;
        private _age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this._age = age;
        }
        get age() {
            return this._age;
        }
        set age(value: number) {
            if(value < 0) {
                this._age = 0
            } else {
                this._age = value;
            }
        }
    }
    let tom = new Human('tom', 18);
    // tom._age = 19;  // 不能进行设置
    tom.age = 20;
    
    console.log('tom.age -> ', tom.age);
}
{
    // 抽象类 -> abstract -> 不能创建抽象类的实例
    // 理解1: '爸爸类' -> 专门当别的类的爸爸的类 -> 不负责具体实现，只负责有什么，不写出来，子代类需要具体实现
    // 理解2: '没有写完的类' -> 只描述有什么方法，并没有完全实现这些方法。
    // ==> 由于这个类灭有写完，所以不能创建出对象 -> error

    abstract class Animal {
        abstract makeSound(): void;  // 抽象类必须有抽象方法，不用写具体实现
        move(): void {
            console.log('I am moving');
        }
    }
    class Human extends Animal {
        constructor() {
            super();
        }

        // 不实现就会 error
        makeSound() {
            console.log('human sound');
        }
    }
} 