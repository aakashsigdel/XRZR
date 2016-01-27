import { StyleSheet } from 'react-native';
import { VIEWPORT } from '../constants/appConstants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentStyle: {
    width: VIEWPORT.width,
    height: VIEWPORT.width,
  },
  progressBar: {
    flexDirection: 'row',
    width: VIEWPORT.width,
    height: 5,
  },
  progressBarCompleted: {
    backgroundColor: '#E12440',
    height: 5,
  },
  progressBarRemaining: {
    height: 5,
  },
  timer: {
    fontSize: 12,
    fontWeight: '100',
    fontFamily: 'Lato-Light',
    color: 'grey',
    marginTop: 25,
    marginBottom: 25,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  recordingButton: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'red',
    borderColor: 'white',
    borderWidth: 2,
  },
  recordButton: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordButtonText: {
    fontSize: 16,
    color: 'white',
  }
})
