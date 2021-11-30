import axios, { AxiosResponse } from 'axios'

import getCountryCodeByName from '@common/functions/getCountryCodeByName'
import { IFilter } from '@store/reducers/patientsReducer'

const generateQueryFilter = (filters: IFilter[]) => {
    const hasNationFilter = filters.find(({ filter }) => filter === 'nation')
    if (hasNationFilter) {
        const countryCode = getCountryCodeByName(hasNationFilter.filter)
        return `&nat=${countryCode.toLowerCase()}`
    }
    return ''
}

const getSearchQuerySumit = async (filters: IFilter[], page = 1): Promise<AxiosResponse<never>> => {
    const queryFilter = generateQueryFilter(filters)
    console.log('queryFilter', queryFilter)
    const url = `https://randomuser.me/api/?seed=pharma${queryFilter}&page=${page}&results=50`
    console.log(url)
    const result = await axios({
        url,
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })

    return result
}

export default getSearchQuerySumit
