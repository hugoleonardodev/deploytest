import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HomeMain from '@layouts/HomeMain'
import { getInitialPatientsListThunk } from '@store/actions/patientsActions'
import { IRootStateWithReducers } from '@store/constants/_rootReducerTypes'

const HomePage: React.FC = () => {
    const dispatch = useDispatch()

    const {
        // info: { page },
        results,
        search,
        filters,
    } = useSelector((state: IRootStateWithReducers) => state.patients)

    React.useEffect(() => {
        if (results.length === 0 && (search === '' || filters.length === 0)) dispatch(getInitialPatientsListThunk())
    }, [dispatch, filters.length, results.length, search])

    // React.useEffect(() => {
    //     if (filters.length > 0 && search !== '') dispatch(getSearchQuerySubmitThunk(search, filters, page))
    // }, [filters, page])

    return <HomeMain />
}

export default HomePage
