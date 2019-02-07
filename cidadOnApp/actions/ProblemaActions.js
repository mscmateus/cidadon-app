import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash';
import { Disposable } from 'rx';

export const modificaId = (texto) => {
    return {
        type: 'modifica_id',
        payload: texto
    }
}
export const modificaAutorId = (texto) => {
    return {
        type: 'modifica_autorId',
        payload: texto
    }
}
export const modificaTipoDeProblemaId = (texto) => {
    return {
        type: 'modifica_tipoDeProblemaId',
        payload: texto
    }
}
export const modificaDescricao = (texto) => {
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
export const modificaLocalizacao = (texto) => {
    return {
        type: 'modifica_localizacao',
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
export const modificaEdiAutorId = (texto) => {
    return {
        type: 'modifica_ediAutorId',
        payload: texto
    }
}
export const modificaEdiTipoDeProblemaId = (texto) => {
    return {
        type: 'modifica_ediTipoDeProblemaId',
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
export const moddificaEdiLocalizacao = (texto) => {
    return {
        type: 'modifica_ediLocalizacao',
        payload: texto
    }
}
//recupera tipos de problemas
export const recuperaTiposDeProblemas = () => {
    return dispatch => {
        firebase.database().ref('tiposDeProblemas').on('value', (snapshort) => {
            var tiposDeProblemas = _.values(snapshort.val())
            dispatch({
                type: 'modifica_tiposDeProblemas',
                payload: tiposDeProblemas
            })
        })
    }
}
//inclusão de problema
export const inclusaoProblema = ({ descricao, tipoDeProblemaId, dataCriacao, localizacao }) => {
    return dispatch => {
        novoProblema = firebase.database().ref('problemas/').push()
        novoProblema.set({
            id: novoProblema.key,
            autorId: firebase.auth().currentUser.uid,
            tipoDeProblemaId: tipoDeProblemaId,
            descricao: descricao,
            dataCriacao: dataCriacao,
            localizacao: { latitude: localizacao.latitude, longitude: localizacao.longitude }
        })
            .then(() => {
                alert('Problema criado em sucesso')
                Actions.TelaMapaInterna()
                dispatch({
                    type: 'inclussaoProblema_successo'
                })
            })
            .catch(erro => {
                alert('erro ao criar problema, ' + erro.message)
                dispatch({
                    type: 'inclussaoProblema_erro'
                })
            })
    }
}
//recuperação de todos problemas
export const recuperaTodosOsProblemas = () => {
    return dispatch => {
        firebase.database().ref('problemas').on('value', (snapshort) => {
            const problemas = _.values(snapshort.val())
            dispatch({
                type: 'modifica_problemas',
                payload: problemas
            })
        })
    }
}
//recuperação do problema pelo id passado como parametro
export const recuperaProblema = (id) => {
    return dispatch => {
        firebase.database().ref('problemas').child(id).on('value',(snapshort) => {
            var problema = snapshort.val()
            var QueryNomeAutor = '', QueryTituloTipo = ''
            var idDoAutor = problema.autorId, idDoTipo = problema.tipoDeProblemaId
            firebase.database().ref('users/' + idDoAutor).on('value', (snapshortAutor) => {
                QueryNomeAutor = snapshortAutor.val().nomeUsuario
            })
            // firebase.database().ref('tipoDeProblema/' + idDoTipo).on('value', (snapshortTipo) => {
            //     QueryNomeAutor = snapshortTipo.val().titulo
            // })
            dispatch({
                type: 'carregamento_problema_sucesso',
                payload: problema,
                nomeAutor: QueryNomeAutor,
                //tituloTipo: QueryTituloTipo
            })
            Actions.TelaExibicaoProblema()
        })
    }
}
//limpa todas as informações presentes nos reducers
export const limpaTodosOsDados = () => {
    return dispatch=> {
        dispatch({
            type: 'limpa_todos_dadosProblema'
        })
    }
}
//edição de problema
export const limpaDadosEdicaoProblema = () => {
    return {
        type: 'limpa_dados_problemaEdicao'
    }
}
export const igualaDadosEdicaoProblema = () => {
    return {
        type: 'inicia_edicaoProblema'
    }
}
export const editaDadosDoProblema = (idProblema) =>{
    dispatch=>{
        firebase.database().ref('problema/'+idProblema).set({
            nome: novoNome,
            sobrenome: novoSobrenome,
            cpf: novoCPF,
            nomeUsuario: novoNomeUsuario,
            residencia: novaResidencia
        })
    }
}