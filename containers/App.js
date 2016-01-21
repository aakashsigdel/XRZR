'use strict';

import React, { Component, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import xrzrApp from '../reducers';
import XRZRApp from './XRZRApp';

let store = createStore(xrzrApp);

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <XRZRApp />
      </Provider>
    );
  }
}
