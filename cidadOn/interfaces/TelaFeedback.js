import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,ScrollView, Picker } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Botao from '../components/Botao'
import {
	
} from '../actions/UsuarioActions'
import { connect } from 'react-redux';
import {colors} from '../layout'

class TelaFeedBack extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {operacao: ''};
	}
	render() {
		return (
			
			<ScrollView>
			<View>
				<View>
					<View style={{marginVertical: 30, alignItems: 'center', justifyContent: 'center' }}>
						<Text style={{ fontSize: 30, textAlign: 'center', color: colors.preto } } >Nos ajude a melhorar o cidadon!</Text></View>
					</View>
					<View style={{ alignItems: 'center', justifyContent: 'center'}}>
						<Text style={{ fontSize: 20, marginHorizontal: 30,color: colors.preto }} > Tipo de Feedback:</Text>
						<Picker style={{ marginBottom: 5, fontSize: 100 , width: 150, justifyContent: 'center', alignItems: 'center', flex: 1, marginHorizontal: 150   }}
						selectedValue ={this.state.operacao}
						onValueChange= {op => {this.setState({ operacao : op});}}
						>
							<Picker.Item  label="Comentário" value="comentario" />
							<Picker.Item  label="Erro" value="erro" />
						</Picker>
					</View>
					<View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ fontSize: 20, color: colors.preto }}>Descrição</Text>
						
						<TextInput value={this.props.descricao} maxLength={200} multiline={true}  style={styles.entrada} placeholder="descrição" onChangeText={texto => this.props.modificaDescricao(texto)} />
					<View style={styles.botao}>
						<Botao  texto='Confirmar'  onPress={() => {  }} />
					</View>
				</View>
			</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	conteiner: {
		height: '70%',
		width: '100%',
	},
	botao: {
		flexDirection: 'row',
		marginTop: 20,
		justifyContent: 'center',
		
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
	
	}
)

export default connect(mapStateToProps, {
	
})(TelaFeedBack)