import { Dimensions, StyleSheet } from 'react-native';

const VIEWPORT = Dimensions.get('window');
const HEADERBAR_HEIGHT = 0.096 * VIEWPORT.height;

export default styles = {
  container: {
    height: HEADERBAR_HEIGHT, 
    width: VIEWPORT.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'blue',
  },
  leftContainer: {
    minWidth: 64,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  midContainer: {
    minWidth: 128,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    minWidth: 64,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  clickable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}
