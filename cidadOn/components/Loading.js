import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal } from 'react-native'

import Stars from 'react-native-stars';
const avaliacaoAtiva = require('../imagens/pngs/avalicaoAtiva.png');
const avaliacaoNeutro = require('../imagens/pngs/avalicaoNeutro.png');

export default class Avaliacao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comentario: this.props.comentarioAvaliacao,
            valorAvaliacao: this.props.valorAvaliacao,
            modalVisible: false
        }
    }
    //props: usuarioAtual, nomeAutor, onPressEditar, onPressExcluir, comentarioAvaliacao, avaliacaoID, autorID, valorAvaliacao
    liberaAcoes() {
        if (this.props.usuarioAtual == this.props.autorID) {
            return (
                <View>
                    <TouchableOpacity onPress={() => { this.setState({ modalVisible: true, }) }}>
                        <Text style={{ textDecorationLine: 'underline', fontSize: 20 }}>editar essa avaliação</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.onPressExcluir(this.props.avaliacaoID, this.props.problemaID, this.props.autorID) }}>
                        <Text style={{ textDecorationLine: 'underline', fontSize: 20 }}>excluir essa avaliação</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    render() {
        return (
            <View style={{ padding: 20, backgroundColor: '#1d9a78', marginTop: 20 }}>
                <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Autor: {this.props.nomeAutor}</Text>
                {this.liberaAcoes()}
                <Stars
                    disabled={true}
                    half={false}
                    default={this.props.valorAvaliacao}
                    spacing={4}
                    starSize={25}
                    count={5}
                    fullStar={avaliacaoAtiva}
                    emptyStar={avaliacaoNeutro}
                />
                <TextInput value={this.props.comentarioAvaliacao} maxLength={200} multiline={true} style={styles.entrada} editable={false} />
                <Modal
                    style={{ height: '100%', width: '100%' }}
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={{ height: '100%', width: '100%', backgroundColor: 'rgba(10, 10, 10, 0.7)', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ alignItems: 'center', backgroundColor: '#FFFFFF', padding: 25 }}>
                            <Text style={{ fontSize: 30 }}>Edição de avaliação</Text>
                            <View style={{ padding: 20, alignItems: 'center', backgroundColor: '#1d9a78' }}>
                                <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Altere o valor de sua avaliação:</Text>
                                <Stars
                                    half={false}
                                    default={this.props.valorAvaliacao}
                                    update={(val) => { this.setState({ valorAvaliacao: val }) }}
                                    spacing={4}
                                    starSize={50}
                                    count={5}
                                    fullStar={avaliacaoAtiva}
                                    emptyStar={avaliacaoNeutro}
                                />
                                <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Altere seu comentário:</Text>
                                <TextInput value={this.state.comentario} maxLength={200} multiline={true} style={styles.entrada} placeholder="Comentário" onChangeText={(text) => { this.setState({ comentario: text }) }} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={styles.btn} onPress={() => { this.props.onPressEditar(this.props.problemaID, this.state.comentario, this.state.valorAvaliacao, this.props.nomeAutor, this.props.avaliacaoID, this.props.autorID); this.setState({ modalVisible: false }) }} >
                                    <Text style={{ fontSize: 20, color: '#FFFFFF', }}>Confirmar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btn} onPress={() => { this.setState({ modalVisible: false, descricao: this.props.comentarioAvaliacao }) }} >
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