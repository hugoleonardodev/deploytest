import { TConfigsActionsCreators } from '@store/actions/configsActions'
import { ConfigsDataActions } from '@store/constants/configsTypes'

export interface IUserConfig {
    user: string
    email: string
    avatar: string
    isDarkTheme: boolean
}

const initialState = {
    user: 'Hugo Leonardo',
    email: 'hugoleonardo.dev@gmail.com',
    avatar: 'https://github.com/hugoleonardodev.png',
    isDarkTheme: false,
}

const configsReducer = (state: IUserConfig = initialState, action: TConfigsActionsCreators): IUserConfig => {
    switch (action.type) {
        case ConfigsDataActions.SWITCH_THEME:
            return { ...state, isDarkTheme: action.payload }
        default:
            return state
    }
}

export default configsReducer
