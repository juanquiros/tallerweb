var user={
    email:'',
    password:''
}

function login(){
    
    var valido = document.getElementById('password').validity.valid;
    if(valido){
        this.user.email = document.getElementById('email').value;
        this.user.password = document.getElementById('password').value;

        alert(JSON.stringify(this.user).replace(/}/g,'').replace(/{/g,'').replace(/"/g,'').replace(/,/g,' '));
    }else{
        console.log('email:' + document.getElementById('email').validationMessage);
        console.log('password:' + document.getElementById('password').validationMessage);
    }
    
}