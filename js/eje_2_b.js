var tabla = document.getElementsByTagName('table');
tabla[0].id = 'tabla_usuarios';
console.log(tabla);
tabla[0].rows.forEach(row =>  {
    row.className = 'row_usuario';
});