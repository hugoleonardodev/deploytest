import { TPatientsInitialState } from '@store/reducers/patientsReducer'

import { IUserConfigs } from './configsTypes'

export interface IRootStateWithReducers {
    configs: IUserConfigs
    patients: TPatientsInitialState
    router: History
}
