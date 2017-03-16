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

import TopBar from  '../components/topBar'
import GamesTable from  '../components/gamesTable'



//var backIcon = require('../img/btn-back-top.png');

const DEMO_OPTIONS = ['Pool #1 on STRIP A1 trhrthrthrthrthrth', 'Pool #2 on STRIP A1', 'Pool #3 on STRIP A1', 'Pool #4 on STRIP A1', 'Pool #5 on STRIP A1',
  'Pool #6 on STRIP A1','Pool #7 on STRIP A1','Pool #8 on STRIP A1','Pool #9 on STRIP A1',
  'Pool #10 on STRIP A1','Pool #11 on STRIP A1','Pool #12 on STRIP A1','Pool #13 on STRIP A1',
  'Pool #14 on STRIP A1','Pool #15 on STRIP A1','Pool #16 on STRIP A1','Pool #17 on STRIP A1'];
var b = 0;



export default class Statistic extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var Component = <GamesTable />;
    //const Component2 = <View style={{flex: 1, backgroundColor: '#afa'}}><View></View></View>;

    this.state = {
      dataSource: ds.cloneWithRows([
        Component, Component, Component, Component, Component, Component, Component, Component
      ]),
      duel: {
        fighter1: {
          name: 'COOKE',
          surname: 'Dollin',
          country: 'Canada',
          club: 'TORONTOFC',
          class: 'A16',
          rank: '12',
          city: 'Toronto',
          hitsNumber: 5
        },
        fighter2: {
          name: 'KAACI',
          surname: 'Trollin',
          country: 'Dania',
          club: 'Copenhagen Wolves',
          class: 'A16',
          rank: '12',
          city: 'Copenhagen',
          hitsNumber: 2

        }
      }

    };
  }


  _onBackPress() {
    this.props.navigator.pop();
  }



  _returnCell() {
    return (<GamesTable />);
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

        <View style={{flex: 1, justifyContent: 'center',flexDirection: 'row', }}>

          <ListView
            style={{flex:1, flexDirection: 'row'}}
            dataSource={this.state.dataSource}
            renderRow={(data) => data}
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

  topBarContainer: {
    height: 90,
    backgroundColor: '#242a34',
    justifyContent: 'center',
    flexDirection: 'row'
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
//defeat color '#700d0d'
//victory color '#315a29'