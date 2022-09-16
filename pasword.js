let paswrd = document.getElementById('paswrd');
let togglebtn = document.getElementById('togglebtn');
let lowercase = document.getElementById('lower');
let uppercase = document.getElementById('upper');
let digit = document.getElementById('number');
let specialchar = document.getElementById('special');
let totalpass = document.getElementById('length');


// Match Password
function checkPassword(data){
    // javaScript regular expresion parttern
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[a-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    // Lowercase Validation check
    
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
