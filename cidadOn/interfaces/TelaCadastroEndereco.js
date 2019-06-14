import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert  } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Botao from '../components/Botao'
import BotaoLocalizacao from '../components/BotaoLocalizacao'
import { colors } from '../layout'
import {
	modificaResidencia,
	cadastraUsuario,
	modificaNome,
	modificaSobrenome,
	modificaCpf,
	modificaEmail,
	modificaNomeUsuario,
	modificaSenha,
	verificaCadastro,
	modificaSenha2,
	limpaDadosUsuario,
	igualaDadosEdicao
} from '../actions/UsuarioActions'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const imgHome = require('../imagens/pngs/home.png');
class TelaCadastroEndereco extends React.Component {
	constructor(props) {
		super(props);
		this.props.igualaDadosEdicao();
		this.state = {
			marcaFeita: false, residencia: { latitude: 0.0, longitude: 0.0 }, region: {
				latitude: -14.235004,
				longitude: -51.92528,
				latitudeDelta: 100,
				longitudeDelta: 100,
			}
		};
	}
	geolocalizar() {
		navigator.geolocation.getCurrentPosition(
			position => {
				//const location = JSON.stringify(position);
				this.setState({
					region: {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						latitudeDelta: 0.01,
						longitudeDelta: 0.01,
					}
				})
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	}
	destrancaMarca(residencia) {
		this.setState({ marcaFeita: true, residencia: residencia, region: { latitude: residencia.latitude, longitude: residencia.longitude, latitudeDelta: 0.01, longitudeDelta: 0.01 } });
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
	_cadastraUsuario() {
		if(this.state.residencia.latitude != 0.0 && this.state.residencia.longitude != 0.0){
			Actions.TelaCarregamento();
			this.props.cadastraUsuario(this.props.nome, this.props.sobrenome, this.props.cpf, this.props.email, this.props.nomeUsuario, this.props.senha, this.state.residencia)
		}else{
			alert('Selecione uma localidade!');
		}
	}
	render() {
		return (
			<View>
				<View style={{ paddingTop: 15, paddingBottom: 15 }}>
					<Text style={{ fontSize: 20, textAlign: 'center', color: colors.preto }}>Quase pronto, marque no mapa onde você mora</Text>
				</View>
				<View style={styles.conteiner}>
					<MapView
						showsUserLocation={true}
						provider={PROVIDER_GOOGLE} // remove if not using Google Maps
						style={styles.map}
						region={this.state.region}
						onPress={e => this.destrancaMarca(e.nativeEvent.coordinate)}
					>
						{this.fazmarca()}
					</MapView>
					<BotaoLocalizacao onPress={() => { this.geolocalizar() }} />
				</View>
				<View style={{alignItems: 'center', justifyContent: 'center'}}>
					<Botao texto='Confirmar' onPress={() => { this._cadastraUsuario() }} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	conteiner: {
		height: '70%',
		width: '100%',
	},
	map: {
		height: '100%',
		width: '100%'
	}
});

const mapStateToProps = state => (
	{
		nome: state.UsuarioReducer.nome,
		sobrenome: state.UsuarioReducer.sobrenome,
		cpf: state.UsuarioReducer.cpf,
		email: state.UsuarioReducer.email,
		nomeUsuario: state.UsuarioReducer.nomeUsuario,
		senha: state.UsuarioReducer.senha,
	}
)

export default connect(mapStateToProps, {
	modificaResidencia, cadastraUsuario,
	modificaNome,
	modificaSobrenome,
	modificaCpf,
	modificaEmail,
	modificaNomeUsuario,
	modificaSenha,
	verificaCadastro,
	modificaSenha2,
	limpaDadosUsuario,
	igualaDadosEdicao
})(TelaCadastroEndereco)