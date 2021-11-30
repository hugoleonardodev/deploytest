import { Dispatch } from 'redux'

import getCountryCodeByName from '@common/functions/getCountryCodeByName'
import { getInitialPatientsList, getPatientsByPage } from '@services/api'
import getSearchQuerySumit from '@services/api/getSearchQuerySubmit'
import { ISetIsLoading } from '@store/constants/configsTypes'
import {
    IListPatientsAction,
    IPaginationLoadPatientsAction,
    IRemoveSearchFilterAction,
    ISearchQuerySubmitAction,
    PatientsDataActions,
} from '@store/constants/patientsTypes'
import { IFilter, TPatientsInitialState } from '@store/reducers/patientsReducer'

import { setIsLoading } from './configsActions'

/**
 * An action to set a list with the first 50 patients from the random user API.
 * @param patientsData
 * @endpoint https://randomuser.me/api/?seed=pharma&results=50
 * @returns returns an async `redux-thunk` function able to await for data and `dispatch` the result
 * @see https://randomuser.me/documentation
 */
export const initialListPatients = (patientsData: PatientsAPI.IPatientRootObject): IListPatientsAction => ({
    type: PatientsDataActions.INITIAL_LIST_PATIENTS,
    payload: patientsData,
})

/**
 * Async thunk to get the first page of patients from random user API.
 * @param none
 * @returns returns an async `redux-thunk` function able to await for data and `dispatch` the result
 * @example
 * getInitialPatientsListThunk() =>
 *   async (dispatch: Dispatch<IListPatientsAction>): Promise<void> => {
 *      const firstFiftyPatientsData = await getInitialPatientsList()
 *
 *      const STATUS_OK = 200
 *
 *      if (firstFiftyPatientsData.status === STATUS_OK) {
 *          dispatch(initialListPatients(firstFiftyPatientsData.data))
 *      }
 *  }
 */
export const getInitialPatientsListThunk =
    () =>
    async (dispatch: Dispatch<IListPatientsAction | ISetIsLoading>): Promise<void> => {
        const firstFiftyPatientsData = await getInitialPatientsList()

        if (firstFiftyPatientsData.status === __200_OK__) {
            dispatch(initialListPatients(firstFiftyPatientsData.data))
        }

        dispatch(setIsLoading(false))
    }

/**
 * An action to append more 50 patients from the random user API.
 * @param patientsData
 * @endpoint https://randomuser.me/api/?seed=pharma&page=2&results=50
 * @returns returns an async `redux-thunk` function able to await for data and `dispatch` the result
 * @see https://randomuser.me/documentation
 */
export const paginationLoadPatients = (
    patientsData: PatientsAPI.IPatientRootObject,
): IPaginationLoadPatientsAction => ({
    type: PatientsDataActions.PAGINATION_LOAD_PATIENTS,
    payload: patientsData,
})

/**
 * Async thunk to get a page of patients from random user API given the page number.
 * @param page
 * @default 1
 * @returns an object with the action `type` to `dispatch` redux store's patients pagination
 * @example
 * getInitialPatientsListThunk(2) =>
 *   async (dispatch: Dispatch<IPaginationLoadPatientsAction>): Promise<void> => {
 *      const moreFiftyPatientsData = await getPatientsByPage(2)
 *
 *      const STATUS_OK = 200
 *
 *      if (moreFiftyPatientsData.status === STATUS_OK) {
 *          dispatch(initialPaginationLoadPatients(moreFiftyPatientsData.data))
 *      }
 *  }
 */
export const getPatientsByPageThunk =
    (page = 1) =>
    async (dispatch: Dispatch<IPaginationLoadPatientsAction | ISetIsLoading>): Promise<void> => {
        dispatch(setIsLoading(true))

        const moreFiftyPatientsData = await getPatientsByPage(page)

        if (moreFiftyPatientsData.status === __200_OK__) {
            dispatch(paginationLoadPatients(moreFiftyPatientsData.data))
        }

        dispatch(setIsLoading(false))
    }

/**
 * An action to append more 50 patients from the random user API.
 * @param patientsData
 * @endpoint https://randomuser.me/api/?seed=pharma&page=2&results=50
 * @returns returns an async `redux-thunk` function able to await for data and `dispatch` the result
 * @see https://randomuser.me/documentation
 */
export const searchQuerySubmit = (patientsData: TPatientsInitialState): ISearchQuerySubmitAction => ({
    type: PatientsDataActions.SEARCH_QUERY_SUBMIT,
    payload: patientsData,
})

const filterByName = (
    data: PatientsAPI.IPatientRootObject,
    query: string,
    queryFilters: IFilter[],
    filters: IFilter[],
): TPatientsInitialState => {
    console.log(filters.length)
    const filteredData: TPatientsInitialState = {
        ...data,
        filters: filters.length > 0 ? [...queryFilters, ...filters] : [...queryFilters],
        search: query,
        results: [
            ...data.results.filter(
                patient =>
                    patient.name.first.toLowerCase().includes(query.toLowerCase()) ||
                    patient.name.last.toLowerCase().includes(query.toLowerCase()),
            ),
        ],
    }
    return filteredData
}

const filterByNation = (
    data: PatientsAPI.IPatientRootObject,
    nation: string,
    queryFilters: IFilter[],
    filters: IFilter[],
): TPatientsInitialState => {
    console.log(filters.length)
    const filteredData: TPatientsInitialState = {
        ...data,
        filters: filters.length > 0 ? [...queryFilters, ...filters] : [...queryFilters],
        search: nation,
        results: [...data.results.filter(patient => patient.nat === getCountryCodeByName(nation))],
    }
    return filteredData
}
export const filterByQuery = (
    data: PatientsAPI.IPatientRootObject,
    query: string,
    queryFilters: IFilter[],
    filters: IFilter[],
): TPatientsInitialState => {
    let filteredData = {}
    if (queryFilters.some(filter => filter.filter === 'name')) {
        filteredData = filterByName(data, query, queryFilters, filters)
        return filteredData as TPatientsInitialState
    }
    if (queryFilters.some(filter => filter.filter === 'nation')) {
        filteredData = filterByNation(data, query, queryFilters, filters)
        return filteredData as TPatientsInitialState
    }
    if (filters.length === 0) filteredData = filterByName(data, query, queryFilters, filters)
    // if (filters === 'name') return filterByName(data, query, filters)
    // if (filters === 'nation') return filterByNation(data, query, filters)
    return filteredData as TPatientsInitialState
}

export const getSearchQuerySubmitThunk =
    (query: string, queryFilters: IFilter[], filters: IFilter[], page = 1) =>
    async (dispatch: Dispatch<ISearchQuerySubmitAction | ISetIsLoading>): Promise<void> => {
        dispatch(setIsLoading(true))

        const filteredPatients = await getSearchQuerySumit(queryFilters, page)

        console.log(filteredPatients)
        if (filteredPatients.status === __200_OK__) {
            dispatch(searchQuerySubmit(filterByQuery(filteredPatients.data, query, queryFilters, filters)))
        }

        dispatch(setIsLoading(false))
    }

export const removeSearchFilter = (index: number): IRemoveSearchFilterAction => ({
    type: PatientsDataActions.REMOVE_SEARCH_FILTER,
    payload: index,
})
