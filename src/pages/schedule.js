/**
 * Created by dunice on 14.03.17.
 */
/**
 * Created by dunice on 14.03.17.
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableHighlight
} from 'react-native'

import TopBar from  '../components/topBar'

const LoginView = Platform.select({
  ios: () => KeyboardAvoidingView,
  android: () => View,
})();

import Button from '../components/button'
//import SendBird from 'sendbird'
//import {OPEN_CHANNEL_URL} from '../consts';

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      buttonDisabled: false,
      connection: props.route.connection || false,
      buttonPressed: '0'
    };
    //this._onPressBack = this._onPressBack.bind(this);
    // this._onShowUnderlay = this._onShowUnderlay.bind(this);
    this._onHideUnderlay = this._onHideUnderlay.bind(this);
  }


  _onBackPress() {
    this.props.navigator.pop();
  }

  _onShowUnderlay(id){
    var self = this;

    return ()=>{
      self.setState({buttonPressed: id});
    }
    // console.warn('---->',this)
    // id === '1' ? this.setState({buttonPressed: '1'}) : id === '2' ? this.setState({buttonPressed: '2'}) : this.setState({buttonPressed: '3'});
  }

  _onHideUnderlay(){
    this.setState({buttonPressed: '0'});
  }

  _buttonStyle() {
    return {
      margin: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      backgroundColor: '#0e1a2e',
      borderColor: '#0e1a2e',
      borderRadius: 10,
      height: 80
    }
  }

  render() {
    return (
      <View style={styles.container} >

          <View style={styles.topBarContainer}>
            <TopBar
              onBackPress={this._onBackPress.bind(this)}
              title='FENCER RESULTS'
            />
          </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242a34'
  },
  loginContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    backgroundColor: '#242a34'
  },
  buttonContainer: {
    margin: 10,
    flex: 20,
    backgroundColor: '#2c3239',
    //flexDirection: 'row',
    justifyContent: 'space-around',
    //alignItems: 'center'
  },
  topBarContainer: {
    //marginTop: 20,
    height: 80,
    backgroundColor: '#242a34',
    //alignItems: 'center',
    justifyContent: 'center'
  },
  authorizeText: {
    marginTop: 10,
    color: '#cfcfd1',
    fontSize: 15
  },
  authorizeBoldText: {
    marginTop: 10,
    color: '#cfcfd1',
    fontSize: 15,
    fontWeight: '900',
    textDecorationLine: 'underline'
  },
  buttonText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    color: '#fff'
  }
});


//fb color '#434c9a'
//G+ color '#dd4f43'
//WM color  '#00adef'
//main color '#242a34'
//login text color '#cfcfd1'
//big circle color '#0e1a2e'
//login box color '#2c3239'