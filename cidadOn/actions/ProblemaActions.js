import firebase from '@firebase/app';
import '@firebase/auth';
import "@firebase/database";
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
export const modificaEdiDescricao = (texto) => {
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
export const modificaEdiLocalizacao = (texto) => {
    return {
        type: 'modifica_ediLocalizacao',
        payload: texto
    }
}
//recupera tipos de problemas
export const recuperaTiposDeProblemas = () => {
    return dispatch => {
        firebase.database().ref('tiposDeProblemas').once('value', (snapshort) => {
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
        user = firebase.auth().currentUser;

        firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/problemas/' + novoProblema.key).set({
            id: novoProblema.key
        })
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
        firebase.database().ref('problemas').child(id).on('value', (snapshort) => {
            var problema = snapshort.val()
            var QueryNomeAutor = '', QueryTituloTipo = ''
            var idDoAutor = problema.autorId, idDoTipo = problema.tipoDeProblemaId;
            //buscar o nome do autor
            firebase.database().ref('users/' + idDoAutor).once('value', (snapshortAutor) => {
                QueryNomeAutor = snapshortAutor.val().nomeUsuario
                firebase.database().ref('tiposDeProblemas/' + idDoTipo).once('value', (snapshortTipo) => {
                    QueryTituloTipo = snapshortTipo.val().titulo
                    dispatch({
                        type: 'carregamento_problema_sucesso',
                        payload: problema,
                        nomeAutor: QueryNomeAutor,
                        tituloTipo: QueryTituloTipo
                    })
                })
            })
            //buscar o titulo do tipo de problema
            if (firebase.auth().currentUser == null) {
                Actions.TelaExibicaoProblemaExterna()
            } else {
                Actions.TelaExibicaoProblema()
            }
        })
    }
}

export const limpaDadosExetoLocalizacao = () => {
    return dispatch => {
        dispatch({
            type: 'limpa_todos_dadosProblema_exeto'
        })
    }
}
//limpa todas as informações presentes nos reducers
export const limpaTodosOsDados = () => {
    return dispatch => {
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
export const igualaDadosEdicaoProblema = (id) => {
    if (firebase.auth().currentUser.uid) {
        if (id == firebase.auth().currentUser.uid) {
            Actions.TelaEdicaoProblema()
            return {
                type: 'inicia_edicaoProblema'
            }
        } else {
            alert('Somente o autor do problema pode edita-lo')
            return {
                type: 'achou que ia editar? achou errado otário'
            }
        }
    } else {
        return {
            type: 'achou que ia editar? achou errado otário'
        }
    }
}
export const editaDadosDoProblema = ({ autorId, id, ediTipoDeProblemaId, ediDescricao, ediDataCriacao, ediLocalizacao }) => {
    return dispatch => {
        firebase.database().ref('problemas/' + id).set({
            id: id,
            autorId: autorId,
            tipoDeProblemaId: ediTipoDeProblemaId,
            descricao: ediDescricao,
            dataCriacao: ediDataCriacao,
            localizacao: { latitude: ediLocalizacao.latitude, longitude: ediLocalizacao.longitude }
        })
        alert("Edição realizada!")
        Actions.TelaMapaInterna()
        dispatch({
            type: 'limpa_todos_dadosProblema'
        })
    }
}
//excluir problema
export const excluirProblema = (id, autorId) => {
    return dispatch => {
        if (firebase.auth().currentUser.uid) {
            if (autorId == firebase.auth().currentUser.uid) {
                firebase.database().ref('problemas').child(id).off()
                firebase.database().ref('users').child(autorId).child('problemas').child(id).remove()
                firebase.database().ref('problemas/' + id + '/avaliacoes').once('value', (snapshort) => {
                    _.values(snapshort.val()).map(avaliacao => {
                        firebase.database().ref('users').child(avaliacao.autorId).child('avaliacoes').child(avaliacao.id).remove()
                    })
                })
                firebase.database().ref('problemas/' + id).remove()
                    .then(() => {
                        alert('Problema excluido com sucesso!')
                        dispatch({
                            type: 'limpa_todos_dadosProblema'
                        })
                    })
                    .catch((error) => {
                        alert('Erro ao excluir problema, ' + error.message)
                        dispatch({
                            type: 'limpa_todos_dadosProblema'
                        })
                    })
                Actions.TelaMapaInterna()
            } else {
                alert('Somente o autor do problema pode exclui-lo')
                dispatch({
                    type: 'nada'
                })
            }
        } else {
            dispatch({
                type: 'nada'
            })
        }
    }
}
//Avaliações
export const incluiAvaliacao = (problemaId, comentario, gravidade, nomeAutor) => {
    return dispatch => {
        novaDenuncia = firebase.database().ref('problemas').child(problemaId).child('avaliacoes').push()
        firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/avaliacoes/' + novaDenuncia.key).set({
            id: novaDenuncia.key,
            problemaId: problemaId
        })
        novaDenuncia.set({
            id: novaDenuncia.key,
            autorId: firebase.auth().currentUser.uid,
            comentario: comentario,
            gravidade: gravidade,
            nomeAutor: nomeAutor
        })
            .then(() => {
                alert('Avaliação realizada com sucesso!')
                //Actions.TelaMapaInterna()
                dispatch({
                    type: 'nada'
                })
            })
            .catch(erro => {
                alert('Erro ao realizar avaliação, ' + erro.message)
                dispatch({
                    type: 'nadica'
                })
            })
    }
}
export const excluirAvaliacao = (avaliacaoId, problemaId, autorId) => {
    return dispatch => {
        if (autorId == firebase.auth().currentUser.uid) {
            firebase.database().ref('users').child(autorId).child('avaliacoes').child(avaliacaoId).remove()
            firebase.database().ref('problemas').child(problemaId).child('avaliacoes').child(avaliacaoId).remove()
                .then(() => {
                    alert('Avaliação excluida com sucesso!')
                    dispatch({
                        type: 'nadica'
                    })
                })
                .catch(erro => {
                    alert('Erro ao excluir avaliação, ' + erro.message)
                    dispatch({
                        type: 'nfemmememe'
                    })
                })
        } else {
            alert('Somente o autor da avaliação pode exclui-la')
            dispatch({
                type: 'nfemmememe'
            })
        }
    }
}
//A
export const editarAvaliacao = (problemaId, comentario, gravidade, nomeAutor, avaliacaoID, autorID) => {
    return dispatch => {
        if (autorID == firebase.auth().currentUser.uid) {
            novaDenuncia = firebase.database().ref('problemas').child(problemaId).child('avaliacoes').child(avaliacaoID)
            novaDenuncia.update({
                id: novaDenuncia.key,
                autorId: firebase.auth().currentUser.uid,
                comentario: comentario,
                gravidade: gravidade,
                nomeAutor: nomeAutor
            })
                .then(() => {
                    alert('Avaliação editada com sucesso!')
                    dispatch({
                        type: 'nadica'
                    })
                })
                .catch(erro => {
                    alert('Erro ao editar avaliação, ' + erro.message)
                    dispatch({
                        type: 'nfemmememe'
                    })
                })
        } else {
            alert('Somente o autor da avaliação pode edita-la')
            dispatch({
                type: 'nfemmememe'
            })
        }
    }
}