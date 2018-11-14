import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


const styles = StyleSheet.create({
 container: {
   height: '85%',
   width: '100%',
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   height: '100%',
   width: '100%',
 },
 herder: {
   alignItems: 'center',
   height: '15%',
   backgroundColor: '#1d9a78',
 },
 textoHerder: {
   top: '20%',
   color: '#FFFFFF',
   fontSize: 30,
   textAlign: 'center',
 }
});
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { marcaFeita: false, cordenada: {latitude: 0.0, longitude: 0.0}};
  }
  criaMarca(cordenada){
    this.setState({marcaFeita: true, cordenada: cordenada});
  }
  fazmarca(){
    if(marcafeita = true){
      return(
        <Marker
          coordinate={this.state.cordenada}
          title={"title"}
          description={"description"}
        />
      );
    }
  }
  render() {
    return (
        <View>
          <View style={styles.herder}>
            <Text style={styles.textoHerder}>CidadOn</Text>
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
             onPress={e => this.criaMarca(e.nativeEvent.coordinate)}
            >
              {this.fazmarca()}
            </MapView>
          </View>
     </View>
    );
  }
}
