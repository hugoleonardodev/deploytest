import styled from 'styled-components'

export const TableRow = styled.tr`
    svg {
        transform: translateY(-2px);
    }
    &:hover {
        background-color: #e9ecef;
    }
    @media only screen and (max-width: 769px) {
        span {
            display: none;
        }
    }
`
