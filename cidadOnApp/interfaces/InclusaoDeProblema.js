import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BarraNavegacao from '../components/BarraNavegacao';
import firebase from 'firebase';

const imgEstruturaViaria = require('../imagens/estruturaViaria.png');
const imgHome = require('../imagens/home.png');
const imgIluminacaoPublica = require('../imagens/iluminacaoPublica.png');
const imgRedeDistribuicaoAgua = require('../imagens/redeDistribuicaoAgua.png');
const imgRedeEletrica = require('../imagens/redeEletrica.png');
const imgRedeEsgoto = require('../imagens/redeEsgoto.png');

const add = require('../imagens/addProblema.png');

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
					<BarraNavegacao estado="voltar" voltarKey="telaexposicaointerna" />
				</View>
				<View>
					<View style={styles.conteiner}>
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
					<View style={{ alignItems: 'center', marginTop: 15 }}>
						<Text>Tipo de problema:</Text>
						<Text>Descrição do tipo de problema</Text>
						<TouchableOpacity style={styles.btn} onPress={() => { Actions.confirmacadastro() }}>
							<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Inserir problema</Text>
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
		height: '50%',
		width: '100%',
	},
	map: {
		height: '100%',
		width: '100%',
	}
});