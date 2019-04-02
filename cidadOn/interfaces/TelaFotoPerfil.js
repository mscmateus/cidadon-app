import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Modal, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { atualizaFotoPerfil, modificaEdiFoto } from '../actions/UsuarioActions'
import '@firebase/auth';
import { styles, colors } from '../layout'
import ImagePicker from 'react-native-image-picker';
import Separador from '../components/Separador'

const options = {
	title: '',
	cancelButtonTitle: 'cancelar',
	mediaType: 'photo',
	takePhotoButtonTitle: 'Tirar foto',
	chooseFromLibraryButtonTitle: 'Escolher foto existente',
	storageOptions: {
		skipBackup: true,
		path: 'images',
	},
};
class TelaFotoPerfil extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			modoEdi: false,
			fotoUri: this.props.ediFoto,
		}
	}
	getImagem() {
		ImagePicker.showImagePicker(options, (response) => {
			this.setState({ modoEdi: true })

			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				const source = { uri: response.uri };
				// You can also display the image using data:
				// const source = { uri: 'data:image/jpeg;base64,' + response.data };
				console.log("source = "+source)
				source.uri =! '' ? this.props.modificaEdiFoto(source): null ;
			}
		});
	}
	render() {
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#272822' }}>
				<Image
					style={{ height: Dimensions.get('screen').width, width: '100%', backgroundColor: colors.branco }}
					source={ this.state.modoEdi ? this.props.ediFoto : {uri: this.props.ediFoto} } />
				<View style={{
					...StyleSheet.absoluteFillObject,
					flex: 1,
					alignItems: 'center',
					justifyContent: 'flex-end',

				}}>
					<TouchableOpacity style={{
						borderTopRightRadius: 10,
						borderTopLeftRadius: 10,
						borderBottomRightRadius: 10,
						borderBottomLeftRadius: 10,
						
						borderBottomColor: colors.branco,
						borderTopColor: colors.branco,
						borderLeftColor: colors.branco,
						borderRightColor: colors.branco,
						
						borderBottomWidth: 1,
						borderTopWidth: 1,
						borderLeftWidth: 1,
						borderRightWidth: 1,
						
						marginBottom: 20,
						padding: 10,
						alignItems: 'center',
					}} onPress={() => {this.state.modoEdi ? this.props.atualizaFotoPerfil(this.props.ediFoto) : this.getImagem()  }}>
						<Text style={{ fontSize: 20, color: colors.branco }}>{this.state.modoEdi ? 'Confirmar' : 'Editar'}</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
const mapStateToProps = state => (
	{
		ediFoto: state.UsuarioReducer.ediFoto
	}
)
export default connect(mapStateToProps, {atualizaFotoPerfil, modificaEdiFoto})(TelaFotoPerfil);
