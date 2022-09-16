let paswrd = document.getElementById('paswrd');
let togglebtn = document.getElementById('togglebtn');
let lowerCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let digit = document.getElementById('number');
let specialchar = document.getElementById('special');
let totalpass = document.getElementById('length');


// Match Password
function checkPassword(data){
    // javaScript regular expresion parttern
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    // Lowercase Validation check
    if(lower.test(data)){
        lowerCase.classList.add('valid');
    }
    else{
        lowerCase.classList.remove('valid');
    }
    // Uppercase Validation check
    if(upper.test(data)){
        upperCase.classList.add('valid');
    }
    else{
        upperCase.classList.remove('valid');
    }
    // Number Validation check
    if(number.test(data)){
        digit.classList.add('valid');
    }
    else{
        digit.classList.remove('valid');
    }
    // Special Charecter Validation check
    if(special.test(data)){
        specialchar.classList.add('valid');
    }
    else{
        specialchar.classList.remove('valid');
    }
    // Minimum * Charecter password Validation check
    if(length.test(data)){
        totalpass.classList.add('valid');
    }
    else{
        totalpass.classList.remove('valid');
    }
}

// Show Hide Password
togglebtn.onclick = function(){
    if(paswrd.type === 'password'){
        paswrd.setAttribute('type', 'text');
        togglebtn.classList.add('hide');
    }
    else{
        paswrd.setAttribute('type', 'password');
        togglebtn.classList.remove('hide');
    }
}
