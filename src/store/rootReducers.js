import { combineReducers } from 'redux';
import orderReducer from 'store/reducers/orderReducer';
import paymentReducer from 'store/reducers/paymentReducer';
import selectedReducer from 'store/reducers/selectedReducer';

export default function createRootReducer() {
    return combineReducers({
        order: orderReducer,
        payment: paymentReducer,
        selected: selectedReducer
    });
}