import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

import Avatar from '@components/atoms/Avatar'

export type TModalPatientProperties = {
    patient: PatientsAPI.IPatientData
}

const ModalPatient: React.FC<TModalPatientProperties> = ({ children, patient }) => {
    const [shouldModalOpen, setShouldModalOpen] = React.useState(false)

    const toggleModal = React.useCallback(() => {
        setShouldModalOpen(!shouldModalOpen)
    }, [shouldModalOpen])

    return (
        <section>
            <Button color="primary" onClick={toggleModal}>
                {children}
            </Button>
            <Modal isOpen={shouldModalOpen} toggle={toggleModal} id="modal-patient-portal">
                <Avatar avatarUrl={patient.picture.large} avatarSize="large" />
                <ModalHeader toggle={toggleModal}>
                    {`${patient.login.uuid} ${patient.name.last}, ${patient.name.first}`}
                </ModalHeader>
                <ModalBody>
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
            </Modal>
        </section>
    )
}

export default ModalPatient
