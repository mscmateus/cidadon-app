import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BarraNavegacao from '../components/BarraNavegacao';
import firebase from 'firebase';


const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		height: '100%',
		width: '100%',
	}
});
export default class TelaExposicao extends React.Component {
	// componentDidMount(){
	//   var config = {
	//     apiKey: "AIzaSyCs_-ww64KaLXEVhKstCbkEJuro_5XryG4",
	//     authDomain: "spatial-groove-218819.firebaseapp.com",
	//     databaseURL: "https://spatial-groove-218819.firebaseio.com",
	//     projectId: "spatial-groove-218819",
	//     storageBucket: "spatial-groove-218819.appspot.com",
	//     messagingSenderId: "922879364904"
	//   };
	//   firebase.initializeApp(config);
	// }
	// salvaDados(){
	//   var db = firebase.database();
	//   db.ref("Problema").set("11");
	// }
	// fazmarcas(){
	//   var lista = firebase.firestore().collection("problema");
	//   for(var i=0;i<lista.length;i++){
	//     return(
	//       <Marker
	//         coordinate={ {latitude: lista.latitude, longitude: lista.longitude}}
	//         image={imgEstruturaViaria}
	//       />
	//     );
	//   }
	// }
	render() {
		return (
			<View>
				<BarraNavegacao estado={1} opcaoKey='TelaLogin' filtroKey='TelaFiltroExterna' />
				<View style={styles.container}>
					<MapView
						provider={PROVIDER_GOOGLE} // remove if not using Google Maps
						style={styles.map}
						region={{
							latitude: -9.9540920,
							longitude: -67.863422,
							latitudeDelta: 0.015,
							longitudeDelta: 0.0121,
						}}
					>
					</MapView>
				</View>
			</View>
		);
	}
}
