import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
const HomePage = lazy(() => import('containers/HomePage'));
const PaymentPage = lazy(() => import('containers/PaymentPage'));
const ResultPage = lazy(() => import('containers/ResultPage'));

class App extends Component {
    render() {
        const { existsOrders, paymentDone } = this.props;

        return (
            <BrowserRouter>
                <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        {existsOrders && <Route exact path="/payment" component={(props) => <PaymentPage {...props} />} />}
                        {paymentDone && <Route exact path="/success" component={(props) => <ResultPage {...props} />} />}
                        <Route path="/:idMenu?" component={(props) => <HomePage {...props} />} />
                        <Redirect to="/" />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        );
    }
}

//valori che mi serve prendere da redux
const mapStateToProps = (state) => ({
    existsOrders: state.order.length > 0,
    paymentDone: state.status.payment.success
})
//azioni che voglio connettere con Redux
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(App);
