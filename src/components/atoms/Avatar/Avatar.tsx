import React from 'react'

import { AvatarImage } from './Avatar.styles'

type TAvatarProperties = React.HTMLProps<HTMLImageElement> & {
    avatarUrl: string
    avatarSize: 'large' | 'medium'
}

const Avatar: React.FC<TAvatarProperties> = ({ avatarUrl, avatarSize }) => {
    return (
        <AvatarImage
            src={avatarUrl}
            alt={avatarUrl}
            height={avatarSize === 'large' ? '128px' : '72px'}
            width={avatarSize === 'large' ? '128px' : '72px'}
        />
    )
}

export default React.memo(Avatar)
