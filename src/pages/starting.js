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
  TouchableHighlight,
  StatusBar
} from 'react-native'

const LoginView = Platform.select({
  ios: () => KeyboardAvoidingView,
  android: () => View,
})();

import Button from '../components/button'
//import SendBird from 'sendbird'
//import {OPEN_CHANNEL_URL} from '../consts';

export default class Starting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonDisabled: false,
    };
    this._onPressLogin = this._onPressLogin.bind(this);
  }


  _onPressLogin() {
    this.props.navigator.push({name: 'login'});
  }

  _onPressStatistic() {
    this.props.navigator.push({name: 'statistic'});
  }

  _onPressPlayersInfo() {
    this.props.navigator.push({name: 'playersinfo'});
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
      <LoginView style={styles.container} >
        <StatusBar
          backgroundColor="#5E8D48"
          statusBarColor="#5E8D48"
          barStyle="light-content"
        />
        <View style={{flex: 1}}>

          <View style={styles.loginContainer}>
          </View>

          <View style={styles.buttonContainer}>

            <TouchableHighlight id="1"
                                disabled={this.state.buttonDisabled}
                                style={this._buttonStyle()}
                                underlayColor={'#0C3A50'}
                                onPress={this._onPressLogin}
            >
              <Text style={styles.buttonText}>Login screen</Text>
            </TouchableHighlight>


            <TouchableHighlight id="2"
                                disabled={this.state.buttonDisabled}
                                style={this._buttonStyle()}
                                underlayColor={'#0C3A50'}
                                onPress={this._onPressPlayersInfo.bind(this)}
            >
              <Text style={styles.buttonText}>Players Info screen</Text>
            </TouchableHighlight>

            <TouchableHighlight id="3"
                                disabled={this.state.buttonDisabled}
                                style={this._buttonStyle()}
                                underlayColor={'#0C3A50'}
                                onPress={this._onPressStatistic.bind(this)}

            >
              <Text style={styles.buttonText}>Statistic screen</Text>
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
  bottomContainer: {
    flex: 2,
    backgroundColor: '#242a34',
    alignItems: 'center'
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