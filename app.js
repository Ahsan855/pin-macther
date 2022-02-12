function getPin(){
    const pin = Math.round(Math.random()*10000)
    const pinString = pin + ''; // lenght ber korar jonno
    if(pinString.length == 4){
        return pin;
    }
    else{
        // got 3 digit and calling again getPin()
        return getPin();
    }
}


function genaratePin(){
    const pin = getPin();
    document.getElementById('disply-pin').value = pin ;
}

// calculator body 
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText
    const calCInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calCInput.value = '';
        }
    }
    else{
        const previousNumber = calCInput.value;
        const newNumber = previousNumber +number;
        calCInput.value = newNumber;
    }
})

// verifyPin 
function verifyPin(){
    const pin = document.getElementById('disply-pin').value;
    const typeNumbers = document.getElementById('typed-numbers').value;
    const succesedfull = document.getElementById('notify-succesed');
    const failedError = document.getElementById('notify-failed');
    if(pin == typeNumbers){
       
        succesedfull.style.display='block'
        failedError.style.display='none'
    }
    else{
     
      failedError.style.display='block'
      succesedfull.style.display='none'
    }
}