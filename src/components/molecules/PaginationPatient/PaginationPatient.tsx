import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PaginationItem, PaginationLink } from 'reactstrap'

import { getSearchQuerySubmitThunk } from '@store/actions/patientsActions'
import { IRootStateWithReducers } from '@store/constants/_rootReducerTypes'

import { PatientPagination } from './PaginationPatient.styles'

const PaginationPatient: React.FC = () => {
    const dispatch = useDispatch()
    const {
        info: { page },
        search,
        filter,
    } = useSelector((state: IRootStateWithReducers) => state.patients)

    const handleNextPage = React.useCallback(() => {
        dispatch(getSearchQuerySubmitThunk(search, filter, page + 1))
    }, [dispatch, filter, page, search])
    const handleNextTenPages = React.useCallback(() => {
        dispatch(getSearchQuerySubmitThunk(search, filter, page + 10))
    }, [dispatch, filter, page, search])
    const handlePreviousPage = React.useCallback(() => {
        dispatch(getSearchQuerySubmitThunk(search, filter, page - 1))
    }, [dispatch, filter, page, search])
    const handlePreviousTenPages = React.useCallback(() => {
        dispatch(getSearchQuerySubmitThunk(search, filter, page - 10))
    }, [dispatch, filter, page, search])
    return (
        <PatientPagination aria-label="pagination" size="lg">
            <PaginationItem disabled={page < 11}>
                <PaginationLink first onClick={handlePreviousTenPages} />
            </PaginationItem>
            <PaginationItem disabled={page < 2}>
                <PaginationLink previous onClick={handlePreviousPage} />
            </PaginationItem>
            <PaginationItem disabled={true}>
                <PaginationLink>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink next onClick={handleNextPage} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last onClick={handleNextTenPages} />
            </PaginationItem>
        </PatientPagination>
    )
}

export default PaginationPatient
