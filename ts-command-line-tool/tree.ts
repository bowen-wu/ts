#!/usr/bin/env ts-node

function createPerfix(n: number): string {
    return '----'.repeat(n);
}

{
    class Person{
        public children: Person[] = []; // 初始化为 []
        constructor(public name: string) {
    
        }
        addChild(child: Person): void {
            this.children.push(child);
        }
        introduceFamily(n?: number): void {  // 如果不确定，使用 ?
            n = n || 1;
            console.log(`${createPerfix(n - 1)}${this.name}`);
            this.children.forEach(child => {
                child.introduceFamily(n + 1);
            })
        }
    }

    let grandPa = new Person('爷爷');
    let papa = new Person('爸爸');
    let uncle = new Person('叔叔');
    let me = new Person('我');
    let brother = new Person('兄弟');
    let cousin = new Person('堂兄');
    let sister = new Person('妹妹');
    grandPa.addChild(papa);
    grandPa.addChild(uncle);
    papa.addChild(me);
    papa.addChild(brother);
    papa.addChild(sister);
    uncle.addChild(cousin);

    grandPa.introduceFamily();
}


