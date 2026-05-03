let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

// 1. Function to handle the calculation logic
const calculate = (value) => {
    if (value === '=') {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } else if (value === 'AC') {
        string = "";
        input.value = string;
    } else if (value === 'DEL') {
        string = string.toString().substring(0, string.length - 1);
        input.value = string;
    } else {
        string += value;
        input.value = string;
    }
};

// 2. Click Event Listener
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        calculate(e.target.innerHTML);
    });
});

// 3. Keyboard Event Listener
document.addEventListener('keydown', (e) => {
    const validKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.'];

    if (validKeys.includes(e.key)) {
        e.preventDefault();
        calculate(e.key);
    } 
    else if (e.key === 'Enter') {
        e.preventDefault();
        calculate('=');
    } 
    else if (e.key === 'Backspace') {
        e.preventDefault();
        calculate('DEL');
    } 
    else if (e.key === 'Escape') {
        e.preventDefault();
        calculate('AC');
    }
});