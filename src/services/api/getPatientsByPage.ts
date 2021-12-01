import axios, { AxiosResponse } from 'axios'

const getPatientsByPage = async (page = 1, gender = ''): Promise<AxiosResponse<never>> => {
    let url = `${__API_BASE_URL__}&page=${page}`

    if (gender !== '') {
        url = `${url}&gender=${gender}`
    }

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
