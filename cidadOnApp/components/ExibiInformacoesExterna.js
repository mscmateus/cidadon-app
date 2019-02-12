import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { igualaDadosEdicaoProblema, excluirProblema} from '../actions/ProblemaActions'
import { connect } from 'react-redux';

class ExibiInformacoesExterna extends React.Component {
    render() {
        return(
            <View style={{ padding: 20, alignItems: 'center', marginTop: 15 }}>
                <Text style={{ fontSize: 20 }}>Tipo de Problema: {this.props.tituloProblema}</Text>
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
        nomeAutor: state.ProblemaReducer.nomeAutor,
        tituloProblema: state.ProblemaReducer.tituloTipoProblema
	}
)
export default connect(mapStateToProps, {igualaDadosEdicaoProblema, excluirProblema})(ExibiInformacoesExterna);

