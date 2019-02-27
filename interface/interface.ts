#!/usr/bin/env ts-node

// 抄袭 C#

// 接口就是用代码描述一个对象必须有什么属性（包括方法），如果没有就报错，并且不能添加没有的属性
{
    interface Shape {
        head: string;
        body: string;
    }

    interface Human {
        readonly name: string;
        age: number;
        shape: Shape;
        likedGame?: Array<string>,  // ? 表示可选属性
        say(word: string): void;
    }
    
    let tom: Human = {
        name: 'tom', 
        age: 18, 
        shape: {head: 'head', body: 'body'}, 
        say(word: string) {
            console.log(`${this.name}: ${word}`);
        },
    };
    // tom.gender = 'male';  // error

    // tom.name = 'jack'; // error
    
    tom.say('I am tom');
    // console.log('tom', tom);

    // 接口描述一个函数
    interface Add {
        (a: number, b: number): number;
    }

    let add: Add = function(a: number, b: number): number {
        return a + b;
    }

    // 继承 -> interface 继承 interface -> extends
    {
        // 可以继承多个 interface 
        // 也可以 Animal 继承 LivingBoby，Human 继承 Animal
        // 如果继承的两个 interface 中有相同的属性，并且类型不同，则不能继承
        // typescript 重点在于类型，只要类型不同就不行
        interface LivingBoby {
            water: Boolean,
        }

        interface Animal {
            move(): void; 
        }

        interface Human extends Animal, LivingBoby {
            name: string;
            age: number
        }

        let tom: Human = {
            water: true,
            name: 'tom',
            age: 18,
            move() {
                console.log('I am moving');
            }
        }
    }
}


// 函数 VS 方法 -> 当一个函数是一个对象的属性时，把这个函数称为该对象的方法