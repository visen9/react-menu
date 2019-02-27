import { FETCH_MENU_SUCCESS, FETCH_MENU_REQUEST, FETCH_MENU_FAILURE } from 'constants/actions';

export const fetchMenuRequest = () => ({
    type: FETCH_MENU_REQUEST
})

export const fetchMenuSuccess = (menu) => ({
    type: FETCH_MENU_SUCCESS,
    payload: menu
})

export const fetchMenuFailure = (errors) => ({
    type: FETCH_MENU_FAILURE,
    payload: errors
})