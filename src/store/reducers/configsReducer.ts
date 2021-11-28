import { TConfigsActionsCreators } from '@store/actions/configsActions'
import { ConfigsDataActions, IUserConfigs } from '@store/constants/configsTypes'

const initialState = {
    user: 'Hugo Leonardo',
    email: 'hugoleonardo.dev@gmail.com',
    avatar: 'https://github.com/hugoleonardodev.png',
    isDarkTheme: false,
    isLoading: true,
}

const configsReducer = (state: IUserConfigs = initialState, action: TConfigsActionsCreators): IUserConfigs => {
    switch (action.type) {
        case ConfigsDataActions.SWITCH_THEME:
            return { ...state, isDarkTheme: action.payload }
        case ConfigsDataActions.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}

export default configsReducer
