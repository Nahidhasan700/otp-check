function getPin(){
      let pin = Math.round(Math.random() * 10000);
      let stringPin = pin + '';
      if(stringPin.length == 4){
            return pin;
      }
      else{
            return getPin;
      }
}
function generatePin(){
      let pin = getPin();
      document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
      let number = event.target.innerText;
      let calcInput = document.getElementById('typed-numbers');
      if (isNaN(number)) {
            if (number == 'C') {
                calcInput.value = '';
            }
        }
        else {
            const previousNumber = calcInput.value;
            const newNumber = previousNumber + number;
            calcInput.value = newNumber;
        }
});
function verifyPin() {
      const pin = document.getElementById('display-pin').value;
      const typedNumbers = document.getElementById('typed-numbers').value;
      const successMessage = document.getElementById('notify-success');
      const failError = document.getElementById('notify-fail');
      if (pin == typedNumbers) {
          successMessage.style.display = 'block';
          failError.style.display = 'none';
      }
      else {
          successMessage.style.display = 'none';
          failError.style.display = 'block';
      }
  }