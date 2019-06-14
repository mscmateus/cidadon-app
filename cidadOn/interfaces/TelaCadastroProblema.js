import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker, TextInput, ScrollView, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { modificaTipoDeProblemaId, modificaDescricao, modificaDataCriacao, modificaLocalizacao, inclusaoProblema, recuperaTiposDeProblemas, limpaDadosExetoLocalizacao } from '../actions/ProblemaActions'

import { styles, colors } from '../layout'
import Botao from '../components/Botao'
import {mapStyle} from '../components/map'
import Separador from '../components/Separador';
import { Actions } from 'react-native-router-flux';

const imgNovoProblema = require('../imagens/pngs/novoProblema.png');

class TelaCadastroProblema extends React.Component {
	constructor(props) {
		super(props);
		this.props.recuperaTiposDeProblemas()
		this.props.limpaDadosExetoLocalizacao()
		now = new Date
		this.props.modificaDataCriacao(now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear())
		this.state = {
			marcaFeita: false,
			cordenada: {
				latitude: this.props.localizacao.latitude,
				longitude: this.props.localizacao.longitude
			},
			region: {
				latitude: this.props.localizacao.latitude,
				longitude: this.props.localizacao.longitude,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			},
			imagem: {uri: this.props.tiposDeProblemas[0].icone},
			tipoDeProblemaSelecionado: this.props.tiposDeProblemas[0].id
		}
		this.props.modificaTipoDeProblemaId(this.props.tiposDeProblemas[0].id)
	}
	_inclusaoDeProblema() {
		if(this.props.descricao!=''){
			Actions.TelaCarregamento();
			const { descricao, tipoDeProblemaId, dataCriacao, localizacao } = this.props
			this.props.inclusaoProblema({ descricao, tipoDeProblemaId, dataCriacao, localizacao })
		}else{
			alert('Escreva uma descrição do problema, isso ajudará na identificação dele.')
		}
	}
	render() {
		return (
			<ScrollView style={{backgroundColor: colors.branco}}>
					<View style={{ alignItems: 'center', marginTop: 15, fontSize: 20 }}>
						<Image
							style={{ height: 100, width: 100 }}
							source={this.state.imagem} />
						<Text style={{ fontSize: 20, color: colors.preto }}>Tipo de problema:</Text>
						<Picker
							selectedValue ={this.state.tipoDeProblemaSelecionado}
							onValueChange={(itemValue, itemIndex) => {
								this.setState({ tipoDeProblemaSelecionado: itemValue})
								this.props.modificaTipoDeProblemaId(itemValue)
								this.setState({imagem: {uri: this.props.tiposDeProblemas[itemIndex].icone}})
							}}
							style={{ height: 60, width: 200, color: colors.preto }}
						>
							{this.props.tiposDeProblemas.map(tipoDeProblema => (
								<Picker.Item
									label={tipoDeProblema.titulo}
									value={tipoDeProblema.id}
								/>
							))}
						</Picker>
						<Text style={{ fontSize: 20, color: colors.preto }}>Descreva o problema:</Text>
						<TextInput value={this.props.descricao} maxLength={200} multiline={true} style={styles.textArea} placeholder="descrição do problema" onChangeText={(texto) => { this.props.modificaDescricao(texto) }} />
						<Botao texto='Inserir problema' onPress={() => { this._inclusaoDeProblema() }} />
					</View>
			</ScrollView>
		);
	}
}
const mapStateToProps = state => (
	{
		residencia: state.UsuarioReducer.residencia,
		tipoDeProblemaId: state.ProblemaReducer.tipoDeProblemaId,
		descricao: state.ProblemaReducer.descricao,
		dataCriacao: state.ProblemaReducer.dataCriacao,
		localizacao: state.ProblemaReducer.localizacao,
		tiposDeProblemas: state.ProblemaReducer.tiposDeProblemas
	}
)
export default connect(mapStateToProps, {
	modificaTipoDeProblemaId,
	modificaDescricao,
	modificaDataCriacao,
	modificaLocalizacao,
	inclusaoProblema,
	recuperaTiposDeProblemas,
	limpaDadosExetoLocalizacao
})(TelaCadastroProblema);