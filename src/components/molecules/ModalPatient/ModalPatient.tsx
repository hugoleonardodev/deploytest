import React from 'react'
import { Button, ModalBody, ModalFooter } from 'reactstrap'

import Avatar from '@components/atoms/Avatar'

import { ModalPatientContainer, PatientModal, PatientModalHeader } from './ModalPatient.styles'

export type TModalPatientProperties = {
    patient: PatientsAPI.IPatientData
}

const ModalPatient: React.FC<TModalPatientProperties> = ({ children, patient }) => {
    const [shouldModalOpen, setShouldModalOpen] = React.useState(false)

    const toggleModal = React.useCallback(() => {
        setShouldModalOpen(!shouldModalOpen)
    }, [shouldModalOpen])

    return (
        <ModalPatientContainer>
            <Button color="primary" onClick={toggleModal}>
                {children}
            </Button>
            <PatientModal isOpen={shouldModalOpen} toggle={toggleModal} id="modal-patient-portal">
                <Avatar avatarUrl={patient.picture.large} avatarSize="large" />
                <PatientModalHeader>
                    <div>
                        <p>{`${patient.name.last}, ${patient.name.first}`}</p>
                        <p>{patient.gender}</p>
                    </div>
                </PatientModalHeader>
                <ModalBody>
                    <p>{patient.login.uuid}</p>
                    <p>{patient.email}</p>
                    <p>{patient.gender}</p>
                    <p>{patient.dob.date}</p>
                    <p>{patient.phone}</p>
                    <p>{patient.nat}</p>
                    <p>{patient.location.street.name}</p>
                    <p>{patient.email}</p>
                </ModalBody>
                <ModalFooter>
                    <Button>Share</Button>
                </ModalFooter>
            </PatientModal>
        </ModalPatientContainer>
    )
}

export default ModalPatient
