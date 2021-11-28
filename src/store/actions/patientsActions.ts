import { Dispatch } from 'redux'

import { getInitialPatientsList, getPatientsByPage } from '@services/api'
import { ISetIsLoading } from '@store/constants/configsTypes'
import { PatientsDataActions } from '@store/constants/patientsTypes'

import { setIsLoading } from './configsActions'

export interface IListPatientsAction {
    type: PatientsDataActions.INITIAL_LIST_PATIENTS
    payload: PatientsAPI.IPatientRootObject
}

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

export interface IPaginationLoadPatientsAction {
    type: PatientsDataActions.PAGINATION_LOAD_PATIENTS
    payload: PatientsAPI.IPatientRootObject
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
 * A union type with all the actions creators for user's configs.
 * In order to pass more than one action to `reducer`, we must group it with one alias.
 */
export type TPatientsActionsCreators = IListPatientsAction | IPaginationLoadPatientsAction
