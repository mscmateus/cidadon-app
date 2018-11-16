import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default class BarraNavegacao extends React.Component {
  render(){
    return (
      <View style={styles.barraTitulo}>
        <Text style={styles.titulo}>CidadOn</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barraTitulo: {
    alignItems: 'center',
    height: '10%',
    padding: 10,
    backgroundColor: '#1d9a78',
  },
  titulo: {
    flex: 1,
    top: '35%',
    color: '#FFFFFF',
    fontSize: 30,
    textAlign: 'center',
  }
 });
