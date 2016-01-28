'use strict';

import React, {
  Component,
  Image,
  ScrollView,
  ListView,
  Text,
  View,
} from 'react-native';
import NavBar from './NavBar';
import styles from '../styles/Rutine_styles'

const NavigationBar = (props) => {
  return <NavBar
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
    rightClickFunc={ _=> {props.navigator.push({name:"rutine_adder"})} }
    backgroundColor="#F90035"
  />
}

const ExerciseItem = (props) => {
  return <View
            style={styles.row}
          >
            <Image
              source={require('../assets/images/rowPlaceholder.png')}
              style={styles.titleImage}
            />
            <Text
              style={styles.text}
            >
              {props.userPlanId +". " + props.exerciseTitle}
            </Text>
          </View>
}


export default class Rutine extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  _populateList(key){
    let userPlan = this.props.userPlans[key];
    let selectedExercise = this.props.exercises[userPlan.exerciseId];
    
    return <ExerciseItem
      userPlanId={userPlan.id}
      exerciseTitle={selectedExercise.title}
    />
  }

  _getDataSource(itemList){
    return this.state.dataSource.cloneWithRows(Object.keys(itemList))
  }

  render () {
    let exercises = this.props.exercises;
    return (
      <View style={{flex:1}}>
        <NavigationBar navigator={this.props.navigator} />
        <ListView dataSource={this._getDataSource(this.props.userPlans)}
                  renderRow={this._populateList.bind(this)} />
      </View>
    );
  }
}
