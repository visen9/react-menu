import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from 'store/rootReducers';
import rootSaga from 'store/rootSagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export default function configureStore() {
    const store = createStore(
        createRootReducer(),
        composeWithDevTools(applyMiddleware(...middlewares)),
    );
    sagaMiddleware.run(rootSaga);
    return store;
}
