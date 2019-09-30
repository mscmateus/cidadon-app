import '@firebase/auth';
import "@firebase/database";
import _ from 'lodash';
import {inclusaoProblemaUsuario} from './Usuario'
//constantes
const problemasRef = firebase.database().ref('problemas');

export const recuperaProblemas = () => {
   problemasRef.on('value', (snapshortProblemas) => {
      return _.values(snapshortProblemas.val());
   });
};

export const inclusaoProblema = (tipoDeProblemaId, descricao, dataCriacao, localizacao) => {
   var novoProblemaRef = problemasRef.push();
   
   novoProblemaRef.set({
      id: novoProblemaRef.key,
      autorId: firebase.auth().currentUser.uid,
      tipoDeProblemaId: tipoDeProblemaId,
      descricao: descricao,
      dataCriacao: dataCriacao,
      localizacao: { latitude: localizacao.latitude, longitude: localizacao.longitude }
   })
   .then(() => {
      if(inclusaoProblemaUsuario(novoProblemaRef.key)){
         Alert.alert(
            'Problema inserido!',
            'Obrigado por sua contribuição, o problema ficará visivel para todos na espera por ser resolvido.',
            [
               {text: 'OK'}
            ],
            {cancelable: true}
         );
      }else{
         Alert.alert(
            'Ops!',
            'Ocorreu um erro durante a inserção do problema, por favor tente novamente.',
            [
               {text: 'OK'}
            ],
            {cancelable: true}
         );
      }
   })
   .catch(erro => {
      Alert.alert(
         'Ops!',
         'Ocorreu um erro durante a inserção do problema, por favor tente novamente.',
         [
            {text: 'OK'}
         ],
         {cancelable: true}
      );
   });
};

export const recuperaProblema = (problemaId) => {
   problemasRef.on('value', (snapshortProblemas) => {
      return _.values(snapshortProblemas.val());
   })
   .catch((error) => {
      Alert.alert(
         'Erro ao recuperar problema',
         'Desculpe, não foi possivel recuperar esse problema :(.\nTente novamente.',
         [
           {text: 'OK'}
         ],
         {cancelable: true}
      );
   });
};
