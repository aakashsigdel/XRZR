'use strict';

import React, {
  Component,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import NavBar from './NavBar';
import styles from '../styles/Rutine_styles'

export default class Rutine extends Component {
  render () {
    return (
      <View>
      <NavBar
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
          rightClickFunc={ _=> {this.props.navigator.push({name:"rutine_adder"})} }
          backgroundColor="#F90035"
        />
        <ScrollView contentContainerStyle={styles.container}>
          {
            ( _=> {
              return this.props.exercises.map ((item, index) => {
                return (
                  <View
                    key={index}
                    style={styles.row}
                  >
                    <Image
                      source={require('../assets/images/rowPlaceholder.png')}
                      style={styles.titleImage}
                    />
                    <Text
                      style={styles.text}
                    >
                      {item.title} 
                    </Text>
                  </View>
                  )
              })
            })()
          }
        </ScrollView>
      </View>
    );
  }
}
