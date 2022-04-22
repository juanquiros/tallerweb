var user={
    email:'',
    password:''
}


function login(){


    $.ajax({
        method: "POST",
        url: "#",
        data: JSON.stringify(this.user)
      })
        .done(function( msg ) {
          alert( "Data Saved: " + msg );
        });


}
