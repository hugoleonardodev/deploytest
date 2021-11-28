import { ConfigsDataActions, ISetIsLoading, ISwitchThemeAction } from '@store/constants/configsTypes'

/**
 * An action to set a list with the first 50 patients from the random user API.
 * @param shouldThemeSwitch
 * @default false
 * @returns return an action creator with `type` and `payload`
 * @example
 * import { dispatch } from 'redux'
 * import { useSelector } from 'react-redux'
 *
 * const { isDarkTheme } = useSelector((state: State) => state)
 *
 * switchTheme(!isDarkTheme) =>
 * ({
 *   type: ConfigsDataActions.SWITCH_THEME,
 *   payload: !isDarkTheme,
 * })
 */
export const switchTheme = (shouldThemeSwitch: boolean): ISwitchThemeAction => ({
    type: ConfigsDataActions.SWITCH_THEME,
    payload: shouldThemeSwitch,
})

/**
 * An action to trigger loading when waiting for API responses.
 * @param isLoading
 * @default true
 * @returns return an action creator with `type` and `payload`
 * @example
 * export const getPatientsByPageThunk =
 *  (page = 1) =>
 *      async (dispatch: Dispatch<IPaginationLoadPatientsAction | ISetIsLoading>): Promise<void> => {
 *          dispatch(setIsLoading(true))
 *
 *          const moreFiftyPatientsData = await getPatientsByPage(page)
 *
 *          if (moreFiftyPatientsData.status === __200_OK__) {
 *              dispatch(paginationLoadPatients(moreFiftyPatientsData.data))
 *          }
 *
 *          dispatch(setIsLoading(false))
 *      }
 */
export const setIsLoading = (isLoading: boolean): ISetIsLoading => ({
    type: ConfigsDataActions.SET_IS_LOADING,
    payload: isLoading,
})

/**
 * A union type with all the actions creators for user's configs.
 * In order to pass more than one action to `reducer`, we must group it with one alias.
 */
export type TConfigsActionsCreators = ISwitchThemeAction | ISetIsLoading
