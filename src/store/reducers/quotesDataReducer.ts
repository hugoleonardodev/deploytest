// import { Reducer } from 'redux'
import { IQuote, QuotesDataActionTypes } from '../constants/quotesDataTypes'

export interface IQuotesDataState {
    data: IQuote[]
}

export interface IQuotesDataAction {
    type: string
    payload: IQuote[]
}

const initialState = { data: [{ text: 'a', author: 'b' }] }

const quotesDataReducer = (state: IQuotesDataState = initialState, action: IQuotesDataAction): IQuotesDataState => {
    switch (action.type) {
        case QuotesDataActionTypes.UPDATE_ALL:
            return { data: [...state.data, ...action.payload] }
        default:
            return state
    }
}

export default quotesDataReducer
