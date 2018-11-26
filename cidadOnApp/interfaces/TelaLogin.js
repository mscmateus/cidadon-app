import React from 'react';
import { ScrollView,StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity  } from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
import {Actions} from 'react-native-router-flux';

export default class TelaLogin extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
        <BarraNavegacao estado="voltar" voltarKey="telaexposicao"/>
        </View>
        <View style={{padding: 20}}>
          <View style={styles.formularioLogin}>
            <Text style={{fontSize:20 }}>Bem vindo ao CidadOn!</Text>
            <Text style={{fontSize:20,  textAlign: 'center',}}>Já possui uma conta? Faça seu login e continue colaborando com sua cidade!</Text>
            <TextInput style={styles.entrada} placeholder="E-mail" />
            <TextInput secureTextEntry={true} style={styles.entrada} placeholder="Senha" />
            <TouchableOpacity style={styles.btn}>
              <Text style={{fontSize:20, color: '#FFFFFF',}}>Entrar</Text>
            </TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
              <Text style={{fontSize:20, marginTop: 30}}>Ainda não é um CidadOn?</Text><Text style={{fontSize:20, marginTop: 30}}>cadastre-se já!</Text>
              <TouchableOpacity style={styles.btn} onPress={()=>{Actions.telacadastro()}}>
                <Text style={{fontSize:20, color: '#FFFFFF',}}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  formularioLogin:{
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 20,
    height: 60,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d9a78',
  },
  entrada: {
    textAlign: 'center',
    padding: 5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomColor: '#000',
    borderTopColor:'#000',
    borderLeftColor:'#000',
    borderRightColor:'#000',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginTop: 10,
    fontSize:20,
    height:45,
    width:250
  }
});
