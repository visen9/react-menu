import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>

                <div>This is app</div>

            </Provider>
        );
    }
}

export default App;
