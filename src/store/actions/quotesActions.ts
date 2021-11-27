import { Dispatch } from 'redux'

import getQuote from '@services/api/getQuote'

import { IQuote, QuotesDataActionTypes } from '../constants/quotesDataTypes'
import { IQuotesDataAction } from '../reducers/quotesDataReducer'

export const updateAllQuotes = (quotes: IQuote[]): IQuotesDataAction => ({
    type: QuotesDataActionTypes.UPDATE_ALL,
    payload: quotes,
})

export const promiseThunkAction =
    () =>
    async (dispatch: Dispatch<IQuotesDataAction>): Promise<void> => {
        const quotes = await getQuote()

        const STATUS_OK = 200

        if (quotes.status === STATUS_OK) {
            dispatch(updateAllQuotes(quotes.data))
        }
    }
