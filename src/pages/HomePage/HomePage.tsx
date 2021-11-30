import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HomeMain from '@layouts/HomeMain'
import { getInitialPatientsListThunk } from '@store/actions/patientsActions'
import { IRootStateWithReducers } from '@store/constants/_rootReducerTypes'

const HomePage: React.FC = () => {
    const dispatch = useDispatch()

    const { results, search, filter } = useSelector((state: IRootStateWithReducers) => state.patients)

    React.useEffect(() => {
        if (results.length === 0 && (search === '' || filter === '')) dispatch(getInitialPatientsListThunk())
    }, [dispatch, filter, results.length, search])

    return <HomeMain />
}

export default HomePage
