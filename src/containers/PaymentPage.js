import React from 'react';
import Form from 'components/Form';
import { connect } from 'react-redux';
import { paymentRequest } from '../store/actions/paymentAction';

const PaymentPage = ({ pay }) => (
    <>
        <h1>PaymentPage</h1>
        <Form pay={pay} />
    </>
)

export default connect(null, {
    pay: paymentRequest
})(PaymentPage);

