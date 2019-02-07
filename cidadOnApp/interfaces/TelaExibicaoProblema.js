import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import TabBarExibicaoProblema from '../components/TabBarExibicaoProblema'
import ExibiInformacoes from '../components/ExibiInformacoes';
const Avaliacoes = () => (
	<View style={{ flex: 1 }} />
);
const Denuncias = () => (
	<View style={{ flex: 1 }} />
);

export default class TelaExibicaoProblema extends React.Component {
	state = {
		index: 0,
		routes: [
			{ key: '1', title: 'Informações do Problema' },
			{ key: '2', title: 'Avaliações' },
			{ key: '3', title: 'Denuncias' },
		],
	};
	render() {
		return (
			<TabView

				navigationState={this.state}
				renderTabBar={props => (<TabBarExibicaoProblema {...props} />)}
				renderScene={SceneMap({
					'1': ExibiInformacoes,
					'2': Avaliacoes,
					'3': Avaliacoes,
				})}
				onIndexChange={index => this.setState({ index })}
				initialLayout={{ width: Dimensions.get('window').width }}
			/>
		);
	}
}