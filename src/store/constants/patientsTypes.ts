export interface IPatientName {
    title: string
    first: string
    last: string
}

export interface IPatientStreet {
    number: number
    name: string
}

export interface IPatientCoordinates {
    latitude: string
    longitude: string
}

export interface IPatientTimezone {
    offset: string
    description: string
}

export interface IPatientLocation {
    street: IPatientStreet
    city: string
    state: string
    country: string
    postcode: string
    coordinates: IPatientCoordinates
    timezone: IPatientTimezone
}

export interface IPatientLogin {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
}

export interface IPatientDayOfBirth {
    date: Date
    age: number
}

export interface IPatientRegistered {
    date: Date
    age: number
}

export interface IPatientId {
    name: string
    value?: string
}

export interface IPatientPicture {
    large: string
    medium: string
    thumbnail: string
}

export interface IPatientData {
    gender: string
    name: IPatientName
    location: Location
    email: string
    login: IPatientLogin
    dob: IPatientDayOfBirth
    registered: IPatientRegistered
    phone: string
    cell: string
    id: IPatientId
    picture: IPatientPicture
    nat: string
}

export interface IPatientResultsInfo {
    seed: string
    results: number
    page: number
    version: string
}

export interface IPatientRootObject {
    results: IPatientData[]
    info: IPatientResultsInfo
}

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
