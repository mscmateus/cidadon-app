import React from 'react';
import {View} from 'react-native';
import { connect } from 'react-redux';
import { autologin } from '../actions/UsuarioActions'
import '@firebase/auth';

class TelaCarregaInicio extends React.Component {
	_autologin() {
		this.props.autologin()
	}
	render() {
		return (
				<View>
					{this._autologin()}
				</View>
		);
	}
}
const mapStateToProps = state => (
	{
	}
)
export default connect(mapStateToProps, {autologin})(TelaCarregaInicio);
