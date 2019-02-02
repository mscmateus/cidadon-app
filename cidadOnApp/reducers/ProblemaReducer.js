const INITIAL_STATE = {
    id: '',
    autorId: '',
    descricao: '',
    dataCriacao: '',
    latitude: '',
    longitude: '',
    //edicao
    ediId: '',
    ediAutorID: '',
    ediDescricao: '',
    ediDataCriacao: '',
    ediLatitude: '',
    edLongitude: ''
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifica_id': 
            return {...state, id: action.payload}
        case 'modifica_autorId':
            return {...state, autorId: action.payload}
        case 'modifica_descricao':
            return { ...state, descricao: action.payload }
        case 'modifica_dataCriacao':
            return { ...state, dataCriacao: action.payload }
        case 'modifica_latitude':
            return { ...state, latitude: action.payload }
        case 'modifica_longitude':
            return { ...state, longitude: action.payload }
        case 'modifica_ediId' :
            return {...state, ediId: action.payload}
        case 'modifica_ediAutorId':
            return {...state, ediAutorID: action.payload}
        case 'modifica_ediDescricao':
            return { ...state, ediDescricao: action.payload }
        case 'modifica_ediDataCriacao': 
            return { ...state, ediDataCriacao: action.payload }
        case 'modifica_ediLatitude':
            return { ...state, ediLatitude: action.payload }
        case 'modifica_ediLongitude':
            return { ...state, edLongitude: action.payload }
        case 'limpa_dados_problema':
            return {
                ...state,
                id:'',
                autorId: '',
                descricao: '',
                dataCriacao: '',
                latitude: '',
                longitude: '',
            }
        case 'limpa_dados_problemaEdicao':
            return {
                ...state,
                ediId: '',
                ediAutorID: '',
                ediDescricao: '',
                ediDataCriacao: '',
                ediLatitude: '',
                edLongitude: ''
            }
        case 'limpa_todos_dadosProblema':
            return {
                ...state,
                autorId: '',
                descricao: '',
                dataCriacao: '',
                latitude: '',
                longitude: '',
                //edicao
                ediAutorID: '',
                ediDescricao: '',
                ediDataCriacao: '',
                ediLatitude: '',
                edLongitude: ''
            }
        case 'inicia_edicaoProblema':
            return{
                ...state,
                ediId: state.id,
                ediAutorID: state.autorId,
                ediDescricao: state.descricao,
                ediDataCriacao: state.dataCriacao,
                ediLatitude: state.latitude,
                edLongitude: state.longitude
            }
        case 'carregamento_problema_sucesso':
            return{
                ...state,
                id: action.id,
                autorId: action.payload.autorId,
                descricao: action.payload.descricao,
                dataCriacao: action.payload.dataCriacao,
                latitude: action.payload.latitude,
                longitude: action.payload.longitude
            }
    }
    return state;
}