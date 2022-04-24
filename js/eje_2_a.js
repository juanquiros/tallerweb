
function login(event){
  event.preventDefault();//detener formulario
  this.crearObjetoUsuario();//eje_1_d.js
  var valido = document.getElementById('password').validity.valid;
  if(valido){   
    $.ajax({
      url: "login.php",
      method: "POST",  
      data: { json : JSON.stringify(this.user) },
    })
      .done(function( msg ) {
        alert( "Respuesta del login.php: " + msg );
      }).fail(function(err){
        console.log(err.statusText);
      });
  }
    

}
