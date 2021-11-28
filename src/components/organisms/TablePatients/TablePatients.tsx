import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'reactstrap'

import { IRootStateWithReducers } from '@store/constants/_rootReducerTypes'

const TablePatients: React.FC = () => {
    const { results } = useSelector((state: IRootStateWithReducers) => state.patients)

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
                    <div>Loading...</div>
                ) : (
                    results.map((patient, index) => (
                        <tr key={patient.login.uuid}>
                            <th scope="row">{index + 1}</th>
                            <td>{`${patient.name.last}, ${patient.name.first}`}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.dob.date}</td>
                            <td>
                                <tr>
                                    <td>
                                        <button>Details</button>
                                    </td>
                                    <td>
                                        <button>Share</button>
                                    </td>
                                </tr>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </Table>
    )
}

export default TablePatients
