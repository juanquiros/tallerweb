var concatenado = "";



function agregar(string){    
    if(string.value){        
        this.concatenado += string.value + ';';
        string.value = '';
        console.log(this.concatenado);
    }    
}

function finalizar(){    
    if(this.concatenado!=""){
        var split = this.concatenado.split(';');
        var str_html = '<ol id="lista">';
        for (var i=0; i < split.length-1; i++) {
            str_html+= '<li>'+split[i]+'</li>';
         }     
         str_html+='</ol>';
         document.getElementById('lista').outerHTML = str_html;
         this.concatenado='';
    }
}