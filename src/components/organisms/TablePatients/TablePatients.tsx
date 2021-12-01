import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Button, Table } from 'reactstrap'

import { ReactComponent as EyeIcon } from '@common/assets/red_eye.svg'
import { ReactComponent as ShareIcon } from '@common/assets/share.svg'
import { getUsDateFormat } from '@common/functions'
import Skeleton from '@components/atoms/Skeleton'
import ModalPatient from '@components/molecules/ModalPatient'
import NotFound from '@components/molecules/NotFound'
import { IRootStateWithReducers } from '@store/constants/_rootReducerTypes'

import { TableRow } from './Table.styles'

const TEN = 10
const skeletonsLines = [...Array.from({ length: TEN }).keys()]

const TablePatients: React.FC = () => {
    const { search, results } = useSelector((state: IRootStateWithReducers) => state.patients)
    const { isLoading } = useSelector((state: IRootStateWithReducers) => state.configs)
    const history = useHistory()
    const hanldeSharePatient = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            history.push(`/patient/${event.currentTarget.value}`)
        },
        [history],
    )
    if (results.length === 0 && search !== '') {
        return <NotFound patient />
    }
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
                {isLoading || results.length === 0
                    ? skeletonsLines.map((skeleton, index) => (
                          <tr key={`patient-${index}-#${skeleton}`}>
                              <th scope="row">{index + 1}</th>
                              <td>
                                  <Skeleton isLarge />
                              </td>
                              <td>
                                  <Skeleton />
                              </td>
                              <td>
                                  <Skeleton />
                              </td>
                              <td>
                                  <Skeleton />
                              </td>
                              <td>
                                  <Skeleton />
                              </td>
                          </tr>
                      ))
                    : results.map((patient, index) => (
                          <TableRow key={`patient-${index}-id-${patient.login.uuid}`}>
                              <th scope="row">{index + 1}</th>
                              <td>{`${patient.name.last}, ${patient.name.first}`}</td>
                              <td>{patient.gender}</td>
                              <td>{getUsDateFormat(patient.dob.date)}</td>
                              <td>
                                  <ModalPatient patient={patient}>
                                      <EyeIcon /> <span>Details</span>
                                  </ModalPatient>
                              </td>
                              <td>
                                  <Button value={patient.login.uuid} onClick={hanldeSharePatient} color="success">
                                      <ShareIcon /> <span>Share</span>
                                  </Button>
                              </td>
                          </TableRow>
                      ))}
            </tbody>
        </Table>
    )
}

export default TablePatients
