import { ADD_ORDER, REMOVE_ORDER } from "../../constants/actions";


export default function orderReducer(state = [], action = {}) {
    let result;
    const foundIndex = state.findIndex((item) => item.id === action.payload);
    switch (action.type) {
        case ADD_ORDER:
            if (state.length === 0 || foundIndex < 0) {
                result = [...state, { id: action.payload, quantity: 1 }];
            }
            else {
                let updatedState = [...state];
                updatedState[foundIndex].quantity = updatedState[foundIndex].quantity + 1;
                result = updatedState;
            }
            return result;
        case REMOVE_ORDER:
            return state.filter((item) => {
                if (item.id === action.payload) {
                    if (item.quantity <= 1) return false;
                    item.quantity = item.quantity - 1;
                }
                return true;
            });
        default:
            return state;
    }
}