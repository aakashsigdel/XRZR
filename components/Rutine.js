'use strict';

import React, {
  Component,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from '../styles/Rutine_styles'

export default class Rutine extends Component {
  render () {
    return (
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
    );
  }
}
