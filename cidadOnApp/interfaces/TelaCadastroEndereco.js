import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BarraNavegacao from '../components/BarraNavegacao';
import {modificaResidencia,
	cadastraUsuario,
	modificaNome,
	modificaSobrenome,
	modificaCpf, 
	modificaEmail,
	modificaNomeUsuario, 
	modificaSenha, 
	verificaCadastro,
	modificaSenha2 ,
	limpaDadosUsuario
 } from '../actions/AutenticacaoActions'
import { connect } from 'react-redux';

const imgHome = require('../imagens/pngs/home.png');
class TelaCadastroEndereco extends React.Component {
	constructor(props) {
		super(props);
		this.state = { marcaFeita: false, residencia: { latitude: 0.0, longitude: 0.0}, region: {
			latitude: 0,
			longitude: 0,
			latitudeDelta: 100,
			longitudeDelta: 100,
		}};
	}
	destrancaMarca(residencia) {
		this.setState({ marcaFeita: true, residencia: residencia, region: {latitude: residencia.latitude, longitude: residencia.longitude, latitudeDelta: 0.01, longitudeDelta: 0.01 } });
	}
	fazmarca() {
		if (this.state.marcaFeita == true) {
			return (
				<Marker
					coordinate={this.state.residencia}
					image={imgHome}
				/>
			);
		}
	}
	_cadastraUsuario(){
		this.props.cadastraUsuario( this.props.nome, this.props.sobrenome, this.props.cpf, this.props.email, this.props.nomeUsuario, this.props.senha, this.state.residencia)
	}
	render() {
		return (
			<View>
				<View>
					<BarraNavegacao estado={2} voltarKey="TelaCadastroUsuario" />
				</View>
				<View>
					<View style={{ paddingTop: 15, paddingBottom: 15 }}>
						<Text style={{ fontSize: 20, textAlign: 'center', }}>Quase pronto, marque no mapa onde você mora</Text>
					</View>
					<View style={styles.conteiner}>
						<MapView
							provider={PROVIDER_GOOGLE} // remove if not using Google Maps
							style={styles.map}
							region={this.state.region}
							onPress={e => this.destrancaMarca(e.nativeEvent.coordinate)}
						>
							{this.fazmarca()}
						</MapView>
					</View>
					<View style={{ alignItems: 'center', marginTop: 15 }}>
						<TouchableOpacity style={styles.btn} onPress={() => { this._cadastraUsuario() }}>
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

const mapStateToProps = state => (
	{
		nome: state.AutenticacaoReducer.nome,
		sobrenome: state.AutenticacaoReducer.sobrenome,
		cpf: state.AutenticacaoReducer.cpf,
		email: state.AutenticacaoReducer.email,
		nomeUsuario: state.AutenticacaoReducer.nomeUsuario,
		senha: state.AutenticacaoReducer.senha,
	}
)

export default connect(mapStateToProps,{modificaResidencia,cadastraUsuario,
	modificaNome,
	modificaSobrenome,
	modificaCpf, 
	modificaEmail,
	modificaNomeUsuario, 
	modificaSenha, 
	verificaCadastro,
	modificaSenha2 ,
	limpaDadosUsuario})(TelaCadastroEndereco)