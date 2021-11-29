import { Modal, ModalHeader } from 'reactstrap'
import styled from 'styled-components'

export const ModalPatientContainer = styled.section`
    /* transform: translateY(108px); */
`
export const PatientModal = styled(Modal)`
    margin-top: 108px;
    img {
        position: absolute;
        left: 40%;
        top: -64px;
    }
`

export const PatientModalHeader = styled(ModalHeader)`
    margin-top: 48px;

    div {
        min-width: 440px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @media only screen and (max-width: 769px) {
            min-width: 300px;
        }
    }
`
