import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import TabBarExibicaoProblemaExterna from '../components/TabBarExibicaoProblemaExterna'
import ExibiInformacoesExterna from '../components/ExibiInformacoesExterna';
import ExibeDenunciasExterna from '../components/ExibeDenunciasExterna';
import ExibeAvaliacoesExterna from '../components/ExibeAvaliacoesExterna';

export default class TelaExibicaoProblemaExterna extends React.Component {
	state = {
		index: 0,
		routes: [
			{ key: '1', title: 'Informações do Problema'},
			{ key: '2', title: 'Avaliações'},
			{ key: '3', title: 'Denúcias'}
		],
	};
	render() {
		return (
			<TabView
				navigationState={this.state}
				renderTabBar={props => (<TabBarExibicaoProblemaExterna {...props} />)}
				renderScene={SceneMap({
					'1': ExibiInformacoesExterna,
					'2': ExibeAvaliacoesExterna,
					'3': ExibeDenunciasExterna
				})}
				onIndexChange={index => this.setState({ index })}
				initialLayout={{ width: Dimensions.get('window').width }}
			/>
		);
	}
}