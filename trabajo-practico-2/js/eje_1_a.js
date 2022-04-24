function concat_replace(str_ini, str_fin, str_needle, str_to){
    var res = str_ini.value  + str_fin.value;
    
    if (str_needle.value && str_to.value){
        console.log('replace');
        var needle = new RegExp( escapeRegExp(str_needle.value),'g');
        res = res.replace(needle, str_to.value);
    }
    document.getElementById('resultado').value= res ;

}

function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

