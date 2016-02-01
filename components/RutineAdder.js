import React, {
    Component,
    ListView,
    TouchableOpacity,
    View, Image, Text
} from 'react-native';

import NavBar from "./NavBar";
import styles from "../styles/Rutine_styles";

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

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
  constructor(props){
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows(Object.keys(this.props.exercises)),
    };
  }

  _populateList(key){
    const onItemSelect = itemId =>{
      this.props.onExerciseItemSelect(itemId);
      this.props.navigator.pop();
    };

    let exercise = this.props.exercises[key];
    return <RutineItem item={exercise}
                      itemId={exercise['id']}
                      onItemSelect={_=> onItemSelect(exercise['id'])}
    />
  };

  render(){
    return (
      <View style={{flex:1}}>
        <NavigationBar navigator={this.props.navigator} />
        <ListView dataSource={this.state.dataSource}
                  renderRow={this._populateList.bind(this)} />

      </View>
    );
  }
}



