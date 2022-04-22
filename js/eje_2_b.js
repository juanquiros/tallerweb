var tabla = document.getElementsByTagName('table')[1];
tabla.id = 'tabla_usuarios';
var tbody = tabla.getElementsByTagName('tbody')[0];
for (let tr of tbody.rows) {
    tr.className = 'row_usuario';
}
$("#tabla_usuarios tbody .row_usuario").each( function (index,tr){
    $("#ul-grupoLista").append('<li>');
    for (let cell of tr.children) {
        console.log(cell.textContent);        
            $("#ul-grupoLista li")[index].append(cell.textContent + ' ');
    }
    $("#ul-grupoLista").append('</li>');
});
