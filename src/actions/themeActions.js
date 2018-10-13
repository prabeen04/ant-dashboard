import { SET_DARK_THEME, SET_LIGHT_THEME } from "../types/themeActionTypes";

export const setLightTheme = theme => dispatch => {
    console.log(theme)
    dispatch({
        type: SET_LIGHT_THEME,
        payload: theme
    })
}

export const setDarkTheme = theme => dispatch => {
    console.log(theme)
    dispatch({
        type: SET_DARK_THEME,
        payload: theme
    })
}