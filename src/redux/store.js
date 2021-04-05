import {ReactReduxContext} from 'react-redux'
import {createStore} from 'redux'
import salesReducer from './sales/salesReducer'

const store=createStore(salesReducer)

export default store;