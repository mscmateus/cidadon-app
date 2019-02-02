import {combineReducers} from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer'
import ProblemaReducer from './ProblemaReducer'

export default combineReducers({
    AutenticacaoReducer,
    ProblemaReducer
});