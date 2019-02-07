import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker,TextInput, ScrollView} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BarraNavegacao from '../components/BarraNavegacao';
import { connect } from 'react-redux';
import {modificaTipoDeProblemaId, modificaDescricao, modificaDataCriacao, modificaLocalizacao, inclusaoProblema} from '../actions/ProblemaActions'

const imgHome = require('../imagens/pngs/home.png');

const imgNovoProblema = require('../imagens/pngs/novoProblema.png');
const tiposDeProblemas = ['Vias prublicas','Rede de Esgoto']
function caregaProblemas(){
	for (var i=0; i<tiposDeProblemas.length;i++) {
		retorno(tiposDeProblemas[i])
	}
}
const retorno = (tipodeproblema) => {
	return(
		<Picker.Item style={{fontSize: 20 }} label= {tipodeproblema} value= {tipodeproblema} />
	)
}
class TelaCadastroProblema extends React.Component {
	constructor(props) {
		super(props);
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
		}
	}
	destrancaMarca(cordenada) {
		this.props.modificaLocalizacao({latitude: cordenada.latitude, longitude: cordenada.longitude})
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
					image={imgHome}
				/>
			);
	}
	_inclusaoDeProblema(){
		now = new Date
		this.props.modificaDataCriacao(now.getDay()+'/'+now.getMonth()+'/'+now.getFullYear())
		const {descricao, tipoDeProblemaId, dataCriacao, localizacao} = this.props
		this.props.inclusaoProblema({descricao, tipoDeProblemaId, dataCriacao, localizacao})
	}
	render() {
		return (
			<View>
				<View>
					<BarraNavegacao estado={2} voltarKey="TelaMapaInterna" />
				</View>
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
						<Text style={{fontSize: 20 }}>Tipo de problema:</Text>
						<Picker
							onValueChange={(texto)=>{this.props.modificaTipoDeProblemaId(texto)}}
							selectedValue={1}
							style={{ height: 50, width: 200 }}>
							{caregaProblemas()}
						</Picker>
						<Text style={{fontSize: 20 }}>Descrição do tipo de problema</Text>
						<TextInput value={this.props.descricao} maxLength={200}  multiline={true} style={styles.entrada} placeholder="descrição do problema" onChangeText={(texto)=>{this.props.modificaDescricao(texto)}}/>

						<TouchableOpacity style={styles.btn} onPress={() =>{this._inclusaoDeProblema()}}>
							<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Inserir problema</Text>
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
		residencia: state.AutenticacaoReducer.residencia,
		tipoDeProblemaId: state.ProblemaReducer.tipoDeProblemaId,
		descricao: state.ProblemaReducer.descricao,
   		dataCriacao: state.ProblemaReducer.dataCriacao,
		localizacao: state.ProblemaReducer.localizacao

	}
)
export default connect(mapStateToProps, {
	modificaTipoDeProblemaId,
	modificaDescricao,
	modificaDataCriacao,
	modificaLocalizacao,
	inclusaoProblema
})(TelaCadastroProblema);