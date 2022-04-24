window.onload = function() {

var loginEmail = document.getElementById('email');
var hiddenText = document.getElementsByClassName('hidden-text');
var loginPassword = document.getElementById('password');
var form =document.getElementsByTagName('form');

loginEmail.addEventListener('focus', emailInput);
function emailInput(){
    hiddenText[0].innerHTML ='';
    loginEmail.classList.remove('blur');
};

loginEmail.addEventListener('blur', emailValidation);
function emailValidation(){
    if (/[a-z0-9]+@[a-z]+.[a-z]{2,3}/.test(loginEmail.value)) {
        loginEmail.style.border = '1px solid #000';
        return loginEmail.value
    } else {
        hiddenText[0].innerHTML ='Invalid Email';
        hiddenText[0].style.display = 'block';
        loginEmail.style.border = '2px solid #F00';
        return 'Invalid email'
    }
};

loginPassword.addEventListener('focus', passwordInput);
function passwordInput(){
    hiddenText[1].innerHTML ='';
    loginPassword.classList.remove('blur');
};

loginPassword.addEventListener('blur', passwordValidation);
function passwordValidation(){
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var num = 0;
    var char = 0;
    for (i = 0; i < loginPassword.value.length; i++) {
        if (numbers.includes(loginPassword.value[i])) {
            num++;
        } else {
            char++;
        }
    }
    if (loginPassword.value.length >= 8 && num >= 1 && char >= 1) {
        loginPassword.style.border = '1px solid #000';
        return true;
    } else {
        hiddenText[1].innerHTML ='Invalid Email';
        hiddenText[1].style.display = 'block';
        loginPassword.style.border = '2px solid #F00';
        return false;
    }
}

form[1].onsubmit = function (e) {
    e.preventDefault();
    if (emailValidation() == loginEmail.value && passwordValidation() == true) {
        alert('Email: ' + loginEmail.value + ' ' + '-' + ' ' + 'Password: ' + loginPassword.value);
    } else if (emailValidation() !== loginEmail.value && passwordValidation() == true) {
        alert('Wrong Email');
    } else if (emailValidation() == loginEmail.value && passwordValidation() !== true) {
        alert('Wrong Password');
    }
}
};