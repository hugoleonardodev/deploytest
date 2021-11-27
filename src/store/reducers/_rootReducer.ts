import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { combineReducers, Reducer } from 'redux'

import quotesDataReducer from './quotesDataReducer'

const rootReducer = (history: History<unknown>): Reducer =>
    combineReducers({
        quotes: quotesDataReducer,
        router: connectRouter(history),
    })

export default rootReducer
