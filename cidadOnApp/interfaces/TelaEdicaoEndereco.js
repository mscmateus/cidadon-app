import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BarraNavegacao from '../components/BarraNavegacao';
import { Actions } from 'react-native-router-flux';

const imgHome = require('../imagens/pngs/home.png');


export default class TelaInsercaoProblema extends React.Component {
	constructor(props) {
		super(props);
		this.state = { marcaFeita: false, cordenada: { latitude: 0.0, longitude: 0.0 } };
	}
	destrancaMarca(cordenada) {
		this.setState({ marcaFeita: true, cordenada: cordenada });
	}
	fazmarca() {
		if (marcafeita = true) {
			return (
				<Marker
					coordinate={this.state.cordenada}
					image={imgHome}
				/>
			);
		}
	}
	render() {
		return (
			<View>
				<View>
					<BarraNavegacao estado="voltar" voltarKey="gerenciaracoes" />
				</View>
				<View>
					<View style={{ paddingTop: 15, paddingBottom: 15 }}>
						<Text style={{ fontSize: 20, textAlign: 'center', }}>Ok, seu endereço mudou? Marque no mapa o novo ou aperte confirmar para manter o atual</Text>
					</View>
					<View style={styles.conteiner}>
						<MapView
							provider={PROVIDER_GOOGLE} // remove if not using Google Maps
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
					<View style={{ alignItems: 'center', marginTop: 15 }}>
						<TouchableOpacity style={styles.btn} onPress={() => { Actions.confirmaalteracao() }}>
							<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Confirmar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	btn: {
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		height: 60,
		width: 150,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1d9a78',
	},
	conteiner: {
		height: '70%',
		width: '100%',
	},
	map: {
		height: '100%',
		width: '100%',
	}
});