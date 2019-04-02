import React from 'react';
import { View, Text, TouchableHighlight, Modal, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { autologin } from '../actions/UsuarioActions'
import '@firebase/auth';
import ImagePicker from 'react-native-image-picker';
import Separador from '../components/Separador'
import Opcao from '../components/Opcao';
import { styles, colors } from '../layout';

//props: visible
class SeletorImagem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			avatarSource: '',
			visibilidade: this.props.visible
		}
	}
	getImagem() {
		ImagePicker.launchCamera(options, (response) => {

		  });
		  
	}
	
	render() {
		return (
			<Modal
				animationType="slide"
				transparent={true}
				visible={this.state.visibilidade}>
				<View style={{ backgroundColor: colors.verde, height: 100, width: 250 }}>
					<TouchableHighlight underlayColor={colors.cinzaFraco} style={styles.opcao} onPress={() => { }}>
						<Text style={styles.textoOpcao}>Tirar foto</Text>
					</TouchableHighlight>
					<Separador color={colors.branco} />
					<TouchableHighlight underlayColor={colors.cinzaFraco} style={styles.opcao} onPress={() => { }}>
						<Text style={styles.textoOpcao}>Escolher foto existente</Text>
					</TouchableHighlight>
				</View>
			</Modal>
		);
	}
}
const mapStateToProps = state => (
	{
		
	}
)
export default connect(mapStateToProps, { autologin })(SeletorImagem);
