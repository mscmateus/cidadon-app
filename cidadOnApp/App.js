import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
 
import TelaLogin from './interfaces/TelaLogin';
import TelaExposicao from './interfaces/TelaExposicao';
import TelaCadastro from './interfaces/TelaCadastro';
import TelaCadastroResidencia from './interfaces/TelaCadastroResidencia';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene>
          {/* <Scene hideNavBar key='telaexposicao' component={TelaExposicao}/>
          <Scene hideNavBar key='telalogin' component={TelaLogin}/>
          <Scene hideNavBar key='telacadastro' component={TelaCadastro}/> */}
          <Scene key='root' hideNavBar key='telacadastroresidencia' component={TelaCadastroResidencia}/>
        </Scene>
      </Router>
    );
  }
}
