import React from 'react';
import {View, Image, TouchableOpacity, Text, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import '@firebase/auth';
import "@firebase/database";

//Importações costumizadas
import BotaoLocalizacao from '../../componentes/BotaoLocalizacao';
import {cores} from '../../uteis/Cores';
import {mapas} from '../../uteis/Estilos';
import {geolocalizar} from '../../biblioteca/Mapa';

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
	componentWillMount(){

	}
	componentWillUnmount(){

	}
	destrancaMarca(novaCordenada) {
		this.props.modificaLocalizacao({ latitude: novaCordenada.latitude, longitude: novaCordenada.longitude })
		this.setState({
			marcaFeita: true,
			cordenadaPonto: novaCordenada,
			region: {
				latitude: novaCordenada.latitude,
				longitude: novaCordenada.longitude,
				latitudeDelta: this.state.region.latitudeDelta,
				longitudeDelta: this.state.region.longitudeDelta,
			},
			butaoDesabilitado: false
		})
	}
	fazMarcaHome() {
		return (
			<Marker
				coordinate={this.props.residencia}
			>
				<View><Image source={imgHome} style={{ width: 35, height: 35 }} /></View>
			</Marker>
		);
	}
	fazMarca() {
		if (this.state.marcaFeita) {
			return (
				<Marker
					coordinate={this.state.cordenadaPonto}
				>
					<View><Image source={imgNovoProblema} style={{ width: 55, height: 35 }} /></View>
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
					provider={PROVIDER_GOOGLE}
					style={mapas.mapaExibicao}
					region={this.state.region}
					onRegionChangeComplete={region=>(this.setState({region: region}))} 
					onPress={e => this.destrancaMarca(e.nativeEvent.coordinate)}>
						{this.props.problemas.map(problema => (
							<Marker
							onPress={() => {
								this.props.recuperaProblema(problema.id)
							}}
							coordinate={problema.localizacao}>
								<View>
									<Image
									source={this.pegaIcone(problema.tipoDeProblemaId)}
									style={{ width: 35, height: 35 }} />
								</View>
							</Marker>
						))}
						{this.fazMarcaHome()}
						{this.fazMarca()}
					</MapView>
					<BotaoLocalizacao
					onPress={() => { this.setState({regiao: geolocalizar()}) }} />
				</View>
				<TouchableOpacity
					style={}
					onPress={() => {
						this.state.butaoDesabilitado ? Alert.alert("Antes de criar um problema insira no mapa a possição dele") : Actions.TelaCadastroProblema();
					}}>
					<AntDesign name="pluscircle" size={75} color={cores.tema} />
				</TouchableOpacity>
			</View>
		);
	}
}
const mapStateToProps = state => (
	{
		problemaId: state.ProblemaReducer.id,
	}
)
export default connect(mapStateToProps, {  })(TelaMapaInterna);