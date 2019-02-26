{
    class Calculator {
        public container: HTMLDivElement;
        private output: HTMLDivElement;
        private outputContent: HTMLSpanElement;
        public n1: string = '';
        public n2: string = '';
        public operator: string = '';
        public result: string = '';
        public keys: Array<Array<string>> = [
            ["Clear", "/"], 
            ["7", "8", "9", "*"], 
            ["4", "5", "6", "-"], 
            ["1", "2", "3", "+"], 
            ["0", ".", "="]
        ];
        constructor() {
            this.createContainer();
            this.createOutput();
            this.createButtons();
            this.bindEvent();
        }
        createButton(text: string, container: HTMLElement, className: string): void {
            let button: HTMLButtonElement = document.createElement('button');
            button.textContent = text;
            if(className) {
                button.className = className;
            }
            container.appendChild(button);
        }
        createContainer(): void {
            let container: HTMLDivElement = document.createElement('div');
            container.classList.add('calculator');
            document.body.appendChild(container);  
            this.container = container;
        }
        createOutput(): void {
            let output: HTMLDivElement = document.createElement('div');
            output.classList.add('output');
            this.output = output;

            let outputContent: HTMLSpanElement = document.createElement('span');
            outputContent.textContent = '0';
            output.appendChild(outputContent);
            this.container.appendChild(output);
            this.outputContent = outputContent;
        }
        createButtons(): void {
            this.keys.forEach((itemArr: Array<string>) => {
                let div = document.createElement('div');
                itemArr.forEach((item: string) => {
                    this.createButton(item, div, `button text-${item}`);
                });
                div.classList.add('row');
                this.container.appendChild(div);
            });
        }
        bindEvent(): void {
            this.container.addEventListener('click', (e) => {
                if(e.target instanceof HTMLButtonElement) {
                    let text = e.target.textContent;
                    this.updateNumbersOrOperator(text)
                }
            })
        }
        updateNumbersOrOperator(text: string): void {
            if('0123456789.'.indexOf(text) >= 0) {
                this.updateNumbers(text);
            } else if('+-*/'.indexOf(text) >= 0) {
                this.updateOperator(text);
            } else if('='.indexOf(text) >= 0) {      
                this.updateResult();    
            } else if(text === 'Clear') {
                this.result = '0';
                this.init();
            }
        }
        updateOperator(text: string): void {
            if(this.n1 === '') {
                this.n1 = this.result;
            }
            this.operator = text;
        }
        updateNumbers(text: string): void {
            if(this.operator) {
                this.updateNumber('n2', text);      
            } else {
                this.updateNumber('n1', text);            
            }
        }
        updateNumber(name: string, text: string): void {
            if(this[name]) {
                this[name] += text;
            } else {
                this[name] = text;
            }
            this.outputContent.textContent = this[name].toString();    
        }
        updateResult(): void {
            let result: number = 0;
            let n1: number = parseFloat(this.n1);
            let n2: number = parseFloat(this.n2);
            if(n1 && n2) {
                if(this.operator === '+') {
                    result = n1 + n2;
                } else if(this.operator === '-') {
                    result = n1 - n2;
                } else if(this.operator === '*') {
                    result = n1 * n2;
                } else if(this.operator === '/' && this.n2 !== '0') {
                    result = n1 / n2;
                }
            } else if(n1 && !n2) {
               result = n1; 
            } else if(!n1 && this.result) {
                result = parseFloat(this.result);
            } else if(!n1 && !this.result) {
                result = 0;
            }

            this.result = result.toPrecision(12).replace(/0+$/g, '').replace(/0+e/g, 'e');
            if(!this.result.split('.')[1]) {
                this.result = this.result.split('.')[0];
            }
            if(n1 && n2 === 0 && this.operator === '/' && this.n2 === '0') {
                this.result = '不是数字';
            }
            this.init();
        }
        init() {
            this.operator = '';
            this.n1 = '';
            this.n2 = '';
            this.outputContent.textContent = this.result;
        }
    }

    new Calculator();
}