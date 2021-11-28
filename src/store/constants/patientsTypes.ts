/**
 * Patients `redux` store's data actions.
 * @INITIAL_LIST_PATIENTS lists the first 50 patients from random users API
 * @PAGINATION_LOAD_PATIENTS loads more 50 patients frin random users API
 * @SEARCH_FILTER_PATIENTS_BY_NAME filters users by `name` with the input from search bar
 * @SEARCH_FILTER_PATIENTS_BY_NATIONALITY filters users by `nationality` with the input from search bar
 * @TABLE_FILTER_BY_GENDER filters users by `gender` by clicking on the gender's table headear
 */
export enum PatientsDataActions {
    INITIAL_LIST_PATIENTS = 'INITIAL_LIST_PATIENTS',
    PAGINATION_LOAD_PATIENTS = 'PAGINATION_LOAD_PATIENTS',
    SEARCH_FILTER_PATIENTS_BY_NAME = 'SEARCH_FILTER_PATIENTS_BY_NAME',
    SEARCH_FILTER_PATIENTS_BY_NATIONALITY = 'SEARCH_FILTER_PATIENTS_BY_NATIONALITY',
    TABLE_FILTER_BY_GENDER = 'TABLE_FILTER_BY_GENDER',
}

export interface IListPatientsAction {
    type: PatientsDataActions.INITIAL_LIST_PATIENTS
    payload: PatientsAPI.IPatientRootObject
}

export interface IPaginationLoadPatientsAction {
    type: PatientsDataActions.PAGINATION_LOAD_PATIENTS
    payload: PatientsAPI.IPatientRootObject
}

/**
 * A union type with all the actions creators for user's configs.
 * In order to pass more than one action to `reducer`, we must group it with one alias.
 */
export type TPatientsActionsCreators = IListPatientsAction | IPaginationLoadPatientsAction
