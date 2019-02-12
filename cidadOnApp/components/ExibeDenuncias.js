import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native'
import { incluiDenuncia, excluirDenuncia, editarDenuncia } from '../actions/ProblemaActions'
import { connect } from 'react-redux';
import Denuncia from './Denuncia';

class ExibeDenuncias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            descricao: '',
            modalVisible: false
        }
    }
    _incluiDenuncia() {
        this.props.incluiDenuncia(this.props.problemaId, this.state.descricao, this.props.nomeAutor)
    }
    render() {
        return (
            <ScrollView >
                <Text style={{ fontSize: 50, marginTop: 15, marginBottom: 15 }}>Denúcias</Text>
                <Text style={{ fontSize: 25, marginTop: 15, marginBottom: 15 }}>Você gostaria de denúnciar esse problema?</Text>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ padding: 20, alignItems: 'center', backgroundColor: '#1d9a78' }}>
                        <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Descreva o que você encontrou de errado nesse problema:</Text>
                        <TextInput maxLength={200} multiline={true} style={styles.entrada} placeholder="Descrição da denúncia" onChangeText={(text) => { this.setState({ descricao: text }) }} />
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => { this._incluiDenuncia() }} >
                        <Text style={{ fontSize: 20, color: '#FFFFFF', }}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 25, marginTop: 15, marginBottom: 15 }}>Denúcias desse problema:</Text>
                {
                    this.props.denuncias != null ? this.props.denuncias.map(denuncia => (
                        <Denuncia
                            nomeAutor={denuncia.nomeAutor}
                            onPressEditar={this.props.editarDenuncia}
                            onPressExcluir={this.props.excluirDenuncia}
                            descricaoDenuncia={denuncia.descricao}
                            denunciaID={denuncia.id}
                            autorID={denuncia.autorId}
                            problemaID={this.props.problemaId}
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
        nomeAutor: state.AutenticacaoReducer.nome,
        problemaId: state.ProblemaReducer.id,
        denuncias: state.ProblemaReducer.denuncias
    }
)
export default connect(mapStateToProps, { incluiDenuncia, excluirDenuncia, editarDenuncia })(ExibeDenuncias);