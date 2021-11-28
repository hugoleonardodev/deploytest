export interface IUserConfigs {
    user: string
    email: string
    avatar: string
    isDarkTheme: boolean
}

/**
 * User's configs data store actions.
 * @SWITCH_THEME switch theme from `light` to `dark` and vice-versa.
 */

export enum ConfigsDataActions {
    SWITCH_THEME = 'SWITCH_THEME',
}
