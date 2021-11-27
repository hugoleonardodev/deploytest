import axios, { AxiosResponse } from 'axios'

const getPatientsByPage = async (page = 0): Promise<AxiosResponse<never>> => {
    const url = `https://randomuser.me/api/?page=${page}&results=50`

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
