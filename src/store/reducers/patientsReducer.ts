import { TPatientsActionsCreators } from '@store/actions/patientsActions'
import { IPatientRootObject, PatientsDataActions } from '@store/constants/patientsTypes'

const initialState: IPatientRootObject = {
    results: [],
    info: {
        seed: '',
        results: 0,
        page: 0,
        version: '',
    },
}

const patientsReducer = (
    state: IPatientRootObject = initialState,
    action: TPatientsActionsCreators,
): IPatientRootObject => {
    switch (action.type) {
        case PatientsDataActions.INITIAL_LIST_PATIENTS:
            return {
                results: [...state.results, ...action.payload.results],
                info: {
                    seed: action.payload.info.seed,
                    results: state.info.results + action.payload.info.results,
                    page: action.payload.info.page,
                    version: action.payload.info.version,
                },
            }
        case PatientsDataActions.PAGINATION_LOAD_PATIENTS:
            return {
                results: [...state.results, ...action.payload.results],
                info: {
                    ...state.info,
                    results: state.info.results + action.payload.info.results,
                },
            }
        default:
            return state
    }
}

export default patientsReducer
