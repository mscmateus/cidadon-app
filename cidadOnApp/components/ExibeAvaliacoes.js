import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import { incluiAvaliacao, excluirAvaliacao, editarAvaliacao } from '../actions/ProblemaActions'
import { connect } from 'react-redux';
import Avaliacao from './Avaliacao';
import Stars from 'react-native-stars';


const avaliacaoAtiva = require('../imagens/pngs/avalicaoAtiva.png');
const avaliacaoNeutro = require('../imagens/pngs/avalicaoNeutro.png');

class ExibeAvaliacoes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comentario: '',
            valorAvaliacao: '',
            modalVisible: false
        }
    }
    _incluiAvaliacao() {
        this.props.incluiAvaliacao(this.props.problemaId, this.state.comentario, this.state.valorAvaliacao , this.props.nomeAutor)
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 50, marginTop: 15, marginBottom: 15 }}>Avaliações</Text>
                <Text style={{ fontSize: 25, marginTop: 15, marginBottom: 15 }}>Você gostaria de avaliar esse problema?</Text>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ padding: 20, backgroundColor: '#1d9a78' }}>
                        <Text style={{ fontSize: 20, color: '#FFFFFF' }}>O quão grave esse problema é pra você?</Text>
                        <Stars
                            half={false}
                            default={0}
                            update={(val) => { this.setState({ valorAvaliacao: val }) }}
                            spacing={4}
                            starSize={50}
                            count={5}
                            fullStar={avaliacaoAtiva}
                            emptyStar={avaliacaoNeutro}
                            />
                        <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Deixe um comentário:</Text>
                        <TextInput maxLength={200} multiline={true} style={styles.entrada} placeholder="Comentário" onChangeText={(text) => { this.setState({ comentario: text }) }} />
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => { this._incluiAvaliacao() }} >
                        <Text style={{ fontSize: 20, color: '#FFFFFF', }}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 25, marginTop: 15, marginBottom: 15 }}>Avaliacoes desse problema:</Text>
                {
                    this.props.avaliacoes != null ? this.props.avaliacoes.map(avaliacao => (
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
                    )) : null
                }
            </ScrollView >
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        height: 60,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d9a78',
        marginTop: 20
    },
    conteiner: {
        height: '25%',
        width: '100%',
    },
    map: {
        height: '100%',
        width: '100%',
    },
    entrada: {
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        padding: 10,
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
        height: 100,
    }
});
const mapStateToProps = state => (
    {
        idUsuarioAtual: state.AutenticacaoReducer.id,
        nomeAutor: state.AutenticacaoReducer.nomeUsuario,
        problemaId: state.ProblemaReducer.id,
        avaliacoes: state.ProblemaReducer.avaliacoes
    }
)
export default connect(mapStateToProps, { incluiAvaliacao, excluirAvaliacao, editarAvaliacao })(ExibeAvaliacoes);