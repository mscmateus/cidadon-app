import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Modal } from 'react-native'
import { styles, colors } from '../layout';
import Stars from 'react-native-stars';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Botao from '../components/Botao'

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
                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => { this.setState({ modalVisible: true, }) }}>
                        <Text style={{ textDecorationLine: 'underline', fontSize: 20, color: colors.verde }}>editar essa avaliação</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.onPressExcluir(this.props.avaliacaoID, this.props.problemaID, this.props.autorID) }}>
                        <Text style={{ textDecorationLine: 'underline', fontSize: 20, color: colors.verde }}>excluir essa avaliação</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    render() {
        return (
            <View style={{ padding: 20, marginTop: 20 }}>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <AntDesign name="user" size={50} color={colors.branco} />
                    <View style={{marginLeft: 10}}>
                        <Text style={{ fontSize: 20, color: colors.verde }}>
                            <Text style={{ color: colors.branco }}>Autor:</Text> {this.props.nomeAutor}
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 10}}>
                            <Text style={{ fontSize: 25, color: colors.branco}}>{this.props.valorAvaliacao}</Text>
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
                        </View>
                    </View>
                </View>
                <View style={{alignItems: 'center', marginVertical: 20}}>
                    <Text style={{ fontSize: 20, color: colors.branco }}>{this.props.comentarioAvaliacao}</Text>
                </View>
                {this.liberaAcoes()}



                <Modal
                    style={{ height: '100%', width: '100%' }}
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}>
                    <View style={{ height: '100%', width: '100%', backgroundColor: 'rgba(10, 10, 10, 0.7)', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ alignItems: 'center', backgroundColor: colors.azulEscuro, padding: 25 }}>
                            <Text style={{ fontSize: 30 }}>Edição de avaliação</Text>
                            <View style={{ padding: 20, alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, color: colors.branco }}>Altere o valor de sua avaliação:</Text>
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
                                <Text style={{ fontSize: 20, color: colors.branco }}>Altere seu comentário:</Text>
                                <TextInput value={this.state.comentario} maxLength={200} multiline={true} style={styles.textArea} placeholder="Comentário" onChangeText={(text) => { this.setState({ comentario: text }) }} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Botao texto='Confirma' onPress={() => { this.props.onPressEditar(this.props.problemaID, this.state.comentario, this.state.valorAvaliacao, this.props.nomeAutor, this.props.avaliacaoID, this.props.autorID); this.setState({ modalVisible: false }) }} />
                                <Botao texto='Cancelar' onPress={() => { this.setState({ modalVisible: false, descricao: this.props.comentarioAvaliacao }) }} />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}