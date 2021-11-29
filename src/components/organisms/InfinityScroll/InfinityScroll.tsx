import React from 'react'
import { useDispatch } from 'react-redux'

import LoadingMore from '@components/atoms/LoadingMore'
import Footer from '@components/molecules/Footer'
import { getPatientsByPageThunk } from '@store/actions/patientsActions'

type TInfinityScrollProperties = {
    isBottomVisible: boolean
    hasNext?: boolean
}
const MIN_SCREEN_HEIGHT = 640

const InfinityScroll: React.FC<TInfinityScrollProperties> = ({ isBottomVisible }) => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (isBottomVisible && window.scrollY > MIN_SCREEN_HEIGHT) dispatch(getPatientsByPageThunk(__TWO__))
    }, [isBottomVisible, dispatch])

    return <>{!isBottomVisible ? <LoadingMore /> : <Footer />}</>
}

export default InfinityScroll
