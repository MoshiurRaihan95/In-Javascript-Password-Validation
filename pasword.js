let paswrd = document.getElementById('paswrd');
let togglebtn = document.getElementById('togglebtn');

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