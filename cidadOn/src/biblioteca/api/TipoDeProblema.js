import '@firebase/auth';
import "@firebase/database";
import _ from 'lodash';

//constantes
const tiposDeProblemasRef = firebase.database().ref('tiposDeProblemas');

export const recuperaTiposDeProblemas = () => {
   tiposDeProblemasRef.on('value', (snapshortTiposDeProblemas) => {
      return _.values(snapshortTiposDeProblemas.val());
   });
};

export const recuperaTipoDeProblema = (tipoDeProblemaId) =>{
   tiposDeProblemasRef.child(tipoDeProblemaId).on('value', (snapshortTipoDeProblema) => {
      return snapshortTipoDeProblema.val();
   });
};

export const recuperaTipoDeProblemaIcone = (tipoDeProblemaId) =>{
   tiposDeProblemasRef.child(tipoDeProblemaId).on('value', (snapshortTipoDeProblema) => {
      return snapshortTipoDeProblema.val().;
   });
};