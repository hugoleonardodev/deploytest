import { ConfigsDataActions } from '@store/constants/configsTypes'

/**
 * An object with the `type` and `payload` for switch theme actions.
 * @param payload
 * @default false
 */
export interface ISwitchThemeAction {
    type: string
    payload: boolean
}

/**
 * An action creator to handle redux store's users switch theme action.
 * @param shouldThemeSwitch
 * @returns an object with `type` and `payload` to `dispatch` redux store's switch theme config action
 * @example
 * import { useSelector } from 'react-redux'
 *
 * const { isDarkTheme } = useSelector(state => state.initialState)
 *
 * switchTheme(!isDarkTheme) =>
 * ({
 *   type: "SWITCH_THEME",
 *   payload: !isDarkTheme
 * })
 */
export const switchTheme = (shouldThemeSwitch: boolean): ISwitchThemeAction => ({
    type: ConfigsDataActions.SWITCH_THEME,
    payload: shouldThemeSwitch,
})

/**
 * A union type with all the actions creators for user's configs.
 * In order to pass more than one action to `reducer`, we must group it with one alias.
 * @example
 * export type TConfigsActionsCreators = IUpdateName | IUpdateEmail | ISwitchThemeAction
 * @default ISwitchThemeAction
 */
export type TConfigsActionsCreators = ISwitchThemeAction
