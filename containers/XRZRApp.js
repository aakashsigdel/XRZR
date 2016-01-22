'use strict';

import React, {
  Component,
  Dimensions,
  Image,
  Navigator,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import Rutine from '../components/Rutine';

const VIEWPORT = Dimensions.get('window');
const HEADERBAR_HEIGHT = 0.096 * VIEWPORT.height;

const navBar = (
  <NavBar
    leftText="aakash"
    leftCustom={
      <Image
        source={require('../assets/images/hamburger.png')}
        style={{
          width: 25,
          height: 25,
          resizeMode: 'contain',
          marginTop: 10,
        }}
      />
      }
      leftClickFunc={ _=> {} }
      midText="TRX Rutine"
      midStyle={{marginTop: 10}}
      rightText="+"
      rightStyle={{
        fontSize: 40,
        fontWeight: '200',
        marginTop: 10,
      }}
      rightClickFunc={ _=> {} }
      backgroundColor="#F90035"
    />
);

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

  _selectRoute = (route, navigator) => {
    console.log(route.name);
    switch (route.name) {
      case 'rutine':
        return <Rutine
          {...this.props}
        />;
    }
  };

  _renderScene = (route, navigator) => {
    return (
      <View
        style={{
          paddingTop: HEADERBAR_HEIGHT,
        }}
      >
        {this._selectRoute(route, navigator)}
      </View>
    );
  };

  render () {
    const { state, dispatch } = this.props;
    return (
      <Navigator
        ref={this._setNavigatorRef}
        initialRoute={{name: 'rutine'}}
        renderScene={this._renderScene}
        sceneStyle={{backgroundColor: 'black'}}
        navigationBar={navBar}
      />
      // <View>
      //     {( _ => {
      //       return state.map((exercise, index) => {
      //         return (
      //           null
      //         );
      //       })
      //     })()}
      //   </View>
    );
  }
}

export default connect(state => ({
  state: state.exercises
}))(XRZRApp)
