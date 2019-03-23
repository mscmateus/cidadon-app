import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../layout';
import Icon from 'react-native-vector-icons/MaterialIcons';
//props: this.props.onPress
export default class BotaoLocalizacao extends React.Component {
	render() {
		return (
			<TouchableOpacity style={{
				...StyleSheet.absoluteFillObject,
				top: '5%',
				left: '5%',
				width: 40,
				height: 40,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: colors.verde,
			}} onPress={() => { this.props.onPress() }}>
				<Icon name="my-location" size={25} color={colors.branco} />
			</TouchableOpacity>
		);
	}
}