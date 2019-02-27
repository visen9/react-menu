import { combineReducers } from 'redux';
import orderReducer from 'store/reducers/orderReducer';
import paymentReducer from 'store/reducers/paymentReducer';
import selectedReducer from 'store/reducers/selectedReducer';
import statusReducer from 'store/reducers/statusReducer';
import menuReducer from 'store/reducers/menuReducer';

export default function createRootReducer() {
    return combineReducers({
        order: orderReducer,
        payment: paymentReducer,
        selected: selectedReducer,
        status: statusReducer,
        menu: menuReducer
    });
}