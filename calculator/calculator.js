{
    var Calculator = /** @class */ (function () {
        function Calculator() {
            this.n1 = '';
            this.n2 = '';
            this.operator = '';
            this.result = '';
            this.keys = [
                ["Clear", "/"],
                ["7", "8", "9", "*"],
                ["4", "5", "6", "-"],
                ["1", "2", "3", "+"],
                ["0", ".", "="]
            ];
            this.createContainer();
            this.createOutput();
            this.createButtons();
            this.bindEvent();
        }
        Calculator.prototype.createButton = function (text, container, className) {
            var button = document.createElement('button');
            button.textContent = text;
            if (className) {
                button.className = className;
            }
            container.appendChild(button);
        };
        Calculator.prototype.createContainer = function () {
            var container = document.createElement('div');
            container.classList.add('calculator');
            document.body.appendChild(container);
            this.container = container;
        };
        Calculator.prototype.createOutput = function () {
            var output = document.createElement('div');
            output.classList.add('output');
            this.output = output;
            var outputContent = document.createElement('span');
            outputContent.textContent = '0';
            output.appendChild(outputContent);
            this.container.appendChild(output);
            this.outputContent = outputContent;
        };
        Calculator.prototype.createButtons = function () {
            var _this = this;
            this.keys.forEach(function (itemArr) {
                var div = document.createElement('div');
                itemArr.forEach(function (item) {
                    _this.createButton(item, div, "button text-" + item);
                });
                div.classList.add('row');
                _this.container.appendChild(div);
            });
        };
        Calculator.prototype.bindEvent = function () {
            var _this = this;
            this.container.addEventListener('click', function (e) {
                if (e.target instanceof HTMLButtonElement) {
                    var text = e.target.textContent;
                    _this.updateNumbersOrOperator(text);
                }
            });
        };
        Calculator.prototype.updateNumbersOrOperator = function (text) {
            if ('0123456789.'.indexOf(text) >= 0) {
                this.updateNumbers(text);
            }
            else if ('+-*/'.indexOf(text) >= 0) {
                this.updateOperator(text);
            }
            else if ('='.indexOf(text) >= 0) {
                this.updateResult();
            }
            else if (text === 'Clear') {
                this.result = '0';
                this.init();
            }
        };
        Calculator.prototype.updateOperator = function (text) {
            if (this.n1 === '') {
                this.n1 = this.result;
            }
            this.operator = text;
        };
        Calculator.prototype.updateNumbers = function (text) {
            if (this.operator) {
                this.updateNumber('n2', text);
            }
            else {
                this.updateNumber('n1', text);
            }
        };
        Calculator.prototype.updateNumber = function (name, text) {
            if (this[name]) {
                this[name] += text;
            }
            else {
                this[name] = text;
            }
            this.outputContent.textContent = this[name].toString();
        };
        Calculator.prototype.updateResult = function () {
            var result = 0;
            var n1 = parseFloat(this.n1);
            var n2 = parseFloat(this.n2);
            if (n1 && n2) {
                if (this.operator === '+') {
                    result = n1 + n2;
                }
                else if (this.operator === '-') {
                    result = n1 - n2;
                }
                else if (this.operator === '*') {
                    result = n1 * n2;
                }
                else if (this.operator === '/' && this.n2 !== '0') {
                    result = n1 / n2;
                }
            }
            else if (n1 && !n2) {
                result = n1;
            }
            else if (!n1 && this.result) {
                result = parseFloat(this.result);
            }
            else if (!n1 && !this.result) {
                result = 0;
            }
            this.result = result.toPrecision(12).replace(/0+$/g, '').replace(/0+e/g, 'e');
            if (!this.result.split('.')[1]) {
                this.result = this.result.split('.')[0];
            }
            if (n1 && n2 === 0 && this.operator === '/' && this.n2 === '0') {
                this.result = '不是数字';
            }
            this.init();
        };
        Calculator.prototype.init = function () {
            this.operator = '';
            this.n1 = '';
            this.n2 = '';
            this.outputContent.textContent = this.result;
        };
        return Calculator;
    }());
    new Calculator();
}
