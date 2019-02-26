import { ADD_ORDER, REMOVE_ORDER } from 'constants/actions';

export const addOrder = (orderId) => ({
    type: ADD_ORDER,
    payload: orderId
})

export const removeOrder = (orderId) => ({
    type: REMOVE_ORDER,
    payload: orderId
})