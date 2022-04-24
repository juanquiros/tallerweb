function hiddenSpan(){
    document.getElementById('show_span').hidden = true;
   console.log( document.getElementById('show_span').hidden);
}
function valid_user(str_nom){
    //almenos 6 letras seguidas de al menos 2 digitos
    //mostrar en un span "nombre de usuario NO válido" o "Nombre de usuario válido"
    //retornar true si es correcto o false si no es correcto
    
    if(str_nom.value){        
        var exp =/^[a-zA-Z]{6,}[\d]{2,}$/;
        var valido = false;
        document.getElementById('show_span').hidden = false;
        if(str_nom.value.match(exp)!=null){
            document.getElementById('show_span').textContent="Nombre de usuario válido";
            document.getElementById('show_span').style.color='green';
            valido=true;
        }else{        
            document.getElementById('show_span').textContent="Nombre de usuario NO válido";
            document.getElementById('show_span').style.color='red';
        }
    }else{
        console.log('Ingrese un nombre de usuario');
    }
     return valido;    
}

