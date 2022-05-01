window.onload = function() {

var nameSignup = document.getElementById('name');
var surnameSignup = document.getElementById('surname');
var dniSignup = document.getElementById('dni');
var dateSignup = document.getElementById('date');
var phoneSignup = document.getElementById('phone');
var addressSignup = document.getElementById('address');
var locationSignup = document.getElementById('location');
var postalSignup = document.getElementById('postal code');
var emailSignup = document.getElementById('email');
var passwordSignup = document.getElementById('password');
var repeatSignup = document.getElementById('repeat password');
var hiddenP = document.getElementsByClassName('hidden-p');
var form = document.getElementsByTagName('form');
var burguer = document.getElementById('burguer');
var nav = document.getElementsByClassName('nav-bar')

nameSignup.addEventListener('focus', nameInput);
function nameInput(){
    hiddenP[0].innerHTML ='';
    nameSignup.classList.remove('blur');
    nameSignup.style.border = '1px solid #000';
};
nameSignup.addEventListener('blur', nameValidation);
function nameValidation() {
    var letters = 
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
    ,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var char= 0;
    if (!nameSignup.value){
        hiddenP[0].innerHTML ='Required';
        hiddenP[0].style.display = 'block';
        nameSignup.style.border = '2px solid #F00';
    }
    for (i = 0; i < nameSignup.value.length; i++) {
        if (letters.includes(nameSignup.value[i])) {
            char ++;
        }else {
            hiddenP[0].innerHTML ='Invalid Name';
            hiddenP[0].style.display = 'block';
            nameSignup.style.border = '2px solid #F00';
            return false;
    }
    if (nameSignup.value.length >= 3) {
        nameSignup.style.border = '1px solid #000';
        return true;
    }else {
        hiddenP[0].innerHTML ='Invalid Name';
        hiddenP[0].style.display = 'block';
        nameSignup.style.border = '2px solid #F00';
        return false;
    }
}
}

surnameSignup.addEventListener('focus', surnameInput);
function surnameInput(){
    hiddenP[1].innerHTML ='';
    surnameSignup.classList.remove('blur');
    surnameSignup.style.border = '1px solid #000';
}
surnameSignup.addEventListener('blur', surnameValidation);
function surnameValidation() {
    var letters = 
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
    ,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var char = 0;
    if (!surnameSignup.value){
        hiddenP[1].innerHTML ='Required';
        hiddenP[1].style.display = 'block';
        surnameSignup.style.border = '2px solid #F00';
    }
    for (i = 0; i < surnameSignup.value.length; i++) {
        if (letters.includes(surnameSignup.value[i])) {
            char++;
        } else {
            hiddenP[1].innerHTML ='Invalid Surname';
            hiddenP[1].style.display = 'block';
            surnameSignup.style.border = '2px solid #F00';
            return false;
    }
    if (surnameSignup.value.length >= 3) {
        surnameSignup.style.border = '1px solid #000';
        return true;
    }else {
        hiddenP[1].innerHTML ='Invalid Surname';
        hiddenP[1].style.display = 'block';
        surnameSignup.style.border = '2px solid #F00';
        return false;
    }
}
}

dniSignup.addEventListener('focus', dniInput);
function dniInput(){
    hiddenP[2].innerHTML ='';
    dniSignup.classList.remove('blur');
    dniSignup.style.border = '1px solid #000';
}
dniSignup.addEventListener('blur', dniValidation);
function dniValidation() {
    var numbs = 
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var numb = 0;
    if (!dniSignup.value){
        hiddenP[2].innerHTML ='Required';
        hiddenP[2].style.display = 'block';
        dniSignup.style.border = '2px solid #F00';
    }
    for (i = 0; i < dniSignup.value.length; i++) {
        if (numbs.includes(dniSignup.value[i])) {
            numb++;
        } else {
            hiddenP[2].innerHTML ='Invalid dni';
            hiddenP[2].style.display = 'block';
            dniSignup.style.border = '2px solid #F00';
            return false;
    }
    if (dniSignup.value.length >= 7) {
        dniSignup.style.border = '1px solid #000';
        return true;
    }else {
        hiddenP[2].innerHTML ='Invalid dni';
        hiddenP[2].style.display = 'block';
        dniSignup.style.border = '2px solid #F00';
        return false;
    }
}
}

dateSignup.addEventListener('focus', dateInput);
function dateInput(){
    hiddenP[3].innerHTML ='';
    dateSignup.classList.remove('blur');
    dateSignup.style.border = '1px solid #000';
}
dateSignup.addEventListener('blur', dateValidation);
function dateValidation(){
    var year = Number(dateSignup.value.split('-')[0]);
    var month = Number(dateSignup.value.split('-')[1]);
    var day = Number(dateSignup.value.split('-')[2]);
    if (!dateSignup.value){
        hiddenP[3].innerHTML ='Required';
        hiddenP[3].style.display = 'block';
        dateSignup.style.border = '2px solid #F00';
    }
    if ((year > 2004) || (year < 1903)) {
        hiddenP[3].innerHTML ='Invalid date';
        hiddenP[3].style.display = 'block';
        dateSignup.style.border = '2px solid #F00';
        return false;
    }else if ((month > 12) || (month < 1) ){
        hiddenP[3].innerHTML ='Invalid date';
        hiddenP[3].style.display = 'block';
        dateSignup.style.border = '2px solid #F00';
        return false;
    }else if ((day > 31) || (day < 1)){
        hiddenP[3].innerHTML ='Invalid date';
        hiddenP[3].style.display = 'block';
        dateSignup.style.border = '2px solid #F00';
        return false;
    }else {
        dniSignup.style.border = '1px solid #000';
        return true;
    }
}

phoneSignup.addEventListener('focus', phoneInput);
function phoneInput(){
    hiddenP[4].innerHTML ='';
    phoneSignup.classList.remove('blur');
    phoneSignup.style.border = '1px solid #000';
}
phoneSignup.addEventListener('blur', phoneValidation);
function phoneValidation() {
    var numbs = 
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var numb = 0;
    if (!phoneSignup.value){
        hiddenP[4].innerHTML ='Required';
        hiddenP[4].style.display = 'block';
        phoneSignup.style.border = '2px solid #F00';
    }
    for (i = 0; i < phoneSignup.value.length; i++) {
        if (numbs.includes(phoneSignup.value[i])) {
            numb ++;
        } else {
            hiddenP[4].innerHTML ='Invalid Phone Number';
            hiddenP[4].style.display = 'block';
            phoneSignup.style.border = '2px solid #F00';
            return false;
    }
    if (phoneSignup.value.length >= 10) {
        phoneSignup.style.border = '1px solid #000';
        return true;
    }else {
        hiddenP[4].innerHTML ='Invalid Phone Number';
        hiddenP[4].style.display = 'block';
        phoneSignup.style.border = '2px solid #F00';
        return false;
    }
}
}

addressSignup.addEventListener('focus', addressInput);
function addressInput(){
    hiddenP[5].innerHTML ='';
    addressSignup.classList.remove('blur');
};

addressSignup.addEventListener('blur', addressValidation);
function addressValidation(){
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var space = [' '];
    var num = 0;
    var char = 0;
    var spa = 0;
    if (!addressSignup.value){
        hiddenP[5].innerHTML ='Required';
        hiddenP[5].style.display = 'block';
        addressSignup.style.border = '2px solid #F00';
    }
    for (i = 0; i < addressSignup.value.length; i++) {
        if (numbers.includes(addressSignup.value[i])) {
            num++;
        } else if (space.includes(addressSignup.value[i])){
            spa++;
        }else {
            char++;
        }
    }
    if ((addressSignup.value.length >= 5) && (num >= 1) && (char >=1 )&& (spa == 1 )) {
        addressSignup.style.border = '1px solid #000';
        return true;
    } else {
        hiddenP[5].innerHTML ='Invalid Address';
        hiddenP[5].style.display = 'block';
        addressSignup.style.border = '2px solid #F00';
        return false;
    }
}

locationSignup.addEventListener('focus', locationInput);
function locationInput(){
    hiddenP[6].innerHTML ='';
    locationSignup.classList.remove('blur');
    locationSignup.style.border = '1px solid #000';
}
locationSignup.addEventListener('blur', locationValidation);
function locationValidation(){
    var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var letter = 
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
    ,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var num = 0;
    var let = 0;
    if (!locationSignup.value){
        hiddenP[6].innerHTML ='Required';
        hiddenP[6].style.display = 'block';
        locationSignup.style.border = '2px solid #F00';
    }
    for (i = 0; i < locationSignup.value.length; i++) {
        if (number.includes(locationSignup.value[i])) {
            num ++;
        }else if (letter.includes(locationSignup.value[i])) {
            let ++;
        }else {
            hiddenP[6].innerHTML ='Invalid Location';
            hiddenP[6].style.display = 'block';
            locationSignup.style.border = '2px solid #F00';
            return false;
        }
    }
    if (locationSignup.value.length > 3) {
        locationSignup.style.border = '1px solid #000';
        return true;
    }else {
        hiddenP[6].innerHTML ='Invalid Location';
        hiddenP[6].style.display = 'block';
        locationSignup.style.border = '2px solid #F00';
        return false;
    }
}

postalSignup.addEventListener('focus', postalInput);
function postalInput(){
    hiddenP[7].innerHTML ='';
    postalSignup.classList.remove('blur');
    postalSignup.style.border = '1px solid #000';
}
postalSignup.addEventListener('blur', postalValidation);
function postalValidation() {
    var numbs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var numb= 0;
    if (!postalSignup.value){
        hiddenP[7].innerHTML ='Required';
        hiddenP[7].style.display = 'block';
        postalSignup.style.border = '2px solid #F00';
    }
    for (i = 0; i < postalSignup.value.length; i++) {
        if (numbs.includes(postalSignup.value[i])) {
            numb++;
        } else {
            hiddenP[7].innerHTML ='Invalid Postal Code';
            hiddenP[7].style.display = 'block';
            postalSignup.style.border = '2px solid #F00';
            return false;
    }
    if ((postalSignup.value.length > 3) && (postalSignup.value.length < 6)) {
        postalSignup.style.border = '1px solid #000';
        return true;
    }else {
        hiddenP[7].innerHTML ='Invalid Postal Code';
        hiddenP[7].style.display = 'block';
        postalSignup.style.border = '2px solid #F00';
        return false;
    }
}
}

emailSignup.addEventListener('focus', emailInput);
function emailInput(){
    hiddenP[8].innerHTML ='';
    emailSignup.classList.remove('blur');
}

emailSignup.addEventListener('blur', emailValidation);
function emailValidation(){
    if (/[a-z0-9]+@[a-z]+.[a-z]{2,3}/.test(emailSignup.value)) {
        emailSignup.style.border = '1px solid #000';
        return emailSignup.value
    } else {
        hiddenP[8].innerHTML ='Invalid Email';
        hiddenP[8].style.display = 'block';
        emailSignup.style.border = '2px solid #F00';
        return 'Invalid email'
    }
}

passwordSignup.addEventListener('focus', passwordInput);
function passwordInput(){
    hiddenP[9].innerHTML ='';
    passwordSignup.classList.remove('blur');
}
passwordSignup.addEventListener('blur', passwordValidation);
function passwordValidation(){
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var letters = 
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
    ,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var num = 0;
    var char = 0;
    for (i = 0; i < passwordSignup.value.length; i++) {
        if (numbers.includes(passwordSignup.value[i])) {
            num++;
        }else if ((letters.includes(passwordSignup.value[i]))){
            char++;
        }else {
            hiddenP[9].innerHTML ='Invalid Password';
            hiddenP[9].style.display = 'block';
            passwordSignup.style.border = '2px solid #F00';
            return false;
        }
    }
    if (passwordSignup.value.length >= 8 && num >= 1 && char >= 1) {
        passwordSignup.style.border = '1px solid #000';
        return true;
    } else {
        hiddenP[9].innerHTML ='Invalid Password';
        hiddenP[9].style.display = 'block';
        passwordSignup.style.border = '2px solid #F00';
        return false;
    }
}

repeatSignup.addEventListener('focus', repeatInput);
function repeatInput(){
    hiddenP[10].innerHTML ='';
    repeatSignup.classList.remove('blur');
}
repeatSignup.addEventListener('blur', repeatValidation);
function repeatValidation(){
    var pass1 = passwordSignup.value;
    var repass = repeatSignup.value;
    if (!repeatSignup.value){
        hiddenP[10].innerHTML ='Required';
        hiddenP[10].style.display = 'block';
        repeatSignup.style.border = '2px solid #F00';
    }
    if (pass1 == repass) {
        repeatSignup.style.border = '1px solid #000';
        return true;
    } else {
        hiddenP[10].innerHTML ='Invalid Password';
        hiddenP[10].style.display = 'block';
        repeatSignup.style.border = '2px solid #F00';
        return false;
    }
}


function burguerMenu() {
    nav[0].classList.toggle('hamburguer');
}
burguer.addEventListener('click', burguerMenu);

function myFunc(nameValue , lastNameValue , idValue , dobValue , phoneValue , addressValue , cityValue , zipValue ,
    emailValue , passValue , url) {
    fetch(
        url +
            '?name=' +
            nameValue +
            '&lastName=' +
            lastNameValue +
            '&dni=' +
            idValue +
            '&dob=' +
            dobValue +
            '&phone=' +
            phoneValue +
            '&address=' +
            addressValue +
            '&city=' +
            cityValue +
            '&zip=' +
            zipValue +
            '&email=' +
            emailValue +
            '&password=' +
            passValue,
        {
            params: {
                name: nameValue,
                lastName: lastNameValue,
                dni: idValue,
                dob: dobValue,
                phone: phoneValue,
                address: addressValue,
                city: cityValue,
                zip: zipValue,
                email: emailValue,
                password: passValue,
            }
        }
    )
            .then(function (response) {
                return response.json();
            }) 
            .then(function (jsonResponse) {
                alert(jsonResponse.msg);
                if (jsonResponse.success) {
                    myStorage();
                    alert(('Name: ' + nameSignup.value + ' ' + 'Surname: ' + surnameSignup.value + ' ' + 'DNI: ' + dniSignup.value
                        + 'Date of Birth :' + dateSignup.value + ' ' + 'Phone Number :' + phoneSignup.value + ' ' + 'Address :' + 
                        addressSignup.value + ' ' + 'Location: ' + locationSignup.value + ' ' + 'Posta Code: ' + postalSignup.value + ' ' +
                        'Email: ' + emailSignup.value + ' ' + 'Password: ' + passwordSignup.value));
                }else if (nameValidation() !== true){
                    alert ('Wrong Name');
                }else if (surnameValidation() !== true) {
                    alert ('Wrong Surname');
                }else if (dniValidation() !== true) {
                    alert ('Wrong DNI');
                }else if (dateValidation() !== true) {
                    alert ('Wrong Date of Birth');
                }else if (phoneValidation() !== true) {
                    alert ('Wrong Phone Number');
                }else if (addressValidation() !== true) {
                    alert ('Wrong Address');
                }else if (locationValidation() !== true) {
                    alert ('Wrong Location');
                }else if (postalValidation() !== true) {
                    alert ('Wrong Postal Code');
                }else if (emailValidation() !== true) {
                    alert ('Wrong Email');
                }else if (passwordValidation() !== true) {
                    alert ('Wrong Password');
                }else if (repeatValidation() !== true) {
                    alert ('Wrong Password');
                }
            })
            .catch(function (error) {
                console.log('Error' , error);
            });
}

form[1].onsubmit = function (e) {
    e.preventDefault();
    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup'
    var formatDate = dateSignup.value.split('-');
    var newFormat =
        formatDate.slice(1, 2) +
        '/' +
        formatDate.slice(2) +
        '/' +
        formatDate.slice(0, 1);
    if (nameValidation() == true && surnameValidation() == true && dniValidation() == true &&  dateValidation() 
    == true && phoneValidation() == true && addressValidation() == true && locationValidation() == true && 
    postalValidation() == true && emailValidation() == emailSignup.value && passwordValidation() == true && 
    repeatValidation() == true) {
        myFunc(nameSignup.value , surnameSignup.value , dniSignup.value , newFormat , phoneSignup.value , 
            addressSignup.value , locationSignup.value , postalSignup.value , emailSignup.value , passwordSignup.value ,
            url);
    }else if(nameValidation() !== true){
        alert('Wrong Name');
    }else if(surnameValidation() !== true) {
        alert('Wrong Surname');
    }else if(dniValidation() !== true) {
        alert('Wrong DNI');
    }else if(dateValidation() !== true) {
        alert('Wrong Date of Birth');
    }else if(phoneValidation() !== true) {
        alert('Wrong Phone Number');
    }else if(addressValidation() !== true) {
        alert('Wrong Address');
    }else if(locationValidation() !== true) {
        alert('Wrong Location');
    }else if(postalValidation() !== true) {
        alert('Wrong Postal Code');
    }else if(emailValidation() !== emailSignup.value) {
        alert('Wrong Email');
    }else if(passwordValidation() !== true) {
        alert('Wrong Password');
    }else if(repeatValidation() !== true) {
        alert('Wrong Password');
}
}
function myStorage() {
    localStorage.setItem('Name' , nameSignup.value);
    localStorage.setItem('Surname' , surnameSignup.value);
    localStorage.setItem('DNI' , dniSignup.value);
    localStorage.setItem('Date of Birth' , dateSignup.value);
    localStorage.setItem('Phone Number' , phoneSignup.value);
    localStorage.setItem('Address' , addressSignup.value);
    localStorage.setItem('Location' , locationSignup.value);
    localStorage.setItem('Postal Code' , postalSignup.value);
    localStorage.setItem('Email' , emailSignup.value);
    localStorage.setItem('Password' , passwordSignup.value);
    localStorage.setItem('Repeat Password' , repeatSignup.value);
}
if (
    localStorage.getItem('Name') != null &&
    localStorage.getItem('Surname') != null &&
    localStorage.getItem('DNI') != null &&
    localStorage.getItem('Date of Birth') != null &&
    localStorage.getItem('Phone Number') != null &&
    localStorage.getItem('Address') != null &&
    localStorage.getItem('Location') != null &&
    localStorage.getItem('Postal Code') != null &&
    localStorage.getItem('Email') != null &&
    localStorage.getItem('Password') !=null &&
    localStorage.getItem('Repeat Password') !=null
){
    nameSignup.value = localStorage.getItem('Name');
    surnameSignup.value = localStorage.getItem('Surname');
    dniSignup.value = localStorage.getItem('DNI');
    dateSignup.value = localStorage.getItem('Date of Birth');
    phoneSignup.value = localStorage.getItem('Phone Number');
    addressSignup.value = localStorage.getItem('Address');
    locationSignup.value = localStorage.getItem('Location');
    postalSignup.value = localStorage.getItem('Postal Code');
    emailSignup.value = localStorage.getItem('Email');
    passwordSignup.value = localStorage.getItem('Password');
    repeatSignup.value = localStorage.getItem('Repeat Password');
}
};





