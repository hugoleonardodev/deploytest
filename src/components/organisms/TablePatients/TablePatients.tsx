import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Button, Table } from 'reactstrap'

import { ReactComponent as EyeIcon } from '@common/assets/red_eye.svg'
import { ReactComponent as ShareIcon } from '@common/assets/share.svg'
import { ReactComponent as SortDownIcon } from '@common/assets/sort_down.svg'
import { ReactComponent as SortUpIcon } from '@common/assets/sort_up.svg'
import { getUsDateFormat, selectSortOrder } from '@common/functions'
import Skeleton from '@components/atoms/Skeleton'
import ModalPatient from '@components/molecules/ModalPatient'
import NotFound from '@components/molecules/NotFound'
import { IRootStateWithReducers } from '@store/constants/_rootReducerTypes'

import { NameTh, TableRow } from './Table.styles'

const TEN = 10
const skeletonsLines = [...Array.from({ length: TEN }).keys()]
const FIVE = 5
const skeletonsRows = [...Array.from({ length: FIVE }).keys()]

const TablePatients: React.FC = () => {
    const { search, results } = useSelector((state: IRootStateWithReducers) => state.patients)
    const { isLoading } = useSelector((state: IRootStateWithReducers) => state.configs)
    const history = useHistory()
    const [shouldSort, setShouldSort] = React.useState(false)
    const [isAscendent, setIsAscendent] = React.useState(true)
    const hanldeSharePatient = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            history.push(`/patient/${event.currentTarget.value}`)
        },
        [history],
    )
    const handleSortName = React.useCallback(() => {
        selectSortOrder(shouldSort, setShouldSort, isAscendent, results)
        setIsAscendent(!isAscendent)
    }, [isAscendent, results, shouldSort])

    if (results.length === 0 && search !== '') {
        return <NotFound patient />
    }
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <NameTh>
                        <span>Name</span>{' '}
                        {isAscendent ? (
                            <SortDownIcon onClick={handleSortName} />
                        ) : (
                            <SortUpIcon onClick={handleSortName} />
                        )}
                    </NameTh>
                    <th>Gender</th>
                    <th>Birth</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {isLoading || results.length === 0
                    ? skeletonsLines.map((skeleton, index) => (
                          <tr key={`patient-lines-${index}-#${skeleton}`}>
                              <th scope="row">{index + 1}</th>
                              {skeletonsRows.map((skeleton, index) => (
                                  <td key={`patient-row-${index}-#${skeleton}`}>
                                      <Skeleton />
                                  </td>
                              ))}
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
