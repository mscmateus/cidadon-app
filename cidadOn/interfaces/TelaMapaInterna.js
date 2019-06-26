import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Alert } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaLocalizacao, recuperaTodosOsProblemas, recuperaProblema, recuperaTiposDeProblemas } from '../actions/ProblemaActions'
import BotaoLocalizacao from '../components/BotaoLocalizacao'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../layout'
import {mapStyle} from '../components/map'

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
				latitude: (this.props.residencia.latitude ? this.props.residencia.latitude : -14.235004),
				longitude: (this.props.residencia.longitude ? this.props.residencia.longitude : -51.92528),
				latitudeDelta: (this.props.residencia.longitude ? 0.01 : 50),
				longitudeDelta: (this.props.residencia.longitude ? 0.01 : 50),
			},
			butaoDesabilitado: true,
		};
		this.geolocalizar()
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
				>
				<View><Image source={imgHome} style={{width: 35, height: 35}} /></View>
			</Marker>
		);
	}
	fazMarca() {
		if (this.state.marcaFeita) {
			return (
				<Marker
					coordinate={this.state.cordenadaPonto}
					>
					<View><Image source={imgNovoProblema} style={{width: 55, height: 35}} /></View>
				</Marker>
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
						showsMyLocationButton={false}
						showsUserLocation={true}
						provider={PROVIDER_GOOGLE} // remove if not using Google Maps
						style={styles.map}
						//customMapStyle={mapStyle}
						region={this.state.region}
						onPress={e => this.destrancaMarca(e.nativeEvent.coordinate)}
					>
						{this.props.problemas.map(problema => (
							<Marker
								onPress={() => {
									this.props.recuperaProblema(problema.id)
								}}
								coordinate={problema.localizacao}
							>
								<View><Image source={this.pegaIcone(problema.tipoDeProblemaId)} style={{width: 35, height: 35}} /></View>
							</Marker>
						))}
						{this.fazMarcaHome()}
						{this.fazMarca()}
					</MapView>
					<BotaoLocalizacao onPress={() => { this.geolocalizar() }} />
				</View>
				<TouchableOpacity
					style={{
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
					}}
					onPress={() => {
						this.state.butaoDesabilitado ? Alert.alert("Antes de criar um problema insira no mapa a possição dele") : Actions.TelaCadastroProblema();
					}}>
					<AntDesign name="pluscircle" size={75} color={colors.verde} />
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