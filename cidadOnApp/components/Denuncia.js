import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native'
import { connect } from 'react-redux';

export default class Denuncia extends React.Component {
    //props: nomeAutor, onPressEditar, onPressExcluir, descricaoDenuncia, denunciaID, autorID
    render() {
        return (
            <View style={{ padding: 20, backgroundColor: '#1d9a78', marginTop: 20 }}>
                <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Autor: {this.props.nomeAutor}</Text>
                <TouchableOpacity onPress={() => { this.props.onPressEditar(this.props.denunciaID, this.props.autorID) }}>
                    <Text style={{ textDecorationLine: 'underline', fontSize: 20 }}>editar essa denúncia</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.onPressExcluir(this.props.denunciaID, this.props.problemaID) }}>
                    <Text style={{ textDecorationLine: 'underline', fontSize: 20 }}>excluir essa denúncia</Text>
                </TouchableOpacity>
                <TextInput value={this.props.descricaoDenuncia} maxLength={200} multiline={true} style={styles.entrada} editable={false} />
            </View>
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