import {StyleSheet} from 'react-native';

export const mapaEstilo = [ 
	{
	  "elementType": "geometry",
	  "stylers": [
		 {
			"color": "#242f3e"
		 }
	  ]
	},
	{
	  "elementType": "labels.text.fill",
	  "stylers": [
		 {
			"color": "#746855"
		 }
	  ]
	},
	{
	  "elementType": "labels.text.stroke",
	  "stylers": [
		 {
			"color": "#242f3e"
		 }
	  ]
	},
	{
	  "featureType": "administrative.locality",
	  "elementType": "labels.text.fill",
	  "stylers": [
		 {
			"color": "#d59563"
		 }
	  ]
	},
	{
	  "featureType": "poi",
	  "elementType": "labels.text.fill",
	  "stylers": [
		 {
			"color": "#d59563"
		 }
	  ]
	},
	{
	  "featureType": "poi.park",
	  "elementType": "geometry",
	  "stylers": [
		 {
			"color": "#263c3f"
		 }
	  ]
	},
	{
	  "featureType": "poi.park",
	  "elementType": "labels.text.fill",
	  "stylers": [
		 {
			"color": "#6b9a76"
		 }
	  ]
	},
	{
	  "featureType": "road",
	  "elementType": "geometry",
	  "stylers": [
		 {
			"color": "#38414e"
		 }
	  ]
	},
	{
	  "featureType": "road",
	  "elementType": "geometry.stroke",
	  "stylers": [
		 {
			"color": "#212a37"
		 }
	  ]
	},
	{
	  "featureType": "road",
	  "elementType": "labels.text.fill",
	  "stylers": [
		 {
			"color": "#9ca5b3"
		 }
	  ]
	},
	{
	  "featureType": "road.highway",
	  "elementType": "geometry",
	  "stylers": [
		 {
			"color": "#746855"
		 }
	  ]
	},
	{
	  "featureType": "road.highway",
	  "elementType": "geometry.stroke",
	  "stylers": [
		 {
			"color": "#1f2835"
		 }
	  ]
	},
	{
	  "featureType": "road.highway",
	  "elementType": "labels.text.fill",
	  "stylers": [
		 {
			"color": "#f3d19c"
		 }
	  ]
	},
	{
	  "featureType": "transit",
	  "elementType": "geometry",
	  "stylers": [
		 {
			"color": "#2f3948"
		 }
	  ]
	},
	{
	  "featureType": "transit.station",
	  "elementType": "labels.text.fill",
	  "stylers": [
		 {
			"color": "#d59563"
		 }
	  ]
	},
	{
	  "featureType": "water",
	  "elementType": "geometry",
	  "stylers": [
		 {
			"color": "#17263c"
		 }
	  ]
	},
	{
	  "featureType": "water",
	  "elementType": "labels.text.fill",
	  "stylers": [
		 {
			"color": "#515c6d"
		 }
	  ]
	},
	{
	  "featureType": "water",
	  "elementType": "labels.text.stroke",
	  "stylers": [
		 {
			"color": "#17263c"
		 }
	  ]
	}
];
export const mapas = StyleSheet.create({
	mapaExibicaoContainer: {
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	mapaExibicao: {
		height: '100%',
		width: '100%',
	}
});
export const estilos = StyleSheet.create({
	fotoUsuario:{
		borderTopRightRadius: 100,
		borderTopLeftRadius: 100,
		borderBottomRightRadius: 100,
		borderBottomLeftRadius: 100,
		width: 200,
		height: 200
	},
	opcao: {
		paddingTop: 15,
		paddingBottom: 15,
		justifyContent: 'center',
    },
    botao: {
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		marginTop: 20,
		height: 60,
		width: 150,
		justifyContent: 'center',
		alignItems: 'center',
        backgroundColor: colors.verde
    },
    textInput: {
		textAlign: 'center',
		padding: 5,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomColor: '#000',
		borderTopColor: '#000',
		borderLeftColor: '#000',
		borderRightColor: '#000',
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		marginTop: 10,
		fontSize: 20,
		height: 45,
		width: 250
	},
	textoPadrao: {
		fontSize: 20,
		color: '#000000'
	},
	textoBotao: {
		fontSize: 20,
		color: '#FFFFFF'
	},
	textoInformacaoValidacao: {
		fontSize: 15,
		color: '#000000'
	},
	textoAviso: {
		fontSize: 15,
		color: '#FF0000'
	},
	textoOpcao: {
		marginLeft: 30,
		fontSize: 20,
		color: '#000000'
	},
	conteinerMenu: {
		justifyContent: 'center',
		borderTopWidth: 1,
		borderColor: '#FFFFFF',
		marginTop: 20
	},
	componenteMenu: {
		justifyContent: 'center',
		marginLeft: 30,
		marginTop: 20
	},
	textArea: {
		textAlign: 'center',
		padding: 5,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomColor: '#000',
		borderTopColor: '#000',
		borderLeftColor: '#000',
		borderRightColor: '#000',
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		marginTop: 10,
		fontSize: 20,
		height: 200,
		width: 300,
		color: colors.preto,
		backgroundColor: colors.branco
	},
	aicionarProblema: {
		height: 75,
		width: 75,
		borderTopRightRadius: 100,
		borderTopLeftRadius: 100,
		borderBottomRightRadius: 100,
		borderBottomLeftRadius: 100,
		...StyleSheet.absoluteFillObject,
		top: '80%',
		left: '76%',
		backgroundColor: colors.branco,
	}
});