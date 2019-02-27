import { PAYMENT_REQUEST, PAYMENT_FAILURE, PAYMENT_SUCCESS } from 'constants/actions';

export const paymentRequest = (paymentData) => ({
    type: PAYMENT_REQUEST,
    payload: paymentData
})

export const paymentSuccess = (transactionId) => ({
    type: PAYMENT_SUCCESS,
    payload: transactionId
})

export const paymentFailure = (errors) => ({
    type: PAYMENT_FAILURE,
    payload: errors
})