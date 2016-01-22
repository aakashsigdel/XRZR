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
    marginBottom: 6,
  },
  text: {
    fontSize: 18,
    fontWeight: '100',
    fontFamily: 'Lato-Light',
    color: 'grey',
  },
  titleImage: {
    height: 75,
    width: 75,
    marginRight: 20,
  },
});
