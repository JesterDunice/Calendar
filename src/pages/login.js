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

const LoginView = Platform.select({
  ios: () => KeyboardAvoidingView,
  android: () => View,
})();

import Button from '../components/button'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonPressed: '0'
    };
    this._onPressWinMob = this._onPressWinMob.bind(this);
    this._onShowUnderlay = this._onShowUnderlay.bind(this);
    this._onHideUnderlay = this._onHideUnderlay.bind(this);
  }

  _onPressWinMob(){
    this.props.navigator.pop();

  }

  _onPressConnect(){

  }

  _onShowUnderlay(id){
  id === '1' ? this.setState({buttonPressed: '1'}) : id === '2' ? this.setState({buttonPressed: '2'}) : this.setState({buttonPressed: '3'});
  }

  _onHideUnderlay(){
    this.setState({buttonPressed: '0'});
  }

  _buttonStyle() {
    return {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      backgroundColor: '#0e1a2e',
      borderColor: '#0e1a2e',
      borderRadius: 10,
      height: 80,
      width: 80
    }
  }

  _buttonPressedStyle(pressedButtonId) {
    return {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      backgroundColor: pressedButtonId === '1' ? '#434c9a' : pressedButtonId === '2' ? '#dd4f43' : '#00adef',
      borderColor: pressedButtonId === '1' ? '#434c9a' : pressedButtonId === '2' ? '#dd4f43' : '#00adef',
      borderRadius: 40,
      height: 80,
      width: 80
    }
  }

  render() {
    return (
      <LoginView style={styles.container} >
        <View style={{flex: 1}}>

          <View style={styles.loginContainer}>
          </View>

          <View style={styles.buttonContainer}>

            <TouchableHighlight id="1"
              disabled={this.state.buttonDisabled}
              style={this.state.buttonPressed === '1' ? this._buttonPressedStyle('1') : this._buttonStyle()}
              underlayColor={'#434c9a'}
              onPress={this._onPressConnect}
              onShowUnderlay={this._onShowUnderlay.bind(this, '1')}
              onHideUnderlay={this._onHideUnderlay}
            >
              <Text style={styles.buttonText}>f</Text>
            </TouchableHighlight>


            <TouchableHighlight id="2"
              disabled={this.state.buttonDisabled}
              style={this.state.buttonPressed === '2' ? this._buttonPressedStyle('2') : this._buttonStyle()}
              underlayColor={'#dd4f43'}
              onPress={this._onPressConnect}
              onShowUnderlay={this._onShowUnderlay.bind(this, '2')}
              onHideUnderlay={this._onHideUnderlay}
            >
              <Text style={styles.buttonText}>G+</Text>
            </TouchableHighlight>

            <TouchableHighlight id="3"
              disabled={this.state.buttonDisabled}
              style={this.state.buttonPressed === '3' ? this._buttonPressedStyle('3') : this._buttonStyle()}
              underlayColor={'#00adef'}
              onPress={this._onPressWinMob}
              onShowUnderlay={this._onShowUnderlay.bind(this, '3')}
              onHideUnderlay={this._onHideUnderlay}
            >
              <Text style={styles.buttonText}>WM</Text>
            </TouchableHighlight>
          </View>





          <View style={styles.bottomContainer}>

            <Text style={styles.authorizeText}>Not have an accounts in social networks?</Text>

            <TouchableHighlight onPress={this._onPressWinMob}
                                underlayColor={'#242A34'}
            >
              <Text style={styles.authorizeBoldText}>Login without authorization</Text>
            </TouchableHighlight>
          </View>



        </View>
      </LoginView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242a34'
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 5,
    backgroundColor: '#242a34'
  },
  buttonContainer: {
    margin: 10,
    flex: 3,
    backgroundColor: '#2c3239',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: '#242a34',
    alignItems: 'center'
    //justifyContent: 'center'
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
    width: 50,
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