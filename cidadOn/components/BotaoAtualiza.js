import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../layout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//props: this.props.onPress
export default class BotaoAtualiza extends React.Component {
	render() {
		return (
			<TouchableOpacity style={{
				...StyleSheet.absoluteFillObject,
				top: '14%',
				left: '5%',
				width: 40,
				height: 40,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: colors.verde,
			}} onPress={() => { this.props.onPress() }}>
				<MaterialCommunityIcons name="refresh" size={25} color={colors.branco} />
			</TouchableOpacity>
		);
	}
}