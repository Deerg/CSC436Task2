import { add } from "./math";

const eventHandler = () => {

    const addButton = document.getElementById('add');
    const multButton = document.getElementById('mult');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const result = document.getElementById('result');
    const updateDomWithAddedNumbers = () => {
        result.innerHTML = 
            // parseInt(number1.value, 10)+parseInt(number2.value,10);
            add(number1.value,number2.value);
    }
    const updateDomWithMultNumbers = () => {
        result.innerHTML = 
            // parseInt(number1.value, 10)+parseInt(number2.value,10);
            number1.value * number2.value;
    }
    addButton.addEventListener('click', updateDomWithAddedNumbers);
    multButton.addEventListener('click', updateDomWithMultNumbers);
}

export  {eventHandler};