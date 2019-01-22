import React from 'react';
import { ScrollView, StyleSheet, Text, View, Picker } from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';

export default class TelaLogin extends React.Component {
	render() {
		return (
			<ScrollView>
				<View>
					<BarraNavegacao estado={2} voltarKey="TelaMapaExterna" />
				</View>
				<View style={{ padding: 20, alignItems: 'center', marginTop: 15, fontSize: 20 }}>
					<Text style={{fontSize: 20}}>Filtros</Text>
                    <Text style={{fontSize: 20}}>Filtrar por tipo de problema:</Text>
                    <Picker
						selectedValue={1}
						style={{ height: 50, width: 200 }}>
					</Picker>
				</View>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	formularioLogin: {
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btn: {
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		marginTop: 20,
		height: 60,
		width: 150,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1d9a78',
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
		height: 45,
		width: 250
	}
});
