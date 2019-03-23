import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { autologin } from '../actions/UsuarioActions'
import '@firebase/auth';
import { colors } from '../layout'
import {
	BallIndicator,
	BarIndicator,
	DotIndicator,
	MaterialIndicator,
	PacmanIndicator,
	PulseIndicator,
	SkypeIndicator,
	UIActivityIndicator,
	WaveIndicator,
} from 'react-native-indicators';

class TelaCarregaInicio extends React.Component {
	_autologin() {
		this.props.autologin()
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: colors.verde, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{ top: '40%', fontSize: 60, color: colors.branco }}>CidadOn</Text>
				<DotIndicator style={{top: '60%'}} color={colors.branco} />
				{this.props.autologin()}
			</View>
		);
	}
}
const mapStateToProps = state => (
	{
	}
)
export default connect(mapStateToProps, { autologin })(TelaCarregaInicio);
