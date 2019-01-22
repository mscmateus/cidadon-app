import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker, TextInput, ScrollView, SectionList, FlatList } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BarraNavegacao from '../components/BarraNavegacao';
var tiposDeProblemas = ["Estrutura Viária", "Rede de Esgoto", "Rede de Água", "Iluminação Pública", "Rede Eletrica"]

export default class TelaInsercaoProblema extends React.Component {
    render() {
        return (
            <ScrollView >
                <View>
                    <BarraNavegacao estado={2} voltarKey="TelaMapaInterna" />
                </View>
                <View style={{ padding: 20, alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 20 }}>Problema de *Tipo do Problema*</Text>
                    <TouchableOpacity>
                        <Text style={{ textDecorationLine: 'underline', fontSize: 20 }}>editar esse problema</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>criado em *data criação*</Text>
                    <Text style={{ fontSize: 20 }}>nome de usuario do autor</Text>
                    <Text style={{ fontSize: 20 }}>Descrição:</Text>
                    <Text style={{ fontSize: 20 }}>*descrição do problema*</Text>
                </View>
                <View>
                    <FlatList
                        ItemSeparatorComponent={Platform.OS !== 'android' && ({ highlighted }) => (
    <View style={[style.separator, highlighted && { marginLeft: 0 }]} />
                    )}
  data={[{ title: 'Title Text', key: 'item1' }]}
                    renderItem={({ item, separators }) => (
                        <TouchableHighlight
                            onPress={() => this._onPress(item)}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}>
                            <View style={{ backgroundColor: 'white' }}>
                                <Text>{item.title}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                    />
                </View>
            </ScrollView>
        );
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
        textAlign: 'center',
        padding: 5,
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
        height: 200,
        width: 300
    }
});