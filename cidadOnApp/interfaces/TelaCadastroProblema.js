import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker,TextInput, ScrollView} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BarraNavegacao from '../components/BarraNavegacao';

const imgHome = require('../imagens/pngs/home.png');

var tiposDeProblemas = ["Estrutura Viária","Rede de Esgoto","Rede de Água","Iluminação Pública","Rede Eletrica"]
function caregaProblemas(){
	for (var i=0; i<tiposDeProblemas.length;i++) {
		return(
			<Picker.Item style={{fontSize: 20 }} label= {tiposDeProblemas[i]} value= {tiposDeProblemas[i]} />
		)
	}
}

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
					<BarraNavegacao estado={2} voltarKey="TelaMapaInterna" />
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
					<View style={{ alignItems: 'center', marginTop: 15, fontSize: 20 }}>
						<Text style={{fontSize: 20 }}>Tipo de problema:</Text>
						<Picker
							selectedValue={1}
							style={{ height: 50, width: 200 }}>
							{caregaProblemas()}
						</Picker>
						<Text style={{fontSize: 20 }}>Descrição do tipo de problema</Text>
						<TextInput maxLength={200}  multiline={true} style={styles.entrada} placeholder="descrição do problema" />

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
		marginTop: 20
	},
	conteiner: {
		height: '25%',
		width: '100%',
	},
	map: {
		height: '100%',
		width: '100%',
	},
	entrada: {
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
		width: 300
	}
});