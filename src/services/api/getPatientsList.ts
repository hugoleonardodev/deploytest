import axios, { AxiosResponse } from 'axios'

const getInitialPatientsList = async (): Promise<AxiosResponse<never>> => {
    const url = 'https://randomuser.me/api/?results=50&seed=pharma'

    const result = await axios({
        url,
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })

    return result
}

export default getInitialPatientsList
