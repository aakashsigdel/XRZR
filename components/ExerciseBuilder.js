'use strict';

import React, {
  Component,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Camera from 'react-native-camera';
import Video from 'react-native-video';
import NavBar from './NavBar';
import { VIEWPORT } from '../constants/appConstants';
import styles from '../styles/ExerciseBuilder_style';

export default class ExerciseBuilder extends Component {
  constructor () {
    super();
    this.state = {
      cameraType: 'back',
      recordState: 'init', // can have 'init', 'recording', 'play'
      recordingIndicatorLineLength: 0,
      cameraOrVideo: 'video',
    };
  }

  componentWillUnmount () {
    this._clearInterval();
  }

  render () {
    return (
      <View style={styles.container}>
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
            midText="Exercise Builder"
            midStyle={{marginTop: 10}}
            rightText="NEXT"
            rightStyle={{
              fontSize: 15,
              marginTop: 10,
            }}
            rightClickFunc={ _=> {this.props.navigator.push({name:'rutine'})} }
            backgroundColor="#F90035"
          />
          { this._renderCameraOrVideo(this.state.cameraOrVideo) }
          {/* <Camera */}
          {/*   ref="camera" */}
          {/*   style={styles.camera} */}
          {/*   tyle={this.state.cameraType} */}
          {/*   captureMode={Camera.constants.CaptureMode.video} */}
          {/* /> */}
          <View
            style={[
              styles.progressBar,
              {width: VIEWPORT.width / 14 * this.state.recordingIndicatorLineLength}
            ]}
          >
          </View>
          <Text style={styles.timer}>
          {
            this.state.recordState === 'recording'
            ? 'Length: ' + this.state.recordingIndicatorLineLength + ' sec'
            : null
          }
        </Text>
          <View style={styles.buttonsContainer}>
            {(
              _=> {
                switch (this.state.recordState) {
                  case 'recording':
                    return (
                      <TouchableOpacity
                        onPress={this._handleRecording}
                        style={styles.recordingButton}
                      >
                      </TouchableOpacity>
                      );
                  case 'init':
                  default:
                    return (
                      <TouchableOpacity
                        onPress={this._handleRecording}
                        style={styles.recordButton}
                      >
                        <Text style={styles.recordButtonText}>
                          REC
                        </Text>
                      </TouchableOpacity>
                      );
                }
              }
            )()}
            <TouchableOpacity style={styles.squareButton}></TouchableOpacity>
          </View>
        </View>
    );
  }

  _renderCameraOrVideo = option => {
    if (option === 'camera') {
      return (
        <Camera
          ref="camera"
          style={styles.contentStyle}
          tyle={this.state.cameraType}
          captureMode={Camera.constants.CaptureMode.video}
        />
      );
    } else if (option === 'video') {
      return (
        <Video
          source={{uri: 'assets-library://asset/asset.mov?id=ECD8D9B1-A5DC-41F3-BE5C-6049FCE0D607&ext=mov'}}
          resizeMode="cover"
          style={styles.contentStyle}
        />
      );
    }
  };

  _handleRecording = () => {
    /*
     * TODO: Integrate Video player for playback
    */
   if (this.state.recordState === 'init') {
     this._cameraStateSetter('recording');
    this._captureVideo();
   } else if (this.state.recordState === 'recording'){
     // clear timer  to stop the progress bar
     this._clearInterval()

     // stop the capture
     this.refs.camera.stopCapture();

     // set state to play
     this._cameraStateSetter('play');
   }
  };

  _captureVideo = () => {
    // start the capture
    this.refs.camera.capture((err, data) => {
      // if error set camera to initial state
      if (err) {
        this._cameraStateSetter('init');

        // clear the interval
        this._clearInterval();

        alert('Error: Please try again!');
        return;
      }
      console.log('video location: ' + data);
    });

    // if everything is okay, start increasing the recording indicator line
    this._setInterval();
  };

  _cameraStateSetter = stateString => {
    this.setState({
      recordState: stateString
    });
  };

  _setInterval = () => {
    this.interval = setInterval(() => {
      this.setState({
        recordingIndicatorLineLength: this.state.recordingIndicatorLineLength + 1
      });

      // stop recording indicator when time limit(15 sec) is reached
      if (this.state.recordingIndicatorLineLength >= 14) {
        this._clearInterval();
        this.refs.camera.stopCapture(); 

        // set state to play
        this._cameraStateSetter('play');
      }
    }, 1000);
  };

  _clearInterval = () => {
    if (this.interval)
      clearInterval(this.interval);
  };
}
