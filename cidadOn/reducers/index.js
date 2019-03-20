import {combineReducers} from 'redux';
import UsuarioReducer from './UsuariosReducer'
import ProblemaReducer from './ProblemaReducer'

export default combineReducers({
    UsuarioReducer,
    ProblemaReducer
});