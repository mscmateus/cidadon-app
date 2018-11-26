import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BarraNavegacao from '../components/BarraNavegacao';

const imgHome = require('../imagens/home.png');


const styles = StyleSheet.create({
    formularioLogin: {
        backgroundColor: '#1d9a78',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        height: '75%',
        alignItems: 'center',
    },
    map: {
        height: '100%',
        width: '100%',
    },
    btn: {
        height: 60,
        width: 150,
        backgroundColor: '#1d9a78',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default class TelaInsercaoProblema extends React.Component {
    constructor(props) {
        super(props);
        this.state = { marcaFeita: false, cordenada: { latitude: 0.0, longitude: 0.0 } };
    }
    destrancaMarca(cordenada) {
        this.setState({ marcaFeita: true, cordenada: cordenada });
    }
    fazmarca() {
        if (marcafeita = true) {
            return (
                <Marker
                    coordinate={this.state.cordenada}
                    image={imgHome}
                />
            );
        }
    }
    render() {
        return (
            <View>
                <View>
                    <BarraNavegacao estado="voltar" opcaoKey='telacadastro' />
                </View>
                <View>
                    <View style={{ backgroundColor: '#ffffff', height: '15%' }}>
                        <Text style={{ fontSize: 20, textAlign: 'center', padding: 20 }}>
                            Falta pouco, selecione no mapa onde você mora
                        </Text>
                    </View>
                    <View style={styles.container}>
                        <MapView
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={styles.map}
                            region={{
                                latitude: -9.9540920,
                                longitude: -67.863422,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                            onPress={e => this.destrancaMarca(e.nativeEvent.coordinate)}
                        >
                            {this.fazmarca()}
                        </MapView>
                    </View>
                    <View style={styles.formularioLogin}>
                        <Text>teste</Text>
                        <TouchableOpacity state={styles.btn}>
                            <Text style={{ fontSize: 20, color: '#FFFFFF' }}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
