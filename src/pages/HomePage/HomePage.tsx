import React from 'react'
import { useDispatch } from 'react-redux'

import HomeMain from '@layouts/HomeMain'
import { getInitialPatientsListThunk } from '@store/actions/patientsActions'

const HomePage: React.FC = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getInitialPatientsListThunk())
    }, [dispatch])

    return <HomeMain />
}

export default HomePage
