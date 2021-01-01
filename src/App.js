import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import configureStore from './store';

class App extends Component {
    render() {
        const store = configureStore();
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <ImageGrid />
                </Fragment>
            </Provider>
        );
    }
}

export default App;
