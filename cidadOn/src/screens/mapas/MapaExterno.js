import React from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { connect } from 'react-redux';

//Importações costumizadas
import {mapas} from '../../uteis/Estilos';
import {geolocalizar} from '../../biblioteca/Mapa';
import BotaoLocalizacao from '../../componentes/BotaoLocalizacao';

class MapaExterno extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			marcaFeita: false,
			cordenadaPonto: { latitude: null, longitude: null },
			region: {
				latitude: -14.235004,
				longitude: -51.92528,
				latitudeDelta: 50,
				longitudeDelta: 50,
			},
			butaoDesabilitado: true,

		};
	}
	componentWillMount(){

	}
	componentWillUnmount(){

	}
	render() {
		return (
			<View>
				<View
				style={mapas.mapaExibicaoContainer}>
					<MapView
					showsMyLocationButton={false}
					showsUserLocation={true}
					provider={PROVIDER_GOOGLE}
					style={mapas.mapaExibicao}
					region={this.state.region}
					onRegionChangeComplete={region=>(this.setState({region: region}))} >
						{this.state.problemas.map(problema => (
							<Marker
							onPress={() => {
								this.props.recuperaProblema(problema.id)
							}}
							coordinate={problema.localizacao}>
								<View>
									<Image
									//icone do problema
									source={this.pegaIcone(problema.tipoDeProblemaId)}
									style={{width: 35, height: 35}} />
								</View>
							</Marker>
						))}
					</MapView>
				</View>
				<BotaoLocalizacao 
				onPress={() => {
					this.setState({
						region: geolocalizar()
					})
				}}/>
			</View>
		);
	}
}
const mapStateToProps = state => (
	{
		
	}
)
export default connect(mapStateToProps, {})(MapaExterno);