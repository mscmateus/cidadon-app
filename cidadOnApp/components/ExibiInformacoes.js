import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { igualaDadosEdicaoProblema, excluirProblema } from '../actions/ProblemaActions'
import { connect } from 'react-redux';

class ExibiInformacoes extends React.Component {
    liberaAcoes() {
        if (this.props.idUsuarioAtual == this.props.autorId) {
            return (
                <View>
                    <TouchableOpacity onPress={() => { this.props.igualaDadosEdicaoProblema(this.props.autorId) }}>
                        <Text style={{ textDecorationLine: 'underline', fontSize: 20 }}>editar esse problema</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.excluirProblema(this.props.id, this.props.autorId) }}>
                        <Text style={{ textDecorationLine: 'underline', fontSize: 20 }}>excluir esse problema</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    render() {
        return (
            <View style={{ padding: 20, alignItems: 'center', marginTop: 15 }}>
                <Text style={{ fontSize: 20 }}>Tipo de Problema: {this.props.tituloProblema}</Text>
                {this.liberaAcoes()}
                <Text style={{ fontSize: 20 }}> Criado em {this.props.dataCriacao}</Text>
                <Text style={{ fontSize: 20 }}>Por: {this.props.nomeAutor}</Text>
                <Text style={{ fontSize: 20 }}></Text>
                <Text style={{ fontSize: 20 }}>Descrição:</Text>
                <Text style={{ fontSize: 20 }}>{this.props.descricao}</Text>
            </View>
        )
    }
}
const mapStateToProps = state => (
    {
        idUsuarioAtual: state.AutenticacaoReducer.id,
        id: state.ProblemaReducer.id,
        autorId: state.ProblemaReducer.autorId,
        tipoDeProblemaId: state.ProblemaReducer.tipoDeProblemaId,
        descricao: state.ProblemaReducer.descricao,
        dataCriacao: state.ProblemaReducer.dataCriacao,
        localizacao: state.ProblemaReducer.localizacao,
        nomeAutor: state.ProblemaReducer.nomeAutor,
        tituloProblema: state.ProblemaReducer.tituloTipoProblema
    }
)
export default connect(mapStateToProps, { igualaDadosEdicaoProblema, excluirProblema })(ExibiInformacoes);

