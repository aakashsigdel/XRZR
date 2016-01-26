import React, {
    Component,
    ScrollView,
    TouchableOpacity,
    View, Image, Text
} from 'react-native';

import NavBar from "./NavBar";
import styles from "../styles/Rutine_styles";

class NavigationBar extends Component {
  render(){
    return (
      <NavBar
        midText="Add Rutine"
        midStyle={{marginTop: 10}}
        rightText="x"
        rightStyle={{
            fontSize: 35,
            fontWeight: '200',
            marginTop: 5
          }}
        rightClickFunc={ _=> {this.props.navigator.pop()} }
        backgroundColor="#F90035"
      />
    )
  }
}


class RutineItem extends Component {
  render(){
    let item = this.props.item;
    return (
        <TouchableOpacity
            onPress={()=>{
              this.props.onItemSelect(this.props.itemId);

             }}
            style={styles.row} >
          <Image source={require("../assets/images/rowPlaceholder.png")}
                 style = {styles.titleImage} />
          <Text style={styles.text} >
            {this.props.item.title}
          </Text>
        </TouchableOpacity>
    )
  }
}

export default class RutineAdder extends Component {
  render(){
    let exerciseList = this.props.exercises.map(
      (exercise, index)=>
        <RutineItem key={index} item={exercise}
                    itemId={index}
                    onItemSelect={
                      (itemId)=>{
                        this.props.onExerciseItemSelect(itemId);
                        this.props.navigator.pop();
                      }
                    }
        />
    );

    return (
      <View>
        <NavigationBar navigator={this.props.navigator} />
        <ScrollView contentContainerStyle={styles.container} >
          { exerciseList }
        </ScrollView>
      </View>
    );
  }
}

