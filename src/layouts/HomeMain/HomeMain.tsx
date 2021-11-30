import React from 'react'

import { useIntersectionObserver } from '@common/hooks'
import Header from '@components/molecules/Header'
import SearchFilter from '@components/molecules/SearchFilter'
import InfinityScroll from '@components/organisms/InfinityScroll'
import TablePatients from '@components/organisms/TablePatients'

import { HomeMainContainer } from './HomeMain.styles'

const HomeMain: React.FC = () => {
    const infinityScrollBottomReference = React.useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(infinityScrollBottomReference, {})
    const isVisible = !!entry?.isIntersecting

    return (
        <div>
            <HomeMainContainer>
                <Header />
                <SearchFilter />
                <TablePatients />
                <InfinityScroll isBottomVisible={isVisible} />
            </HomeMainContainer>
            <div ref={infinityScrollBottomReference} />
        </div>
    )
}

export default HomeMain
