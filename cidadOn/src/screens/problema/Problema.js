import * as React from 'react';
import { Text, ScrollView, View, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import Stars from 'react-native-stars';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import "@firebase/database";


import Avaliacao from '../components/Avaliacao'
import { igualaDadosEdicaoProblema, excluirProblema, incluiAvaliacao, excluirAvaliacao, editarAvaliacao } from '../actions/ProblemaActions'
import { styles, colors } from '../layout'
import Botao from '../components/Botao'
import Separador from '../components/Separador';

const avaliacaoAtiva = require('../imagens/pngs/avalicaoAtiva.png');
const avaliacaoNeutro = require('../imagens/pngs/avalicaoNeutro.png');

class TelaExibicaoProblema extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            comentario: '',
				valorAvaliacao: 1,
        }
	}
	componentWillUnmount() {
		if(this.props.problemaId!=""){
			firebase.database().ref('problemas').child(this.props.problemaId).off();
		}
	}
	liberaAcoes() {
		if (this.props.idUsuarioAtual == this.props.autorId) {
			return (
				<View style={{ marginBottom: 10, alignItems: 'center' }}>
					<TouchableOpacity onPress={() => { this.props.igualaDadosEdicaoProblema(this.props.autorId) }}>
						<Text style={{ textDecorationLine: 'underline', fontSize: 20, color: colors.verde }}>editar esse problema</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {
						Alert.alert(
							'Confirmar exclusão',
							'Você relmente quer excluir esse problema?',
							[
							  {
								 text: 'Cancelar',
								 onPress: () => {},
								 style: 'cancel',
							  },
							  {text: 'Excluir', onPress: () => {this.props.excluirProblema(this.props.id, this.props.autorId)}},
							],
							{cancelable: false},
						 );

						 
						
						
					}}>
						<Text style={{ textDecorationLine: 'underline', fontSize: 20, color: colors.verde }}>excluir esse problema</Text>
					</TouchableOpacity>
				</View>
			)
		}
	}
	pegaIcone() {
		for (let i = 0; i < this.props.tiposDeProblemas.length; i++) {
			if (this.props.tiposDeProblemas[i].id == this.props.tipoDeProblemaId) {
				return { uri: this.props.tiposDeProblemas[i].icone }
			}
		}
	}
	_incluiAvaliacao() {
		this.props.incluiAvaliacao(this.props.problemaId, this.state.comentario, this.state.valorAvaliacao, this.props.nomeAutor)
	}
	//verifica se o usuario já tem uma avaliação
	avaliacaoUsuario() {
		achado = false;
		if (this.props.avaliacoes != null) {
			for (let i = 0; i < this.props.avaliacoes.length; i++) {
				if (this.props.avaliacoes[i].autorId == this.props.idUsuarioAtual) {
					achado = true
					return (
						<View>
							<Separador color={colors.branco} />
							<Text style={{ marginLeft: 20, fontSize: 20, marginTop: 15, marginBottom: 15, color: colors.branco }}>Sua avaliação:</Text>
							<Separador color={colors.branco} />
							<Avaliacao
								usuarioAtual={this.props.idUsuarioAtual}
								nomeAutor={this.props.avaliacoes[i].nomeAutor}
								onPressEditar={this.props.editarAvaliacao}
								onPressExcluir={this.props.excluirAvaliacao}
								comentarioAvaliacao={this.props.avaliacoes[i].comentario}
								avaliacaoID={this.props.avaliacoes[i].id}
								autorID={this.props.avaliacoes[i].autorId}
								problemaID={this.props.problemaId}
								valorAvaliacao={this.props.avaliacoes[i].gravidade}
							/>
						</View>
					)
				}
			}
			if (achado == false) {
				return (
					<View>
						<View style={{ padding: 20, alignItems: 'center' }}>
							<Text style={{ fontSize: 20, marginLeft: 20, marginTop: 10, marginBottom: 10, color: colors.branco }}>Esse problema é relevante para você?</Text>
							<Stars
								half={false}
								default={this.state.avaliacao}
								update={(val) => { this.setState({ valorAvaliacao: val }) }}
								spacing={4}
								starSize={50}
								count={5}
								fullStar={avaliacaoAtiva}
								emptyStar={avaliacaoNeutro}
							/>
							<Text style={{ fontSize: 20, color: '#FFFFFF' }}>Deixe um comentário:</Text>
							<TextInput maxLength={200} multiline={true} style={styles.textArea} placeholder="Comentário" onChangeText={(text) => { this.setState({ comentario: text }) }} />
							<Botao texto='Confirmar' onPress={() => { this._incluiAvaliacao() }} />
						</View>
						<Separador color={colors.branco} />
					</View>
				)
			}
		}
	}
	render() {
		return (
			<ScrollView>
				<View style={{ backgroundColor: colors.azulEscuro, paddingTop: 20,paddingLeft: 20, paddingRight: 20 }}>
						<Image
							style={{ height: 100, width: 100 }}
							source={this.pegaIcone()} />
							<Text style={{ fontSize: 30, color: colors.branco }}>Problema de {this.props.tituloProblema}</Text>
							<Text style={{ fontSize: 15, color: colors.verde }}><Text style={{ color: colors.branco }}>Autor: </Text>{this.props.nomeAutorProblema}</Text>
					<Text style={{ marginTop: 10, marginBottom: 10, fontSize: 15, color: colors.cinzaFraco }}>Criado em {this.props.dataCriacao}</Text>
					{this.liberaAcoes()}
				</View>
				{/* ================Descrção ================================= */}
				<View style={{ paddingTop: 15, paddingBottom: 15, justifyContent: 'center', backgroundColor: colors.cinzaFraco }}>
					<Text style={{ marginLeft: 20, fontSize: 20, color: colors.preto, fontWeight: 'bold' }}>Descrição</Text>
				</View>
				<View style={{ backgroundColor: colors.azulEscuro, padding: 20, alignItems: "center" }}>
					<Text style={{ fontSize: 20, color: colors.branco }}>{this.props.descricao}</Text>
				</View>
				{/*======================Avaliação============================*/}
				<View style={{ paddingTop: 15, paddingBottom: 15, justifyContent: 'center', backgroundColor: colors.cinzaFraco }}>
					<Text style={{ marginLeft: 20, fontSize: 20, color: colors.preto, fontWeight: 'bold' }}>Avaliações</Text>
				</View>
				<View style={{ backgroundColor: colors.azulEscuro }}>
					{/* ===================== Fazer avaliação ======================== */}
					{this.avaliacaoUsuario()}
					{/*lista das valiações de problema, exeto a do usuario atual */}
					<View>
						<Separador color={colors.branco} />
						<Text style={{ marginLeft: 20, fontSize: 20, marginTop: 15, marginBottom: 15, color: colors.branco }}>Outras avaliações</Text>
						<Separador color={colors.branco} />
					</View>
					{
						this.props.avaliacoes != null ? this.props.avaliacoes.map(avaliacao => (
							avaliacao.autorId != this.props.idUsuarioAtual ?
								<View>
									<Avaliacao
										usuarioAtual={this.props.idUsuarioAtual}
										nomeAutor={avaliacao.nomeAutor}
										onPressEditar={this.props.editarAvaliacao}
										onPressExcluir={this.props.excluirAvaliacao}
										comentarioAvaliacao={avaliacao.comentario}
										avaliacaoID={avaliacao.id}
										autorID={avaliacao.autorId}
										problemaID={this.props.problemaId}
										valorAvaliacao={avaliacao.gravidade}
									/>
									<Separador color={colors.branco} />
								</View> : null
						)) : <Text style={{ alignItems: 'center', fontSize: 20, marginTop: 15, marginBottom: 15, color: colors.branco }} >Sem avaliação</Text>
					}
				</View>
			</ScrollView>
		);
	}
}
const mapStateToProps = state => (
	{
		idUsuarioAtual: state.UsuarioReducer.id,
		id: state.ProblemaReducer.id,
		autorId: state.ProblemaReducer.autorId,
		tipoDeProblemaId: state.ProblemaReducer.tipoDeProblemaId,
		descricao: state.ProblemaReducer.descricao,
		dataCriacao: state.ProblemaReducer.dataCriacao,
		localizacao: state.ProblemaReducer.localizacao,
		nomeAutorProblema: state.ProblemaReducer.nomeAutor,
		tituloProblema: state.ProblemaReducer.tituloTipoProblema,
		//avaliação=
		nomeAutor: state.UsuarioReducer.nomeUsuario,
		problemaId: state.ProblemaReducer.id,
		avaliacoes: state.ProblemaReducer.avaliacoes,
		tiposDeProblemas: state.ProblemaReducer.tiposDeProblemas
	}
)
export default connect(mapStateToProps, { igualaDadosEdicaoProblema, excluirProblema, incluiAvaliacao, excluirAvaliacao, editarAvaliacao })(TelaExibicaoProblema);