import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  AppState,
  Platform
} from 'react-native';

import Login from './pages/login';
import Starting from './pages/starting';
import Schedule from './pages/schedule';
//import Chat from './pages/chat';

//import {APP_ID} from './consts'
//import SendBird from 'sendbird'
//var sb = null;



var ROUTES = {
  login: Login,
  starting: Starting,
  schedule: Schedule
 // chat: Chat
};

export default class Main extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{name: 'starting'}}
        renderScene={this._renderScene}
        configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}
        style={styles.container}
      />
    )
  }

  _renderScene(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
