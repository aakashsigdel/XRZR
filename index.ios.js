'use strict';

import React, {
  Component,
  PropTypes,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import xrzrApp from './reducers';

let store = createStore(xrzrApp);

class XRZR extends Component {
  render (
    <Provider store={store}></Provider>
  );
}

AppRegistry.registerComponent('XRZR', () => XRZR);
