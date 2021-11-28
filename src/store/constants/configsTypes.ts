export interface IUserConfigs {
    user: string
    email: string
    avatar: string
    isDarkTheme: boolean
    isLoading: boolean
}

/**
 * User's configs data store actions.
 * @SWITCH_THEME switch theme from `light` to `dark` and vice-versa.
 * @SET_IS_LOADING set isLoadig `true` when is needed and and vice-versa.
 */

export enum ConfigsDataActions {
    SWITCH_THEME = 'SWITCH_THEME',
    SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface ISwitchThemeAction {
    type: ConfigsDataActions.SWITCH_THEME
    payload: boolean
}

export interface ISetIsLoading {
    type: ConfigsDataActions.SET_IS_LOADING
    payload: boolean
}

/**
 * A union type with all the actions creators for user's configs.
 * In order to pass more than one action to `reducer`, we must group it with one alias.
 */
export type TConfigsActionsCreators = ISwitchThemeAction | ISetIsLoading
