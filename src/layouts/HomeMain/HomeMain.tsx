import React from 'react'

import { useIntersectionObserver } from '@common/hooks'
import Header from '@components/molecules/Header'
import InfinityScroll from '@components/organisms/InfinityScroll'
import TablePatients from '@components/organisms/TablePatients'

import { HomeMainContainer } from './HomeMain.styles'

const HomeMain: React.FC = () => {
    const reference = React.useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(reference, {})
    const isVisible = !!entry?.isIntersecting

    return (
        <div>
            <HomeMainContainer>
                <Header />
                <TablePatients />
                <InfinityScroll isBottomVisible={isVisible} />
            </HomeMainContainer>
            <div ref={reference} />
        </div>
    )
}

export default HomeMain
