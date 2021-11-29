import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Table } from 'reactstrap'

import ModalPatient from '@components/molecules/ModalPatient'
import { IRootStateWithReducers } from '@store/constants/_rootReducerTypes'

const TablePatients: React.FC = () => {
    const { results } = useSelector((state: IRootStateWithReducers) => state.patients)
    const history = useHistory()
    const hanldeSharePatient = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            history.push(`/patient/${event.currentTarget.value}`)
        },
        [history],
    )
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Birth</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {results.length === 0 ? (
                    <tr>
                        <td>Loading...</td>
                    </tr>
                ) : (
                    results.map((patient, index) => (
                        <tr key={patient.login.uuid}>
                            <th scope="row">{index + 1}</th>
                            <td>{`${patient.name.last}, ${patient.name.first}`}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.dob.date}</td>
                            <td>
                                <ModalPatient patient={patient}>Details</ModalPatient>
                            </td>
                            <td>
                                <button value={patient.login.uuid} onClick={hanldeSharePatient}>
                                    Share
                                </button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </Table>
    )
}

export default TablePatients
