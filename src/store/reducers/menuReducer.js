import { FETCH_MENU_SUCCESS, FETCH_MENU_FAILURE } from "constants/actions";

const initialState = {
    items: []
}
export default function menuReducer(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_MENU_SUCCESS:
            return {
                ...state,
                items: action.payload,
                errors: null
            };
        case FETCH_MENU_FAILURE:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;
    }
}