document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');

    function clearDisplay() {
        display.value = '';
    }

    function appendToDisplay(value) {
        display.value += value;
    }

    function calculate() {
        const expression = display.value;
        let result;
        try {
            
            result = eval(expression);
           
            display.value = result;
        } catch (error) {
            
            display.value = 'Error';
        }
    }

    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;
          
            if (value === '+') {
                appendToDisplay('+');
            } else if (value === '-') {
                appendToDisplay('-');
            } 
                else if (value === '*') {
                    appendToDisplay('*');
                } else if (value === '%') {
                    appendToDisplay('%');
                } else if (value === '/') {
                    appendToDisplay('/');
                } 
                else if (value === '=') {
                    calculate();
                } 
                else if (value === 'AC') {
                    clearDisplay();}
             else {
                appendToDisplay(value);
            }
        });
    });
});