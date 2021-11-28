import React from 'react'
import { useDispatch } from 'react-redux'

import { getInitialPatientsListThunk } from '@store/actions/patientsActions'

const HomePage: React.FC = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getInitialPatientsListThunk())
    }, [dispatch])

    return (
        <div>
            <h1>Docker App</h1>
            <h2>Home Page !!</h2>
        </div>
    )
}

export default HomePage
