
var map, infoWindow, ufac = { lat : -9.954090, lng : -67.863422 }, cordenadasAtual, marca=null,descricaoAtual="", marcavel;

var tiposDeProblemas = [
  {titulo : "iluminação pública", descricao : "problemas de iluminção", icone : '/home/mateus/CidadOn/web/imagens/iluminacaoPublica.svg'},
  {titulo : "infraestrutura rodoviária", descricao :"buracos",icone : '/home/mateus/CidadOn/web/imagens/estruturaViaria.svg'},
  {titulo : "rede elétrica", descricao :"falta de luz",icone : '/home/mateus/CidadOn/web/imagens/redeEletrica.svg'},
  {titulo : "rede de esgoto", descricao : "esgoto vazando",icone : '/home/mateus/CidadOn/web/imagens/redeEsgoto.svg'},
  {titulo : "rede de distribuição de água", descricao : "falta de agua",icone : '/home/mateus/CidadOn/web/imagens/redeDistribuicaoAgua.svg'}
];

function carregaTiposDeProblema(){
  var select = document.getElementById('tipoProblema');
  for(var i=0; i<5; i++){
    var option = document.createElement('option');
    option.value = tiposDeProblemas[i].titulo;
    option.text = tiposDeProblemas[i].titulo;
    select.add(option);
  }
  trocaDescricaoProblema(determinaProblemaSelecionado());
}

function trocaDescricaoProblema(problema){
  var paragrafo = document.getElementById('descricaoProblema').innerHTML= problema.descricao;
}

function determinaProblemaSelecionado(value){
  var select = document.getElementById('tipoProblema');
  for(var i=0;i<5;i++){
    var option = select.options[i];
    if(option.selected == true){
      for(var j=0;j<5;j++){
        if(option.value==tiposDeProblemas[j].titulo){
            return tiposDeProblemas[j];
          break;
        }
      }
      break;
    }
  }
}

function trocaIcone(problema){
  trocaDescricaoProblema(problema);
  marca.setIcon(problema.icone);
}
function initMap(m){
  marcavel=m;
  var mapOptions = { center : new google.maps.LatLng(-9.954090, -67.863422), zoom : 16, mapTypeId : google.maps.MapTypeId.ROADMAP };
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  if(marcavel==true){
    map.addListener('click', function(e) {
      if(marca==null){
        fazPontoNoMapa(e.latLng);
      }else{
        marca.setMap(null);
        marca=null;
        fazPontoNoMapa(e.latLng);
      }
    });
  }
}

infoWindow = new google.maps.InfoWindow;

function geolocalization() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = { lat : position.coords.latitude, lng : position.coords.longitude };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}
//
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ? 'Erro: O serviço de golocalização falhou :(.': 'Seu navegador não suporta geolocalização..');
  infoWindow.open(map);
}
//cria um ponto no mapa
function fazPonto(ponto) {
  marca = new google.maps.Marker({ position : ponto,icon : determinaProblemaSelecionado().icone, map : map });
  mostraCordenadas(ponto);
  cordenadasAtual = ponto;
}
//faz pontos no mapa apartir do click  e o centraliza no mapa
function fazPontoNoMapa(latLng) {
      fazPonto(latLng);
      map.panTo(latLng);
}
