import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';

class ExibiInformacoes extends React.Component {
    render() {
        return(
            <View style={{ padding: 20, alignItems: 'center', marginTop: 15 }}>
                <Text style={{ fontSize: 20 }}>Tipo de Problema: {this.props.tipoDeProblemaId}</Text>
                <TouchableOpacity>
                    <Text style={{ textDecorationLine: 'underline', fontSize: 20 }}>editar esse problema</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ textDecorationLine: 'underline', fontSize: 20 }}>excluir esse problema</Text>
                </TouchableOpacity>
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
        id: state.ProblemaReducer.id,
        autorId: state.ProblemaReducer.autorId,
        tipoDeProblemaId: state.ProblemaReducer.tipoDeProblemaId,
        descricao: state.ProblemaReducer.descricao,
        dataCriacao: state.ProblemaReducer.dataCriacao,
        localizacao: state.ProblemaReducer.localizacao,
        nomeAutor: state.ProblemaReducer.nomeAutor
	}
)
export default connect(mapStateToProps, {})(ExibiInformacoes);

