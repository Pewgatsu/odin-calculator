const buttons = document.querySelectorAll('button.operator, button.operand, button.equals')
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');



let num1 = null;
let num2 = null;
let result = 0;
let holder = [];
let operator = null;



buttons.forEach((button) => {

    button.addEventListener('click', () => {

        if (button.classList.contains('operand')){

            holder.push(button.value);

            if( num2 === null && operator === null ) {
                num1 = holder.join('');
                output.innerText = holder.join('');
               
            }else if ( num1 !== null && operator !== null) {
                num2 = holder.join('');
                
                output.innerText = holder.join('');
            }else {
                
                output.innerText = result;
            }

            
        }
        
        if (button.classList.contains('operator')){

            /* If the first number is empty, 
            assign the current value of the holder.
               Then empty the holder
            */

            if (operator === null ){
                holder = [];
                operator = button.value;
            }else {
                result = evaluate(num1, num2, operator);
                output.innerText = result;

                num1 = result;
                num2 = null;
                holder = [];
                operator = button.value;

            }
            
            
        }

        if (button.classList.contains('equals')) {
            console.log(num1);
            console.log(num2);

            if(num2 === null ) {

            }else {
                result = evaluate(num1,num2,operator);
            
                output.innerText = result;
                num1 = result; 
                holder = [];
                num2 = null;
                operator = null;
            }

        }        

        

    })

})

clearButton.addEventListener('click', () => {
    clear();
})


function clear () {
    num1 = null;
    num2 = null;
    holder = [];
    operator = null;
    result = 0;
    output.innerText = 0;
}


function add (x,y) {

    return x + y;

}

function subtract (x,y) {

    return x - y;

}

function multiply (x,y) {

    return x * y ;

}

function divide (x,y) {

    if (y === 0) {
        return "Error! You cannot divide by zero"
    }

    return x / y ;

}

function modulo (x,y) {

    return x % y;

}

function evaluate (num1, num2 , operator) {
    num1 = Number(num1);
    num2 = Number(num2);

    
    switch(operator){
        case "+":
            return add(num1,num2);
           
        case "-":
            return subtract(num1,num2);
           
        case "*":
            return multiply(num1,num2);
           
        case "/":
            return divide(num1,num2);
           
        case "%":
            return modulo(num1,num2);
           
        default:
            
            break;
            
    }
    
}