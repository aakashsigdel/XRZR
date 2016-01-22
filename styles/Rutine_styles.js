import {
  Dimnsions,
  StyleSheet,
} from 'react-native';
import { VIEWPORT } from '../constants/appConstants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181C20',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Lato-Light',
  },
  titleImage: {
    height: 80,
    width: 80,
  },
});
