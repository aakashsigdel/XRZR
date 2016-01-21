'use strict';

import React, {
  Component,
  Image,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

export default class XRZRApp extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { state, dispatch } = this.props;
    return (
      <View>
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
          midText="TRX Rutine"
          midStyle={{marginTop: 10}}
          rightText="+"
          rightStyle={{
            fontSize: 40,
            fontWeight: '200',
            marginTop: 10,
          }}
          backgroundColor="#F90035"
        />
      {( _ => {
        return state.map((exercise, index) => {
          return (
            null
          );
        })
      })()}
      </View>
    );
  }
}

export default connect(state => ({
  state: state.exercises
}))(XRZRApp)
