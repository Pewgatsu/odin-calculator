const buttons = document.querySelectorAll('button.operator, button.operand')
const output = document.getElementById('output');



let result = 0;


let holder = [];



buttons.forEach((button) => {

    button.addEventListener('click', () => {
        
        if (button.classList.contains('operator')){
            console.log('add')

            
            

        }
        if (button.classList.contains('operand')){
            holder.push(button.value)
            result = holder.join('')
            console.log(result)
        }
    })

})



function add (x,y) {

}

function subtract (x,y) {

}

function multiply (x,y) {

}

function divide (x,y) {

}

function modulo (x,y) {

}

function evaluate (num1, num2, operator) {

    switch(operator){
        case "+":
            add(num1,num2);
            break;
        case "-":
            subtract(num1,num2);
            break;
        case "*":
            multiply(num1,num2);
            break;
        case "/":
            divide(num1,num2);
            break;
        case "%":
            modulo(num1,num2);
            break;
        default:
            //empty
            break;
    }
    
}