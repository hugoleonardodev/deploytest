import { IUserConfigs } from './configsTypes'
import { IPatientRootObject } from './patientsTypes'

export interface IRootStateWithReducers {
    configs: IUserConfigs
    patients: IPatientRootObject
    router: History
}
