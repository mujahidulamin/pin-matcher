function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        // console.log('pin not found 3 digit', pin);
        return getPin();
    }
}
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const randomPin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = randomPin;
});

document.getElementById('calculator').addEventListener('click', function (event) {
    const typedNumbers = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumbers.value;
    const numberClikedButton = event.target.innerText;
    if (isNaN(numberClikedButton)) {
        if (numberClikedButton === 'C') {
            typedNumbers.value = '';
        } else if (numberClikedButton === '<') {
            const deleteLastNumber = previousTypedNumber.split('');
            deleteLastNumber.pop();
            const remainingNumber = deleteLastNumber.join('')
            typedNumbers.value = remainingNumber;
        }

    } else {
        const newTypedNumber = previousTypedNumber + numberClikedButton
        typedNumbers.value = newTypedNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumbersField = document.getElementById('typed-numbers');
    const typedNumbers = typedNumbersField.value;

    const pinSuccess = document.getElementById('pin-success'); 
    const pinIncorret = document.getElementById('pin-incorrent'); 
    if(typedNumbers === currentPin){ 
        pinSuccess.style.display = 'block';
        pinIncorret.style.display = 'none';
    }else{
        pinIncorret.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
})