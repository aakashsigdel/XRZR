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
import { addVideo } from '../actions';

export default class ExerciseBuilder extends Component {
  constructor () {
    super();
    this.state = {
      cameraType: 'back',
      recordState: 'init', // can have 'init', 'recording', 'play'
      indicatorLineLength: 0,
      paused: false,
      duration: 0.0,
      currentTime: 0.0,
    };
    this.videoUrl = '';
  }

  componentWillUnmount () {
    this._clearInterval();
  }

  render () {
    let flexCompleted = this.getCurrentTimePercentage() * 100;
    let flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
    console.log('flexes: ', flexCompleted, flexRemaining);
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
            rightClickFunc={ _=> {
              this.props.onVideoSubmit({
                videoURL: this.videoUrl,
                videoLength: this.state.duration,
              });
              this.props.navigator.pop();
            } }
            backgroundColor="#F90035"
          />
          { this._renderCameraOrVideo(this.state.cameraOrVideo) }
          <View style={styles.progressBar}>
            <View
              style={[styles.progressBarCompleted, {flex: flexCompleted}]}
            >
            </View>
            <View style={[styles.progressBarRemaining, {flex: flexRemaining}]}></View>
          </View>
          <Text style={styles.timer}>
          {
            this.state.recordState === 'recording'
            ? 'Length: ' + this.state.indicatorLineLength + ' sec'
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
                      case 'play':
                    return (
                      <TouchableOpacity
                        onPress={this._handlePauseAndPlay}
                        style={styles.recordButton}
                      >
                        <Text style={styles.recordButtonText}>
                          {this.state.paused ? 'PLAY' : 'PAUSE'}
                        </Text>
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
    if (this.state.recordState === 'play') {
      return (
        <Video
          source={{uri: this.videoUrl}}
          resizeMode="cover"
          paused={this.state.paused}
          repeat={true}
          onProgress={this._onVideoProgress}
          onLoad={this._onVideoLoad}
          style={styles.contentStyle}
        />
      );
    } else {
      return (
        <Camera
          ref="camera"
          style={styles.contentStyle}
          tyle={this.state.cameraType}
          captureMode={Camera.constants.CaptureMode.video}
        />
      );
    }
  };

  _handleRecording = () => {
    /*
     * TODO: Integrate Video player for playback
     * TODO: Squash Bugs
    */
   if (this.state.recordState === 'init') {
     this._cameraStateSetter('recording');
     this._captureVideo();
   } else if (this.state.recordState === 'recording'){
     // clear timer  to stop the progress bar
     this._clearInterval()

     // stop the capture
     this.refs.camera.stopCapture();

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
      // set the video url
      this.videoUrl = data;

      // set state to play
      this._cameraStateSetter('play');
      this._clearInterval();
    });

    // if everything is okay, start increasing the recording indicator line
    this._setInterval();
  };

  _handlePauseAndPlay = () => {
    this.setState({
      paused: !this.state.paused
    });
  };

  _cameraStateSetter = stateString => {
    this.setState({
      recordState: stateString
    });
  };

  _setInterval = () => {
    this.interval = setInterval(() => {
      this._setIndicatorLineLength();
      // stop recording indicator when time limit(15 sec) is reached
      if (this.state.indicatorLineLength >= 14) {
        this._clearInterval();

        //stop the capture if the camera is recording
        if(this.state.recordState === 'recording')
          this.refs.camera.stopCapture(); 
      }
    }, 1000);
  };

  _setIndicatorLineLength = () => {
    this.setState({
      indicatorLineLength: this.state.indicatorLineLength + 1
    });
  };

  _onVideoLoad = (data) => {
    this.setState({
      duration: data.duration,
    });
  };

  _onVideoProgress = data => {
    this.setState({currentTime: data.currentTime});
  };

  getCurrentTimePercentage = () => {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  };

  _clearInterval = () => {
    if (this.interval) {
      clearInterval(this.interval);
      console.log('cleared timer');
      debugger;
    }
  };
}
