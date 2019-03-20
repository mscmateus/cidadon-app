import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TabBar } from 'react-native-tab-view'
import BarraNavegacao from './BarraNavegacao';
import { connect } from 'react-redux';
import { limpaTodosOsDados } from '../actions/ProblemaActions'
import ExibiInformacoes from './ExibiInformacoes';

//anotção =====================================
//considerar a facilidade de aninhar os dados de titulo do tipo de problema e o nome usuario
//=============================================
export default props => (
    <View>
        <TabBar style = {{backgroundColor: '#1d9a78',color: '#FFFFFF' }} {...props} />
    </View>
);

