import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormGroup, Input, Label } from 'reactstrap'

import { ReactComponent as SearchIcon } from '@common/assets/search.svg'
import Filter from '@components/atoms/Filter'
import { getSearchQuerySubmitThunk, removeSearchFilter } from '@store/actions/patientsActions'
import { IRootStateWithReducers } from '@store/constants/_rootReducerTypes'
import { IFilter } from '@store/reducers/patientsReducer'

import { SearchFilterForm, SubmitSearchButton, SubmitSearchFiltersContainer } from './SearchFilter.styles'

const SearchFilter: React.FC = () => {
    const dispatch = useDispatch()
    const {
        // info: { page },
        filters,
        // search,
    } = useSelector((state: IRootStateWithReducers) => state.patients)
    const inputReference = React.useRef(null)
    const selectReference = React.useRef(null)

    const handleSubmit = React.useCallback(
        (event: React.SyntheticEvent) => {
            event.preventDefault()
            const target = event.target as typeof event.target & {
                searchInput: { value: string }
                selectFilter: { value: '' | 'name' | 'nation' }
            }
            const queryFilters: IFilter[] = [{ query: target.searchInput.value, filter: target.selectFilter.value }]
            dispatch(getSearchQuerySubmitThunk(target.searchInput.value, queryFilters, filters))
        },
        [dispatch, filters],
    )

    const handleRemoveFilter = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault()
            if (event.currentTarget.name === 'namePill') {
                console.log(event.currentTarget.value)
                dispatch(removeSearchFilter(Number.parseInt(event.currentTarget.value, 10)))
            }
            if (event.currentTarget.name === 'nationPill') {
                console.log(event.currentTarget.name)
                dispatch(removeSearchFilter(Number.parseInt(event.currentTarget.value, 10)))
            }
            const queryFilters: IFilter[] = [
                ...filters.slice(0, Number.parseInt(event.currentTarget.value, 10)),
                ...filters.slice(Number.parseInt(event.currentTarget.value, 10) + 1),
            ]
            const lastQuery = filters.find(filter => filter.filter !== event.currentTarget.name.split('P')[0])
            console.log('lastQuery', lastQuery)
            dispatch(getSearchQuerySubmitThunk(lastQuery ? lastQuery.query : '', queryFilters, []))
        },
        [dispatch, filters],
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
            <SubmitSearchFiltersContainer>
                {filters.length > 0 ? (
                    filters.map(({ query, filter }, index) => (
                        <Filter
                            query={query}
                            filter={filter}
                            index={index}
                            key={`filter-${index}-${filter}`}
                            removeFilter={handleRemoveFilter}
                        />
                    ))
                ) : (
                    <div>No filters applied</div>
                )}
            </SubmitSearchFiltersContainer>
            <SubmitSearchButton type="submit">
                <SearchIcon />
            </SubmitSearchButton>
        </SearchFilterForm>
    )
}

export default SearchFilter
