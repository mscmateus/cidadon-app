import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BarraNavegacao from '../components/BarraNavegacao';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

const add = require('../imagens/pngs/addProblema.png');

export default class TelaExposicao extends React.Component {
	constructor(props) {
		super(props);
		this.state = { marcaFeita: false, cordenada: { latitude: 0.0, longitude: 0.0 }, desabilitacao: true };
	}
	destrancaMarca(cordenada) {
		this.setState({ marcaFeita: true, cordenada: cordenada});
	}
	fazmarca() {
		if(this.desabilitacao){
			this.setState({desabilitacao: false});
		}
		if (marcafeita = true) {
			return (
				<Marker
					coordinate={this.state.cordenada}
				/>
			);
		}
	}
	render() {
		return (
			<View>
				<BarraNavegacao estado={1} opcaoKey='TelaGerenciaDeAcoes' />
				<View style={styles.container}>
					<MapView
						provider={PROVIDER_GOOGLE}
						style={styles.map}
						region={{
							latitude: -9.9540920,
							longitude: -67.863422,
							latitudeDelta: 0.015,
							longitudeDelta: 0.0121,
						}}
						onPress={e => this.destrancaMarca(e.nativeEvent.coordinate)}
						>
							{this.fazmarca()}
					</MapView>
				</View>
				<TouchableOpacity disabled={this.desabilitacao} style={{ ...StyleSheet.absoluteFillObject, top: '77%', left: '76%'}} onPress={() => { Actions.inclusaodeproblema() }}>
					<Image source={add} />
				</TouchableOpacity >
			</View>
		);
	}
}
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