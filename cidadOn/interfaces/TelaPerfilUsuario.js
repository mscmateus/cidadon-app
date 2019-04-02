import React from 'react';
import { ScrollView, Text, Alert, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
//meus imports
import { styles, colors } from '../layout';
import { iniciaEdicaoFoto } from '../actions/UsuarioActions'
import Botao from '../components/Botao'
import Separador from '../components/Separador'
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

class TelaPerfilUsuario extends React.Component {
	render() {
		return (
			<ScrollView>
				<View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: colors.verde, height: 205 }} />
				<View style={{ paddingTop: 100, padding: 30, paddingBottom: 30, alignItems: 'center', justifyContent: 'center' }}>
					<TouchableOpacity style={styles.fotoUsuario} onPress={()=>{this.props.iniciaEdicaoFoto()}}>
						<Image
							style={{height: '100%', width: '100%', backgroundColor: colors.branco,
							borderTopRightRadius: 100,
							borderTopLeftRadius: 100,
							borderBottomRightRadius: 100,
							borderBottomLeftRadius: 100,}}
							source={{ uri: this.props.foto }} />
					</TouchableOpacity>
					<Text style={{ fontSize: 30, marginTop: 10, color: colors.preto }}>{this.props.nomeUsuario}</Text>
					<Text style={{ fontSize: 30, color: colors.preto }}>{this.props.nome + ' ' + this.props.sobrenome}</Text>
					<View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 20, paddingLeft: 40, paddingRight: 40 }}>
						<Text style={{ fontSize: 15, color: colors.preto, textAlign: 'left' }}>Biografia</Text>
						<Text style={{ fontSize: 20, color: colors.preto }}>Oi. Meu nome é Bettina, eu tenho 22 anos e um milhão e 42 mil reais de patrimônio acumulado</Text>
					</View>
				</View >
				<Separador color={colors.branco} />
				<View style={{ paddingTop: 20, padding: 30, paddingBottom: 30, backgroundColor: colors.verde, flex: 1 }}>
					<Text style={{ fontSize: 30, color: colors.branco }}><Octicons name="graph" size={30} color={colors.branco} /> Estatísticas do usuário</Text>
					<View style={{ flexDirection: 'column', alignItems: 'center' }}>
						<View style={{ alignItems: 'center', paddingTop: 20 }}>
							<Text style={{ fontSize: 60, color: colors.branco }}><MaterialIcons name="add-location" size={70} color={colors.branco} /> 500</Text>
							<Text style={{ fontSize: 20, color: colors.branco }}>Problemas Criados</Text>
						</View>
						<View style={{ alignItems: 'center', paddingTop: 20 }}>
							<Text style={{ fontSize: 60, color: colors.branco }}><AntDesign name="checkcircle" size={50} color={colors.branco} /> 250</Text>
							<Text style={{ fontSize: 20, color: colors.branco }}>Problemas resolvidos</Text>
						</View>
					</View>
				</View>
			</ScrollView >
		);
	}
}
const mapStateToProps = state => (
	{
		nome: state.UsuarioReducer.nome,
		sobrenome: state.UsuarioReducer.sobrenome,
		email: state.UsuarioReducer.email,
		nomeUsuario: state.UsuarioReducer.nomeUsuario,
		foto: state.UsuarioReducer.foto,
	}
)
export default connect(mapStateToProps, {iniciaEdicaoFoto})(TelaPerfilUsuario);
