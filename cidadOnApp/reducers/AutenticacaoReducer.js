const INITIAL_STATE = {
    nome: '',
    sobrenome: '',
    cpf: '',
    email: 'msc@gmail.com',
    nomeUsuario: '',
    senha: '123456',
    senha2: '',
    residencia: { latitude: null, longitude: null },
    //para edição
    ediNome: '',
    ediSobrenome: '',
    ediCpf: '',
    ediEmail: '',
    ediNomeUsuario: '',
    ediSenha: '',
    ediSenha2: '',
    ediResidencia: { latitude: null, longitude: null }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifica_nome':
            return { ...state, nome: action.payload }
        case 'modifica_sobrenome':
            return { ...state, sobrenome: action.payload }
        case 'modifica_cpf':
            return { ...state, cpf: action.payload }
        case 'modifica_email':
            return { ...state, email: action.payload }
        case 'modifica_nomeUsuario':
            return { ...state, nomeUsuario: action.payload }
        case 'modifica_senha':
            return { ...state, senha: action.payload }
        case 'modifica_senha2':
            return { ...state, senha2: action.payload }
        case 'modifica_residencia':
            return { ...state, residencia: action.payload }
        case 'limpa':
            return {
                ...state, nome: '',
                sobrenome: '',
                cpf: '',
                email: '',
                nomeUsuario: '',
                senha: '',
                senha2: '',
                residencia: { latitude: null, longitude: null }
            }
        //edição
        case 'modifica_edinome':
            return { ...state, ediNome: action.payload }
        case 'modifica_edisobrenome':
            return { ...state, ediSobrenome: action.payload }
        case 'modifica_edicpf':
            return { ...state, ediCpf: action.payload }
        case 'modifica_ediemail':
            return { ...state, ediEmail: action.payload }
        case 'modifica_edinomeUsuario':
            return { ...state, ediNomeUsuario: action.payload }
        case 'modifica_edisenha':
            return { ...state, ediSenha: action.payload }
        case 'modifica_edisenha2':
            return { ...state, ediSenha2: action.payload }
        case 'modifica_ediResidencia':
            return { ...state, ediResidencia: action.payload }
        case 'limpa_edicao':
            return {
                ...state, ediNome: '',
                ediSobrenome: '',
                ediCpf: '',
                ediEmail: '',
                ediNomeUsuario: '',
                ediSenha: '',
                ediSenha2: '',
                ediResidencia: { latitude: null, longitude: null }
            }
        case 'inicia_edicao':
            return {
                ...state, ediNome: state.nome,
                ediSobrenome: state.sobrenome,
                ediCpf: state.cpf,
                ediEmail: state.email,
                ediNomeUsuario: state.nomeUsuario,
                ediSenha: state.senha,
                ediSenha2: state.senha2,
                ediResidencia: state.residencia
            }
        case 'remocao_sucesso':
            return {
                ...state, nome: '',
                sobrenome: '',
                cpf: '',
                email: '',
                nomeUsuario: '',
                senha: '',
                senha2: '',
                residencia: { latitude: null, longitude: null },
                //para edição
                ediNome: '',
                ediSobrenome: '',
                ediCpf: '',
                ediEmail: '',
                ediNomeUsuario: '',
                ediSenha: '',
                ediSenha2: '',
                ediResidencia: { latitude: null, longitude: null }
            }
        case 'desconecta_usuario':
            return {
                ...state, nome: '',
                sobrenome: '',
                cpf: '',
                email: '',
                nomeUsuario: '',
                senha: '',
                senha2: '',
                residencia: { latitude: null, longitude: null },
                //para edição
                ediNome: '',
                ediSobrenome: '',
                ediCpf: '',
                ediEmail: '',
                ediNomeUsuario: '',
                ediSenha: '',
                ediSenha2: '',
                ediResidencia: { latitude: null, longitude: null }
            }
        case 'atenticacao_sucesso':
            return {
                ...state, nome: action.payload.nome,
                sobrenome: action.payload.sobrenome,
                cpf: action.payload.cpf,
                email: action.email,
                nomeUsuario: action.payload.nomeUsuario,
                senha: '',
                senha2: '',
                residencia: { latitude: action.payload.residencia.latitude, longitude: action.payload.residencia.longitude },
            }
    }
    return state;
}