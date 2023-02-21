num1 = Math.floor(Math.random() * 10) + 1;
num2 = Math.floor(Math.random() * 10) + 1;

document.getElementById('calc').innerHTML= num1 + ' + ' + num2;


function userAns(){
    userAnswer = document.getElementById('user').value;
    result = num1 + num2;
    isNaN(userAnswer);
    if (isNaN(userAnswer)){
        document.getElementById('userCalc').style.color = 'red';
        document.getElementById('userCalc').innerHTML = 'Input Value is not a number !!';
        
    } else {
        document.getElementById('userCalc').innerHTML = 'User Answer: '+ userAnswer;
        document.getElementById('pcCalc').innerHTML = 'Right Answer: '+ result;
    }
}

function compare(){
    if (isNaN(userAnswer)){
        document.getElementById('final').innerHTML = '' ;

    } else if (userAnswer == result){
        document.getElementById('final').style.color = 'green';
        document.getElementById('final').innerHTML = 'You did Great !!' ;
    } else{
        document.getElementById('final').style.color = 'red';
        document.getElementById('final').innerHTML = 'Sorry You got it wrong !';
    }
}

function newCard(){
    document.getElementById('user').value = '';
    document.getElementById('userCalc').innerHTML = '';
    document.getElementById('pcCalc').innerHTML = '';
    document.getElementById('final').innerHTML = '';
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('calc').innerHTML= num1 + ' + ' + num2;
}

