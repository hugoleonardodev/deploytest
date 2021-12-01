import { ConfigsDataActions, IUserConfigs, TConfigsActionsCreators } from '@store/constants/configsTypes'

const initialState = {
    user: 'Hugo Leonardo',
    email: 'hugoleonardo.dev@gmail.com',
    avatar: 'https://github.com/hugoleonardodev.png',
    isDarkTheme: false,
    isLoading: true,
    apiQuery: '',
}

const configsReducer = (state: IUserConfigs = initialState, action: TConfigsActionsCreators): IUserConfigs => {
    switch (action.type) {
        case ConfigsDataActions.SWITCH_THEME:
            return { ...state, isDarkTheme: action.payload }
        case ConfigsDataActions.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        case ConfigsDataActions.UPDATE_API_QUERY:
            return { ...state, apiQuery: action.payload }
        default:
            return state
    }
}

export default configsReducer
