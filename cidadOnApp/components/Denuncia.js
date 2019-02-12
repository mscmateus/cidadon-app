import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal } from 'react-native'
import { connect } from 'react-redux';

export default class Denuncia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            descricao: this.props.descricaoDenuncia,
            modalVisible: false
        }
    }
    //props: nomeAutor, onPressEditar, onPressExcluir, descricaoDenuncia, denunciaID, autorID 
    render() {
        return (
            <View style={{ padding: 20, backgroundColor: '#1d9a78', marginTop: 20 }}>
                <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Autor: {this.props.nomeAutor}</Text>
                <TouchableOpacity onPress={() => { this.setState({ modalVisible: true }) }}>
                    <Text style={{ textDecorationLine: 'underline', fontSize: 20 }}>editar essa denúncia</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.props.onPressExcluir(this.props.denunciaID, this.props.problemaID, this.props.autorID) }}>
                    <Text style={{ textDecorationLine: 'underline', fontSize: 20 }}>excluir essa denúncia</Text>
                </TouchableOpacity>
                <TextInput value={this.props.descricaoDenuncia} maxLength={200} multiline={true} style={styles.entrada} editable={false} />
                <Modal
                    style={{ height: '100%', width: '100%' }}
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={{ height: '100%', width: '100%', backgroundColor: 'rgba(10, 10, 10, 0.7)', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ alignItems: 'center', backgroundColor: '#FFFFFF', padding: 25 }}>
                            <Text style={{ fontSize: 30 }}>Edição de denúncia</Text>
                            <View style={{ padding: 20, alignItems: 'center', backgroundColor: '#1d9a78' }}>
                                <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Altere o conteúdo:</Text>
                                <TextInput value={this.state.descricao} maxLength={200} multiline={true} style={styles.entrada} placeholder="Descrição da denúncia" onChangeText={(text) => { this.setState({ descricao: text }) }} />
                            </View>
                            <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.btn} onPress={() => { this.props.onPressEditar(this.props.problemaID, this.state.descricao, this.props.nomeAutor, this.props.denunciaID, this.props.autorID); this.setState({ modalVisible: false }) }} >
                                <Text style={{ fontSize: 20, color: '#FFFFFF', }}>Confirmar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn} onPress={() => { this.setState({ modalVisible: false, descricao: this.props.descricaoDenuncia }) }} >
                                <Text style={{ fontSize: 20, color: '#FFFFFF', }}>Cancelar</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
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
        margin: 20
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