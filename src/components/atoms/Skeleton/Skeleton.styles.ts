import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
    100% {
        transform: translateX(100%);
    }
`

export const SigleLineSkeleton = styled.span`
    display: inline-block;
    height: 3rem;
    position: relative;
    overflow: hidden;
    background-color: #dddbdd;
    min-width: 60px;
    flex: 1;

    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(
            90deg,
            rgba(#fff, 0) 0,
            rgba(#fff, 0.2) 20%,
            rgba(#fff, 0.5) 60%,
            rgba(#fff, 0)
        );
        animation: ${shimmer} 1s infinite;
        content: '';
    }
`
