/**
 * Created by dunice on 15.03.17.
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
  ListView,
  Image
} from 'react-native'

import ModalDropdown from 'react-native-modal-dropdown';
import TopBar from  '../components/topBar'
import PlayersList from  '../components/players-list'

var canadaIcon = require('../img/canada-flag.png');
var seedIcon = require('../img/pool-seeding-pic.png');
var backIcon = require('../img/btn-back-top.png');
var poolIcon = require('../img/btn-pool-results.png');
const DEMO_OPTIONS = ['Pool #1 on STRIP A1 trhrthrthrthrthrth', 'Pool #2 on STRIP A1', 'Pool #3 on STRIP A1', 'Pool #4 on STRIP A1', 'Pool #5 on STRIP A1',
  'Pool #6 on STRIP A1','Pool #7 on STRIP A1','Pool #8 on STRIP A1','Pool #9 on STRIP A1',
  'Pool #10 on STRIP A1','Pool #11 on STRIP A1','Pool #12 on STRIP A1','Pool #13 on STRIP A1',
  'Pool #14 on STRIP A1','Pool #15 on STRIP A1','Pool #16 on STRIP A1','Pool #17 on STRIP A1'];



export default class Statistic extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var Component = <PlayersList/>
    this.state = {
      dataSource: ds.cloneWithRows([
        Component, Component, Component, Component, Component, Component, Component, Component, Component
      ]),

    };
  }


  _onBackPress() {
    this.props.navigator.pop();
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.topBarContainer}>
          <TopBar
            onBackPress={this._onBackPress.bind(this)}
            dropList={true}
            options={DEMO_OPTIONS}
          />
        </View>

        <View style={{}}>
          
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

  topBarContainer: {
    height: 90,
    backgroundColor: '#242a34',
    justifyContent: 'center'
  }
});


//fb color '#434c9a'
//G+ color '#dd4f43'
//WM color  '#00adef'
//main color '#242a34'
//login text color '#cfcfd1'
//big circle color '#0e1a2e'
//login box color '#2c3239'
//drop-down menu color '#244e54'