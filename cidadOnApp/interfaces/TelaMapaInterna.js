import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BarraNavegacao from '../components/BarraNavegacao';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaLocalizacao, recuperaTodosOsProblemas, recuperaProblema } from '../actions/ProblemaActions'

const add = require('../imagens/pngs/addProblema.png');
const imgHome = require('../imagens/pngs/home.png');
const imgNovoProblema = require('../imagens/pngs/novoProblema.png');


class TelaMapaInterna extends React.Component {
	constructor(props) {
		super(props);
		this.props.recuperaTodosOsProblemas()
		this.state = {
			marcaFeita: false,
			cordenadaPonto: { latitude: null, longitude: null },
			region: {
				latitude: this.props.residencia.latitude,
				longitude: this.props.residencia.longitude,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			},
			butaoDesabilitado: true
		};
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
	render() {
		return (
			<View>
				<BarraNavegacao estado={1} opcaoKey='TelaGerenciaDeAcoes' filtroKey='TelaFiltroInterna' />
				<View style={styles.container}>
					<MapView
						provider={PROVIDER_GOOGLE} // remove if not using Google Maps
						style={styles.map}
						region={this.state.region}
						onPress={e => this.destrancaMarca(e.nativeEvent.coordinate)}
					>
						{this.props.problemas.map(marker => (
							<Marker
							    onPress={()=>{
									this.props.recuperaProblema(marker.id)
								}}
								coordinate={marker.localizacao}
							/>
						))}
						{this.fazMarcaHome()}
						{this.fazMarca()}
					</MapView>
				</View>
				<TouchableOpacity disabled={this.state.butaoDesabilitado} style={{ ...StyleSheet.absoluteFillObject, top: '77%', left: '76%' }} onPress={() => { Actions.TelaCadastroProblema() }}>
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
const mapStateToProps = state => (
	{
		residencia: state.AutenticacaoReducer.residencia,
		localizacao: state.ProblemaReducer.localizacao,
		problemas: state.ProblemaReducer.problemas
	}
)
export default connect(mapStateToProps, { modificaLocalizacao, recuperaTodosOsProblemas, recuperaProblema })(TelaMapaInterna);