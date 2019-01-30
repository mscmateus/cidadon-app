import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TabBar } from 'react-native-tab-view'
import BarraNavegacao from './BarraNavegacao';

export default props => (
    <View>
        <View>
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
        </View>
        <TabBar style = {{backgroundColor: '#1d9a78',color: '#FFFFFF' }} {...props} />
    </View>
);