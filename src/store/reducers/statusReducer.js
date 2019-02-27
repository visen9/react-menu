import { PAYMENT_SUCCESS, PAYMENT_FAILURE } from "../../constants/actions";

const initialState = {
    payment: {
        success: false,
        error: false
    }    
};
export default function statusReducer(state = initialState, action = {}) {
    let newState = { ...state };
    switch (action.type) {
        case PAYMENT_SUCCESS:
            newState.payment.success = true;
            return newState;
        case PAYMENT_FAILURE:
            newState.payment.errors = true;
            return newState;
        default:
            return newState;
    }
}