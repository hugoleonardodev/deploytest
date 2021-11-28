import React from 'react'
import { useDispatch } from 'react-redux'

import Header from '@components/molecules/Header'
import TablePatients from '@components/organisms/TablePatients'
import { getInitialPatientsListThunk } from '@store/actions/patientsActions'

const HomePage: React.FC = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getInitialPatientsListThunk())
    }, [dispatch])

    return (
        <div>
            <Header />
            <TablePatients />
        </div>
    )
}

export default HomePage
