import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker, TextInput, ScrollView, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { modificaEdiTipoDeProblemaId, modificaEdiDescricao, modificaEdiLocalizacao, recuperaTiposDeProblemas, editaDadosDoProblema } from '../actions/ProblemaActions'

import { styles, colors } from '../layout'
import Botao from '../../componentes/Botao'
import { Actions } from 'react-native-router-flux';

class TelaEdicaoProblema extends React.Component {
	constructor(props) {
		super(props);
		this.props.recuperaTiposDeProblemas()
		this.state = {
			marcaFeita: false,
			cordenada: {
				latitude: this.props.ediLocalizacao.latitude,
				longitude: this.props.ediLocalizacao.longitude
			},
			region: {
				latitude: this.props.ediLocalizacao.latitude,
				longitude: this.props.ediLocalizacao.longitude,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			},
			imagem: {uri: this.props.tiposDeProblemas[0].icone},
			tipoDeProblemaSelecionado: this.props.ediTipoDeProblemaId
		}
	}
	destrancaMarca(cordenada) {
		this.props.modificaEdiLocalizacao({ latitude: cordenada.latitude, longitude: cordenada.longitude })
		this.setState({
			cordenada: cordenada,
			region: {
				latitude: cordenada.latitude,
				longitude: cordenada.longitude,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			},
		});
	}
	fazmarca() {
		return (
			<Marker
				coordinate={this.state.cordenada}
			>
				<View><Image source={this.state.imagem} style={{width: 35, height: 35}} /></View>
			</Marker>
		);
	}
	_edicaoDeProblema() {
		const {autorId,id, ediTipoDeProblemaId, ediDescricao, ediDataCriacao, ediLocalizacao} = this.props
		Actions.TelaCarregamento()
		this.props.editaDadosDoProblema({autorId,id, ediTipoDeProblemaId, ediDescricao, ediDataCriacao, ediLocalizacao})
	}
	render() {
		return (
			<View>
				<View>
					<View style={{height: '25%',width: '100%'}}>
						<MapView
							provider={PROVIDER_GOOGLE}
							style={{height: '100%',width: '100%'}}
							region={this.state.region}
							onPress={e => this.destrancaMarca(e.nativeEvent.coordinate)}>
							{this.fazmarca()}
						</MapView>
					</View>
					<View style={{ alignItems: 'center', marginTop: 15, fontSize: 20 }}>
						<Text style={{ fontSize: 20 }}>Tipo de problema:</Text>
						<Picker
							selectedValue ={this.state.tipoDeProblemaSelecionado}
							onValueChange={(itemValue, itemIndex) => {
								this.setState({ tipoDeProblemaSelecionado: itemValue, imagem: {uri: this.props.tiposDeProblemas[itemIndex].icone}})
								this.props.modificaEdiTipoDeProblemaId(itemValue)
							}}
							style={{ height: 50, width: 200 }}>
							{this.props.tiposDeProblemas.map(tipoDeProblema => (
								<Picker.Item
									label={tipoDeProblema.titulo}
									value={tipoDeProblema.id}
								/>
							))}
						</Picker>
						<Text style={{ fontSize: 20 }}>Descrição do tipo de problema</Text>
						<TextInput value={this.props.ediDescricao} maxLength={200} multiline={true} style={styles.textArea} placeholder="descrição do problema" onChangeText={(texto) => { this.props.modificaEdiDescricao(texto) }} />
						<Botao texto='Confirmar' onPress={() => { this._edicaoDeProblema() }} />
					</View>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => (
	{
		ediTipoDeProblemaId: state.ProblemaReducer.ediTipoDeProblemaId,
		ediDescricao: state.ProblemaReducer.ediDescricao,
		ediDataCriacao: state.ProblemaReducer.ediDataCriacao,
		ediLocalizacao: state.ProblemaReducer.ediLocalizacao,
		tiposDeProblemas: state.ProblemaReducer.tiposDeProblemas,

		autorId: state.ProblemaReducer.autorId,
		id: state.ProblemaReducer.id
	}
)
export default connect(mapStateToProps, {
	modificaEdiTipoDeProblemaId,
	modificaEdiDescricao,
	modificaEdiLocalizacao,
	recuperaTiposDeProblemas,
	editaDadosDoProblema
})(TelaEdicaoProblema);