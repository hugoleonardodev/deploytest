import React from 'react'
import { useDispatch } from 'react-redux'

import { promiseThunkAction } from '@store/actions/quotesActions'

const HomePage: React.FC = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(promiseThunkAction())
    }, [dispatch])

    return (
        <div>
            <h1>Docker App</h1>
            <h2>Home Page !!</h2>
        </div>
    )
}

export default HomePage
