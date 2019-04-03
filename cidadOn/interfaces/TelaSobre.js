import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Botao from '../components/Botao'
import { colors } from '../layout'
import {
	
} from '../actions/UsuarioActions'
import { connect } from 'react-redux';

class TelaSobre extends React.Component {
	
	render() {
		return (
			
			<ScrollView>
				<View  style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
					<View style={{marginHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}  >
						<Text style={{fontSize: 25}}>O CidadOn é uma plataforma </Text>
						<Text style={{fontSize: 25}}>colaborativa que tem o objetivo</Text>
						<Text style={{fontSize: 25}}>de registrar problemas</Text>
						<Text style={{fontSize: 25}}>estruturais nas regiões</Text>
						<Text style={{fontSize: 25}}>metropolitanas através de </Text>
						<Text style={{fontSize: 25}}>um aplicativo mobile</Text>
					</View>
					<View style={{marginTop: 25 , marginHorizontal: 20}}>
						<Text style={{fontSize: 35}}>Disponivel para: </Text>
						<Text style={{fontSize: 25}}>Android</Text>
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
	},
});

const mapStateToProps = state => (
	{
	
	}
)

export default connect(mapStateToProps, {
	
})(TelaSobre)