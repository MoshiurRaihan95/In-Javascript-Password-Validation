let paswrd = document.getElementById('paswrd');
let togglebtn = document.getElementById('togglebtn');

// Show Hide Password
togglebtn.onclick = function(){
    if(paswrd.type === 'password'){
        paswrd.setAttribute('type', 'text');
    }
    else{
        paswrd.setAttribute('type', 'password');
    }
}