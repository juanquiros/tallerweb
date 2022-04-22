function changeImg(){
    
    if($("#image").attr("src")=="img/smartphone2.png"){
        
        $("#image").fadeTo(500,0, function() {
            $("#image").attr("src","img/smartphone.png");
        }).fadeTo(500,1);
           
        
    }else{
        $("#image").fadeTo(500,0, function() {
            $("#image").attr("src","img/smartphone2.png");
        }).fadeTo(500,1);
       
    }
}