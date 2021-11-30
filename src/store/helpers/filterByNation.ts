import getCountryCodeByName from '@common/functions/getCountryCodeByName'
import { IFilter, TPatientsInitialState } from '@store/reducers/patientsReducer'

export const filterByNation = (
    data: PatientsAPI.IPatientRootObject,
    nation: string,
    queryFilters: IFilter[],
    filters: IFilter[],
): TPatientsInitialState => {
    const filteredData: TPatientsInitialState = {
        ...data,
        filters: filters.length > 0 ? [...queryFilters, ...filters] : [...queryFilters],
        search: nation,
        results: [...data.results.filter(patient => patient.nat === getCountryCodeByName(nation))],
    }
    return filteredData
}
