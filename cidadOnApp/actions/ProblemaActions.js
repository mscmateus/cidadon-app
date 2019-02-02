import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

export const modificaId = (texto) => {
    return {
        type: 'modifica_id',
        payload: texto
    }
}
export const modificaDescricao = () => {
    return {
        type: 'modifica_descricao',
        payload: texto
    }
}
export const modificaDataCriacao = (texto) => {
    return {
        type: 'modifica_dataCriacao',
        payload: texto
    }
}
export const moddificaLatitude = (texto) => {
    return {
        type: 'modifica_latitude',
        payload: texto
    }
}
export const modificaLongitude = (texto) => {
    return {
        type: 'modifica_longitude',
        payload: texto
    }
}
//Actions de edição
export const modificaEdiId = (texto) => {
    return {
        type: 'modifica_ediId',
        payload: texto
    }
}
export const modificaEdiDescricao = () => {
    return {
        type: 'modifica_ediDescricao',
        payload: texto
    }
}
export const modificaEdiDataCriacao = (texto) => {
    return {
        type: 'modifica_ediDataCriacao',
        payload: texto
    }
}
export const moddificaEdiLatitude = (texto) => {
    return {
        type: 'modifica_ediLatitude',
        payload: texto
    }
}
export const modificaEdiLongitude = (texto) => {
    return {
        type: 'modifica_ediLongitude',
        payload: texto
    }
}
//inclusão de problema
export const inclusaoProblema = ({ descricao, dataCriacao, latitude, longitude }) => {
    return dispatch => {
        novoProblema = firebase.database().ref('problemas/').push()
        novoProblema.set({
            id: novoProblema.key,
            autorId: firebase.auth().currentUser.uid,
            descricao: descricao,
            dataCriacao: dataCriacao,
            latitude: latitude,
            longitude: longitude
        })
        .then(() => { 
            alert('Problema criado em sucesso')
            dispatch({
                type: 'inclussaoProblema_successo'
            })
        })
        .catch(erro => { 
            alert(erro.message) 
            dispatch({
                type: 'inclussaoProblema_erro'
            })
        })
    }
}