import axios, { AxiosResponse } from 'axios'

const getPatientsByPage = async (page = 1): Promise<AxiosResponse<never>> => {
    const url = `https://randomuser.me/api/?page=${page}&results=50&seed=pharma`

    const result = await axios({
        url,
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })

    return result
}

export default getPatientsByPage
