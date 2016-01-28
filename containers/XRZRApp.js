'use strict';

import React, {
  Component,
  Dimensions,
  Image,
  Navigator,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import Rutine from '../components/Rutine';
import RutineAdder from "../components/RutineAdder";
import {addUserPlan} from "../actions/index"

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
          userPlans={this.props.state.userPlans}
          exercises={this.props.state.exercises}
          navigator={navigator}
        />;
      case 'rutine_adder':
        return <RutineAdder
          exercises={this.props.state.exercises}
          state={this.props.state}
          navigator={navigator}
          onExerciseItemSelect={
            (exerciseId)=>{this.props.dispatch(addUserPlan(exerciseId))}
            }
          />
      default:
        return <Text style={{color:"white"}}>
          You are doomed!!!
        </Text>
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
        style={{flex:1}}
      />
    );
  }
}

export default connect(state => ({state: state}))(XRZRApp)
