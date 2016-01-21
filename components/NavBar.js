'use strict'

/*
 * Custom NavBar Component
 * =======================
 * props:
 *    - left, mid, right => text for the three places for navbar
 *    - customLeft, customMid, customRight => custom element for the three places of navbar
 *    - leftClickFunc, midClickFunc, rightClickFunc => function for all three places
*/

import React, {
  Component,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles/NavBar_styles';

export default class NavBar extends Component {
  _generateInnerElement = (element, textStyles, customElement) => {
    if (customElement) {
      return React.cloneElement(customElement)
    }
    return <Text style={[styles.text, textStyles]}>{element}</Text>;
  };

  _generateComponent = (
    element, customElement, styles,
    func
  ) => {
    if(func) {
      return (
        <TouchableOpacity
          acitveOpacity={0.7}
          style={{flex: 1}}
        >
          {this._generateInnerElement(element, styles, customElement)}
        </TouchableOpacity>

      );
    }
    return (this._generateInnerElement(element, styles, customElement));
  };

  render () {
    const {
      leftText, midText, rightText,
      leftClickFunc, midClickFunc, rightClickFunc,
      leftCustom, midCustom, rightCustom,
      leftStyle, midStyle, rightStyle,
      height, backgroundColor,
    } = this.props;

    return (
      <View style={[
        styles.container,
        height ? {height: height} : null,
        backgroundColor ? {backgroundColor: backgroundColor} : null,
      ]}>
        <View style={styles.leftContainer}>
          {
            this._generateComponent(
              leftText, leftCustom, leftStyle,
              leftClickFunc
            )
          }
        </View>
        <View style={styles.midContainer}>
          {
            this._generateComponent(
              midText, midCustom, midStyle,
              midClickFunc
            )
          }
        </View>
        <View style={styles.rightContainer}>
          {
            this._generateComponent(
            rightText, rightCustom, rightStyle,
            rightClickFunc
            )
          }
        </View>
      </View>
    )
  }
}
