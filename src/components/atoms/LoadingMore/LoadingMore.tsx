import React from 'react'
import { Spinner } from 'reactstrap'

import { LoadingMoreContainer } from './LoadingMore.styles'

const LoadingMore: React.FC = () => {
    return (
        <LoadingMoreContainer>
            <Spinner /> Keep scolling down for loading more...
        </LoadingMoreContainer>
    )
}

export default LoadingMore
