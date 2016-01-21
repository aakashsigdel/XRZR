'use strict';

import React, {
  Component,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

export default class XRZRApp extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { state, dispatch } = this.props;
    return (
      <View>
      {( _ => {
        return state.map((exercise, index) => {
          return (
            <Text
              key={index}
              style={{color: 'red', fontSize: 30}}
            >
              {exercise.title}
            </Text>
          );
        })
      })()}
      </View>
    );
  }
}

export default connect(state => ({
  state: state.exercises
}))(XRZRApp);
