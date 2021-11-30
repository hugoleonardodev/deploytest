import axios, { AxiosResponse } from 'axios'

import getCountryCodeByName from '@common/functions/getCountryCodeByName'

const generateQueryFilter = (query: string, filter: string) => {
    if (filter === 'name' || filter === '') {
        return ''
    }
    const countryCode = getCountryCodeByName(query)
    if (countryCode) return `&nat=${countryCode.toLowerCase()}`
    return ''
}

const getSearchQuerySumit = async (query: string, filter: string, page = 1): Promise<AxiosResponse<never>> => {
    const queryFilter = generateQueryFilter(query, filter)
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
