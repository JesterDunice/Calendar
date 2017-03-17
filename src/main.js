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
import PlayersInfo from './pages/playersinfo';
import Statistic from './pages/statistic';

var ROUTES = {
  login: Login,
  starting: Starting,
  playersinfo: PlayersInfo,
  statistic: Statistic
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
