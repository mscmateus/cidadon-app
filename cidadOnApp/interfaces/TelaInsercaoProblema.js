import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BarraNavegacao from '../components/BarraNavegacao';

const imgEstruturaViaria = require('../imagens/estruturaViaria.png');
const imgHome = require('../imagens/home.png');
const imgIluminacaoPublica = require('../imagens/iluminacaoPublica.png');
const imgRedeDistribuicaoAgua = require('../imagens/redeDistribuicaoAgua.png');
const imgRedeEletrica = require('../imagens/redeEletrica.png');
const imgRedeEsgoto = require('../imagens/redeEsgoto.png');


const styles = StyleSheet.create({
 container: {
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   height: '100%',
   width: '100%',
 }
});


export default class TelaInsercaoProblema extends React.Component {
  constructor(props){
    super(props);
    this.state = { marcaFeita: false, cordenada: {latitude: 0.0, longitude: 0.0}};
  }
  destrancaMarca(cordenada){
    this.setState({marcaFeita: true, cordenada: cordenada});
  }
  fazmarca(){
    if(marcafeita = true){
      return(
        <Marker
          coordinate={this.state.cordenada}
          image={imgEstruturaViaria}
        />
      );
    }
  }
  render() {
    return (
        <View>
          <BarraNavegacao estado="opcoes/pesquisa" opcaoKey='telalogin'/>
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
        </View>
    );
  }
}
