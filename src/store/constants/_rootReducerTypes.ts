import { IUserConfigs } from './configsTypes'

export interface IRootStateWithReducers {
    configs: IUserConfigs
    patients: PatientsAPI.IPatientRootObject
    router: History
}
