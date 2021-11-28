import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Avatar from '@components/atoms/Avatar'
import Header from '@components/molecules/Header'
import { getInitialPatientsListThunk } from '@store/actions/patientsActions'
import { IRootStateWithReducers } from '@store/constants/_rootReducerTypes'

const HomePage: React.FC = () => {
    const dispatch = useDispatch()
    const { isLoading } = useSelector((state: IRootStateWithReducers) => state.configs)

    React.useEffect(() => {
        dispatch(getInitialPatientsListThunk())
    }, [dispatch])
    const { results } = useSelector((state: IRootStateWithReducers) => state.patients)
    return (
        <div>
            <Header />
            <h1>Docker App</h1>
            <h2>Home Page !!</h2>
            {isLoading ? <span>Loading...</span> : <Avatar avatarUrl={results[0].picture.large} avatarSize="large" />}
        </div>
    )
}

export default HomePage
