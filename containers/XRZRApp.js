'use strict';

import React, {
  Component,
  Dimensions,
  Image,
  Navigator,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Rutine from '../components/Rutine';

export default class XRZRApp extends Component {
  constructor (props) {
    super(props);
  }

  componentWillUnmount () {
    this._listeners && this._listeners.forEach (listener => listener.remove());
  }

  _setNavigatorRef = navigator => {
    if (navigator !== this._navigator)
      this._navigator = navigator;

    if (navigator) {
      let callbackViewWillFocus = event => {
        console.log('Its time to show hide things yo!');
      };
      let callbackViewDidFocus = event => {
        console.log('Its time to start the animations, drum roll please!');
      }

      this._listeners = [
        navigator.navigationContext.addListener('willfocus', callbackViewWillFocus),
        navigator.navigationContext.addListener('didfocus', callbackViewDidFocus),
      ];
    }
  };

  _renderScene = (route, navigator) => {
    switch (route.name) {
      case 'rutine':
        return <Rutine
          dispatch={this.props.dispatch}
          exercises={this.props.state.exercises}
        />;
    }
  };

  render () {
    const { state, dispatch } = this.props;
    return (
      <Navigator
        ref={this._setNavigatorRef}
        initialRoute={{name: 'rutine'}}
        renderScene={this._renderScene}
        sceneStyle={{backgroundColor: 'black'}}
      />
    );
  }
}

export default connect(state => ({state: state}))(XRZRApp)
