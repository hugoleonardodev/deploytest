import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LoadingMore from '@components/atoms/LoadingMore'
import Footer from '@components/molecules/Footer'
import { getPatientsByPageThunk } from '@store/actions/patientsActions'
import { IRootStateWithReducers } from '@store/constants/_rootReducerTypes'

type TInfinityScrollProperties = {
    isBottomVisible: boolean
    hasNext?: boolean
}
const MIN_SCREEN_HEIGHT = 640

const InfinityScroll: React.FC<TInfinityScrollProperties> = ({ isBottomVisible }) => {
    const dispatch = useDispatch()
    const { results } = useSelector((state: IRootStateWithReducers) => state.patients)

    React.useEffect(() => {
        if (isBottomVisible && window.scrollY > MIN_SCREEN_HEIGHT) dispatch(getPatientsByPageThunk(__TWO__))
    }, [isBottomVisible, dispatch])

    return <>{!isBottomVisible && results.length > 0 ? <LoadingMore /> : <Footer />}</>
}

export default InfinityScroll
