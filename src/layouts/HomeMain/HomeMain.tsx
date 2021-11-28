import React from 'react'

import Header from '@components/molecules/Header'
import TablePatients from '@components/organisms/TablePatients'

import { HomeMainContainer } from './HomeMain.styles'

const HomeMain: React.FC = () => {
    return (
        <HomeMainContainer>
            <Header />
            <TablePatients />
        </HomeMainContainer>
    )
}

export default HomeMain
