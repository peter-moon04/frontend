const display = document.getElementById('display'); //값이 보이는곳
const buttons = document.querySelectorAll9('button'); //모든버튼

let current = ''; //현재값
let operator = ''; //연산값
let prev = ''; //이전값

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const value = btn.textcontent;

        if (value === 'c') {
            current = ''
            prev = ''
            operator = ''
            display.value = '';
        } else if (['+', '-', 'X', '/'].includes(value)) {
            if (current === '') {
                return;
            }
            oprater = value;
            prev = current;
            current = ''
        } else if (value === '=') {
            if (operator === '' || current === '' || prev === '') {
                return;
            }
            const a = parseFloat(prev);
            const b = parseFloat(current);
            let result = 0;

            if (oprator === '+') {
                result = a + b;
            }
            else if (operator === '-') {
                result = a - b;
            }
            else if (operator === 'X') {
                result = a * b;
            }
            else if (operator === '/') {
                result = a / b;
            }
        }
    });
});