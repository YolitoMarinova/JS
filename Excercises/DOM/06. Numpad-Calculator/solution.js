function solve() {
    let expression = document.getElementById('expressionOutput');
    let output = document.getElementById('resultOutput');

    // clear button
    document.querySelector('div.top > button.clear').addEventListener('click', clear => {
        expression.textContent = '';
        output.textContent = '';
    });

    let keysDiv = document.querySelector('div.keys');
    keysDiv.addEventListener('click', calculate);

    function calculate(event) {
        const currInput = event.target.textContent;

        if (currInput !== '=') {
            if (currInput === '+' || currInput === '-' || currInput === 'x' || currInput === '/') {
                expression.textContent += ' ' + currInput + ' ';
            } else {
                expression.textContent += currInput;
            }
            return;
        }

        expression.textContent = expression.textContent.trim();

        const [num1, operator, num2] = expression.textContent.split(' ');

        if (operator && num1 && !num2) {
            output.textContent = NaN;
            return;
        }

        if (operator && num1 && num2) {
            switch (operator) {
                case '+': output.textContent = Number(num1) + Number(num2); break;
                case '-': output.textContent = Number(num1) - Number(num2); break;
                case 'x': output.textContent = Number(num1) * Number(num2); break;
                case '/': output.textContent = Number(num1) / Number(num2); break;
            }
        }

    }
}