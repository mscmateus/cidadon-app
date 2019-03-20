import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker, TextInput, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { modificaEdiTipoDeProblemaId, modificaEdiDescricao, modificaEdiLocalizacao, recuperaTiposDeProblemas, editaDadosDoProblema } from '../actions/ProblemaActions'

const imgNovoProblema = require('../imagens/pngs/novoProblema.png');

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
				image={imgNovoProblema}
			/>
		);
	}
	_edicaoDeProblema() {
		const {autorId,id, ediTipoDeProblemaId, ediDescricao, ediDataCriacao, ediLocalizacao} = this.props
		this.props.editaDadosDoProblema({autorId,id, ediTipoDeProblemaId, ediDescricao, ediDataCriacao, ediLocalizacao})
	}
	render() {
		return (
			<View>
				<View>
					<View style={styles.conteiner}>
						<MapView
							provider={PROVIDER_GOOGLE}
							style={styles.map}
							region={this.state.region}
							onPress={e => this.destrancaMarca(e.nativeEvent.coordinate)}
						>
							{this.fazmarca()}
						</MapView>
					</View>
					<View style={{ alignItems: 'center', marginTop: 15, fontSize: 20 }}>
						<Text style={{ fontSize: 20 }}>Tipo de problema:</Text>
						<Picker
							selectedValue ={this.state.tipoDeProblemaSelecionado}
							onValueChange={(itemValue, itemIndex) => {
								this.setState({ tipoDeProblemaSelecionado: itemValue})
								this.props.modificaEdiTipoDeProblemaId(itemValue)
							}}
							style={{ height: 50, width: 200 }}
						>
							{this.props.tiposDeProblemas.map(tipoDeProblema => (
								<Picker.Item
									label={tipoDeProblema.titulo}
									value={tipoDeProblema.id}
								/>
							))}
						</Picker>
						<Text style={{ fontSize: 20 }}>Descrição do tipo de problema</Text>
						<TextInput value={this.props.ediDescricao} maxLength={200} multiline={true} style={styles.entrada} placeholder="descrição do problema" onChangeText={(texto) => { this.props.modificaEdiDescricao(texto) }} />
						<TouchableOpacity style={styles.btn} onPress={() => {this._edicaoDeProblema()}}>
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