import { Quote } from './quotesDataTypes'

export interface IQuoteData {
    data: Quote[]
}

export interface IRootStateWithReducers {
    quotes: IQuoteData
    router: History
}
