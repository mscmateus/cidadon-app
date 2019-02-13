import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BarraNavegacao from '../components/BarraNavegacao';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaLocalizacao, recuperaTodosOsProblemas, recuperaProblema, recuperaTiposDeProblemas } from '../actions/ProblemaActions'

const add = require('../imagens/pngs/addProblema.png');
const imgNovoProblema = require('../imagens/pngs/novoProblema.png');


class TelaMapaExterna extends React.Component {
	constructor(props) {
		super(props);
		this.props.recuperaTiposDeProblemas()
		this.props.recuperaTodosOsProblemas()
		this.state = {
			marcaFeita: false,
			cordenadaPonto: { latitude: null, longitude: null },
			region: {
				latitude: 0,
				longitude: 0,
				latitudeDelta: 12,
				longitudeDelta: 12,
			},
			butaoDesabilitado: true
		};
	}
	componentWillMount() {
		navigator.geolocation.getCurrentPosition(
			position => {
				//const location = JSON.stringify(position);
				this.setState({
					region: {
						latitude: position["coords"]["latitude"],
						longitude: position["coords"]["longitude"],
						latitudeDelta: 0.01,
						longitudeDelta: 0.01,
					}
				})

			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
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
				<BarraNavegacao estado={2} voltarKey='TelaLogin' />
				<View style={styles.container}>
					<MapView
						showsUserLocation={true}
						showsMyLocationButton={true}
						provider={PROVIDER_GOOGLE} // remove if not using Google Maps
						style={styles.map}
						region={this.state.region}
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
					</MapView>
				</View>
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
		localizacao: state.ProblemaReducer.localizacao,
		problemas: state.ProblemaReducer.problemas,
		tiposDeProblemas: state.ProblemaReducer.tiposDeProblemas
	}
)
export default connect(mapStateToProps, { modificaLocalizacao, recuperaTodosOsProblemas, recuperaProblema, recuperaTiposDeProblemas })(TelaMapaExterna);