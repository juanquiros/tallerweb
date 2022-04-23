var marker= null;
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
 var map = L.map('map').setView([-27.3698805,-55.9399215], 17);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiNjRiaXRzanVhbiIsImEiOiJjbDJhcDVkdjMwN2d4M2pxbjRzaHY3NHlyIn0.JGc3z4I7Go_JgaZLc0VTkA'
}).addTo(map);
const search = new GeoSearch.GeoSearchControl({
  provider: new GeoSearch.OpenStreetMapProvider(),
});




const start = async function(consulta = null) {
  var result = null;
  const provider = new GeoSearch.OpenStreetMapProvider();
  var search = document.getElementById('calle').value;
  if(document.getElementById('altura').value){
    search += ' ' + document.getElementById('altura').value;
  }
  
  search += ', ' + document.getElementById('ciudad').value;
  search += ', ' + document.getElementById('provincia').value;
  search += ', ' + document.getElementById('pais').value;
  
    
    if(consulta){
       result = await provider.search({ query: consulta });
    }else{
       result = await provider.search({ query: search });
    }
    if(result != null && result.length > 0){      
      var zoom = 0;
      switch(result[0].raw.type.toString()){
        case 'administrative':
          zoom = 12;
          break;
        case 'residential':
          zoom= 17;
          break;
        default:
          console.log(result[0].raw.type.toString());
          zoom= 16;
      }
      if(this.marker){
        this.marker.remove();
      }      
      this.map.setView([result[0].y,result[0].x], zoom);     
      this.marker = L.marker([result[0].y,result[0].x],{title:result[0].label}).addTo(map);      
      document.getElementById('lat').value = result[0].y;
      document.getElementById('long').value = result[0].x;
      if(consulta){
        var label = result[0].label.split(', ');
        console.log(label);
        document.getElementById('pais').value = label[label.length -1];
        document.getElementById('provincia').value = label[label.length -3];
        document.getElementById('ciudad').value = label[label.length -6];
        document.getElementById('calle').value = label[1];
        if(!document.getElementById('pais').value){
          var x = document.getElementById("pais");
          var option = document.createElement("option");
          option.value = label[label.length -1];
          option.text = label[label.length -1];
          x.add(option);
          document.getElementById('pais').value = label[label.length -1];
        }
        if(!document.getElementById('provincia').value){
          var x = document.getElementById("provincia");
          var option = document.createElement("option");
          option.value = label[label.length -3];
          option.text = label[label.length -3];
          x.add(option);
          document.getElementById('provincia').value = label[label.length -3];
        }
        if(!document.getElementById('ciudad').value){
          var x = document.getElementById("ciudad");
          var option = document.createElement("option");
          option.value = label[label.length -6];
          option.text = label[label.length -6];
          x.add(option);
          document.getElementById('ciudad').value = label[label.length -6];
        }
      }

    }else{
      if(this.marker){
        this.marker.remove();
      }    
      document.getElementById('lat').value = '';
      document.getElementById('long').value = '';
    }
    
  
}

function obtenerUbicacion(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarPosicion, mostrarErrores, opciones);    
  } else {
    alert("Tu navegador no soporta la geolocalización, actualiza tu navegador.");
  }
}
function mostrarPosicion(posicion) {
  var latitud = posicion.coords.latitude;
  var longitud = posicion.coords.longitude;
  var precision = posicion.coords.accuracy;
  var fecha = new Date(posicion.timestamp);
  console.log(latitud,longitud,precision,fecha); 

  if(this.marker){
    this.marker.remove();
  }
  console.log(latitud + ' ' + longitud);
  start(latitud + ' ' + longitud);

}

function mostrarErrores(error) {
  switch (error.code) {
      case error.PERMISSION_DENIED:
          alert('Permiso denegado por el usuario'); 
          break;
      case error.POSITION_UNAVAILABLE:
          alert('Posición no disponible');
          break; 
      case error.TIMEOUT:
          alert('Tiempo de espera agotado');
          break;
      default:
          alert('Error de Geolocalización desconocido :' + error.code);
  }
}

var opciones = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 1000
};
start();

