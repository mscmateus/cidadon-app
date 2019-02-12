import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import { incluiAvaliacao, excluirAvaliacao, editarAvaliacao } from '../actions/ProblemaActions'
import { connect } from 'react-redux';
import AvaliacaoExterna from './AvaliacaoExterna';
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
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 50, marginTop: 15, marginBottom: 15 }}>Avaliações</Text>
                <Text style={{ fontSize: 25, marginTop: 15, marginBottom: 15 }}>Avaliacoes desse problema:</Text>
                {
                    this.props.avaliacoes != null ? this.props.avaliacoes.map(avaliacao => (
                        <AvaliacaoExterna
                            nomeAutor={avaliacao.nomeAutor}
                            onPressEditar={this.props.editarAvaliacao}
                            onPressExcluir={this.props.excluirAvaliacao}
                            comentarioAvaliacao={avaliacao.comentario}
                            avaliacaoID={avaliacao.id}
                            autorID={avaliacao.autorId}
                            problemaID={this.props.problemaId}
                            valorAvaliacao={avaliacao.gravidade}
                        />
                    )) : <Text style={{ fontSize: 25, marginTop: 15, marginBottom: 15 }}>esse problema não possui avaliações</Text>
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
        nomeAutor: state.AutenticacaoReducer.nome,
        problemaId: state.ProblemaReducer.id,
        avaliacoes: state.ProblemaReducer.avaliacoes
    }
)
export default connect(mapStateToProps, { incluiAvaliacao, excluirAvaliacao, editarAvaliacao })(ExibeAvaliacoes);