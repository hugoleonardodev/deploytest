import { Dispatch } from 'react'

import { getInitialPatientsList } from '@services/api'
import getPatientsByPage from '@services/api/getPatientsByPage'
import { IPatientRootObject, PatientsDataActions } from '@store/constants/patientsTypes'

/**
 * An object with the `type` and `payload` for switch theme actions.
 * @param paylaod
 * @default initialState: IPatientRootObject
 */
export interface IListPatientsAction {
    type: PatientsDataActions.INITIAL_LIST_PATIENTS
    payload: IPatientRootObject
}

/**
 * An action creator to handle redux store's initial patients listing.
 * @param none
 * @returns an object with the action `type` to `dispatch` redux store's initial list patients
 * @example
 * getInitialPatientsListThunk =
 *  () =>
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
export const initialListPatients = (patientsData: IPatientRootObject): IListPatientsAction => ({
    type: PatientsDataActions.INITIAL_LIST_PATIENTS,
    payload: patientsData,
})

/**
 * Handles async `requests` to get patients lists from API and dispatches the data do `redux` store's.
 * @param none
 * @returns returns an async `redux-thunk` function able to await for data and `dispatch` the result
 */
export const getInitialPatientsListThunk =
    () =>
    async (dispatch: Dispatch<IListPatientsAction>): Promise<void> => {
        const firstFiftyPatientsData = await getInitialPatientsList()

        if (firstFiftyPatientsData.status === __200_OK__) {
            dispatch(initialListPatients(firstFiftyPatientsData.data))
        }
    }

/**
 * An object with the `type` and `payload` for switch theme actions.
 * @param payload
 * @default false
 */
export interface IPaginationLoadPatientsAction {
    type: 'PAGINATION_LOAD_PATIENTS'
    payload: IPatientRootObject
}

/**
 * An action creator to handle redux store's initial patients listing.
 * @param patientsData
 * @returns an object with the action `type` to `dispatch` redux store's initial list patients
 * @example
 * getInitialPatientsListThunk =
 *  (2) =>
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
export const paginationLoadPatients = (patientsData: IPatientRootObject): IPaginationLoadPatientsAction => ({
    type: PatientsDataActions.PAGINATION_LOAD_PATIENTS,
    payload: patientsData,
})

/**
 * Handles async `requests` to get a new page of patients from API and dispatches the data do `redux` store's.
 * @param page
 * @default 1
 * @returns returns an async `redux-thunk` function able to await for data and `dispatch` the result
 */
export const getPatientsByPageThunk =
    (page: number) =>
    async (dispatch: Dispatch<IPaginationLoadPatientsAction>): Promise<void> => {
        const moreFiftyPatientsData = await getPatientsByPage(page)

        if (moreFiftyPatientsData.status === __200_OK__) {
            dispatch(paginationLoadPatients(moreFiftyPatientsData.data))
        }
    }

/**
 * A union type with all the actions creators for user's configs.
 * In order to pass more than one action to `reducer`, we must group it with one alias.
 */
export type TPatientsActionsCreators = IListPatientsAction | IPaginationLoadPatientsAction
