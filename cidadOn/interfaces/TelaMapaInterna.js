import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaLocalizacao, recuperaTodosOsProblemas, recuperaProblema, recuperaTiposDeProblemas } from '../actions/ProblemaActions'

const add = require('../imagens/pngs/addProblema.png');
const imgHome = require('../imagens/pngs/home.png');
const imgNovoProblema = require('../imagens/pngs/novoProblema.png');


class TelaMapaInterna extends React.Component {
	constructor(props) {
		super(props);
		this.props.recuperaTiposDeProblemas()
		this.props.recuperaTodosOsProblemas()
		this.state = {
			marcaFeita: false,
			cordenadaPonto: { latitude: null, longitude: null },
			region: {
				latitude: (this.props.residencia.latitude ? this.props.residencia.latitude : 0),
				longitude: (this.props.residencia.longitude ? this.props.residencia.longitude : 0),
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			},
			butaoDesabilitado: true,
		};
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
	destrancaMarca(novaCordenada) {
		this.props.modificaLocalizacao({ latitude: novaCordenada.latitude, longitude: novaCordenada.longitude })
		this.setState({
			marcaFeita: true,
			cordenadaPonto: novaCordenada,
			region: {
				latitude: novaCordenada.latitude,
				longitude: novaCordenada.longitude,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			},
			butaoDesabilitado: false
		})
	}
	fazMarcaHome() {
		return (
			<Marker
				coordinate={this.props.residencia}
				image={imgHome}
			/>
		);
	}
	fazMarca() {
		if (this.state.marcaFeita) {
			return (
				<Marker
					coordinate={this.state.cordenadaPonto}
					image={imgNovoProblema}
				/>
			);
		}
	}
	pegaIcone(idTipo) {
		for (let i = 0; i < this.props.tiposDeProblemas.length; i++) {
			if (this.props.tiposDeProblemas[i].id == idTipo) {
				return { uri: this.props.tiposDeProblemas[i].icone }
			}
		}
	}
	render() {
		return (
			<View>
				<View style={styles.container}>
					<MapView
						showsUserLocation={true}
						showsMyLocationButton={false}
						provider={PROVIDER_GOOGLE} // remove if not using Google Maps
						style={styles.map}
						region={this.state.region}
						onPress={e => this.destrancaMarca(e.nativeEvent.coordinate)}
					>
						{this.props.problemas.map(problema => (
							<Marker
								onPress={() => {
									this.props.recuperaProblema(problema.id)
								}}
								image={this.pegaIcone(problema.tipoDeProblemaId)}
								coordinate={problema.localizacao}
							/>
						))}
						{this.fazMarcaHome()}
						{this.fazMarca()}
					</MapView>
				</View>
				<TouchableOpacity disabled={this.state.butaoDesabilitado} style={{ ...StyleSheet.absoluteFillObject, top: '80%', left: '76%' }} onPress={() => { Actions.TelaCadastroProblema() }}>
					<Image source={add} />
				</TouchableOpacity>
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
const mapStateToProps = state => (
	{
		residencia: state.UsuarioReducer.residencia,
		localizacao: state.ProblemaReducer.localizacao,
		problemas: state.ProblemaReducer.problemas,
		tiposDeProblemas: state.ProblemaReducer.tiposDeProblemas
	}
)
export default connect(mapStateToProps, { modificaLocalizacao, recuperaTodosOsProblemas, recuperaProblema, recuperaTiposDeProblemas })(TelaMapaInterna);