import {StyleSheet} from 'react-native';
export const colors = {
	verde: '#1d9a78',
	preto: '#000000',
	branco: '#FFFFFF'
}
export const styles = StyleSheet.create({
    botao: {
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		marginTop: 20,
		height: 60,
		width: 150,
		justifyContent: 'center',
		alignItems: 'center',
        backgroundColor: colors.verde
    },
    textInput: {
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
		height: 45,
		width: 250
	},
	textoPadrao: {
		fontSize: 20,
		color: '#000000'
	},
	textoBotao: {
		fontSize: 20,
		color: '#FFFFFF'
	},
	conteinerMenu: {
		justifyContent: 'center',
		borderTopWidth: 1,
		borderColor: '#FFFFFF',
		marginTop: 20
	},
	componenteMenu: {
		justifyContent: 'center',
		marginLeft: 30,
		marginTop: 20
	}
});