function validaion(){
    let form = document.getElementById('from');
    let email = document.getElementById('email').value;
    let text = document.getElementById('text');
    let parttern = /^[^ ]+@[^ ]+\.[a-Z]{2,3}$/;

    if(email.match(parttern)){
        form.classList.add('valid');
    }
    else{
        form.classList.remove('valid');
    }
}