import '@firebase/auth';
import "@firebase/database";
import _ from 'lodash';

const usuariosRef =  firebase.database().ref('usuarios');

export const inclusaoUsuario = (nome, sobrenome, cpf, email, nomeUsuario, senha, residencia) => {
   firebase.auth().createUserWithEmailAndPassword(email, senha)
   .then((user)=>{
      usuariosRef.child(firebase.auth().currentUser.uid).set({
         nome: nome,
         sobrenome: sobrenome,
         cpf: cpf,
         nomeUsuario: nomeUsuario,
         residencia: residencia
      }).then(()=>{

      })
      .catch(()=>{

      })
   })
   .catch((erro)=>{

   })
}

export const recuperaUsuario = (usuarioId) => {

}

export const inclusaoProblemaUsuario = (problemaId) => {
   usuariosRef.child(firebase.auth().currentUser.uid).child('problemas').child(problemaId).set({
      id: problemaId
   })
   .then(()=>{
      return true;
   })
   .catch(()=>{
      return false;
   });
};