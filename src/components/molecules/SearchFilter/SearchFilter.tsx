import React from 'react'
import { useDispatch } from 'react-redux'
import { FormGroup, Input, Label } from 'reactstrap'

import { ReactComponent as SearchIcon } from '@common/assets/search.svg'
import { getSearchQuerySubmitThunk } from '@store/actions/patientsActions'
// import { IRootStateWithReducers } from '@store/constants/_rootReducerTypes'

import { SearchFilterForm, SubmitSearchButton } from './SearchFilter.styles'

const SearchFilter: React.FC = () => {
    const dispatch = useDispatch()
    const inputReference = React.useRef(null)
    const selectReference = React.useRef(null)

    const handleSubmit = React.useCallback(
        (event: React.SyntheticEvent) => {
            event.preventDefault()
            const target = event.target as typeof event.target & {
                searchInput: { value: string }
                selectFilter: { value: '' | 'name' | 'nation' }
            }
            console.log(inputReference, selectReference)
            dispatch(getSearchQuerySubmitThunk(target.searchInput.value, target.selectFilter.value))
        },
        [dispatch],
    )
    return (
        <SearchFilterForm inline onSubmit={handleSubmit}>
            <FormGroup floating>
                <Input
                    id="searchInput"
                    name="searchInput"
                    placeholder="Search for..."
                    type="text"
                    ref={inputReference.current}
                />
                <Label for="searchInput">Search for...</Label>
            </FormGroup>{' '}
            <FormGroup floating>
                <Input id="selectFilter" name="selectFilter" type="select" ref={selectReference.current}>
                    <option value=""></option>
                    <option value="name">Name</option>
                    <option value="nation">Nationality</option>
                </Input>
                <Label for="selectFilter">Filter:</Label>
            </FormGroup>
            <SubmitSearchButton type="submit">
                <SearchIcon />
            </SubmitSearchButton>
        </SearchFilterForm>
    )
}

export default SearchFilter
