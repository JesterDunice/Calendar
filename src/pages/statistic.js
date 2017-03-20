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

import TopBar from  '../components/topBar';
import GamesTable from  '../components/gamesTable';
import {DUEL_LIST} from  '../consts';

import PlayersList from  '../components/players-list';

const DEMO_OPTIONS = ['Pool #1 on STRIP A1 trhrthrthrthrthrth', 'Pool #2 on STRIP A1', 'Pool #3 on STRIP A1', 'Pool #4 on STRIP A1', 'Pool #5 on STRIP A1',
  'Pool #6 on STRIP A1','Pool #7 on STRIP A1','Pool #8 on STRIP A1','Pool #9 on STRIP A1',
  'Pool #10 on STRIP A1','Pool #11 on STRIP A1','Pool #12 on STRIP A1','Pool #13 on STRIP A1',
  'Pool #14 on STRIP A1','Pool #15 on STRIP A1','Pool #16 on STRIP A1','Pool #17 on STRIP A1'];


export default class Statistic extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //const Component0 = <GamesTable flexx={30}/>;
    //const Component = <GamesTable flexx={100}/>;

    this.state = {
      duel: DUEL_LIST, //this._duelList(),
      playerPicked: 0,
      dataSource: ds.cloneWithRows(this._getComponentsNumber()),

    };
  }


  _getNumber(){
    let max = 4;
    let min = 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  _onListPress(){
    //console.log(JSON.stringify(this.state.duel));
   // console.log(this.state.duel.length)
  }

  _duelList(){
    let a = 7;
    let b = a - 1;
    let list = [];
    for (let i = 0; i < a; i++) {
      for (let j = 0; j < b; j++) {
        list.push(
          {
            fighter1: {
              id: i + 1,
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
              id: j + i + 2,
              name: 'KAACI',
              surname: 'Trollin',
              country: 'Dania',
              club: 'Copenhagen Wolves',
              class: 'A16',
              rank: '12',
              city: 'Copenhagen',
              hitsNumber: this._getNumber()

            }
          }
        );
      }
      b--;
    }
    return list;
  }

  _getUniqueId(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
      let f1Id = arr[i].fighter1.id;
      let f2Id = arr[i].fighter2.id;
      obj[f1Id] = true;
      obj[f2Id] = true;
    }
    //console.log(Object.keys(obj).length);
    return Object.keys(obj).length;
  }


  _getComponentsNumber() {
    let TableDimensions = this._getUniqueId(DUEL_LIST) + 1;

    let Row = TableDimensions - 1;
    let countRow = 0;

    let list = [];
    for (let i = 0; i < TableDimensions; i++) {
      if (i == 0) {
        list.push(<GamesTable height={30} columnNum={TableDimensions} col={i}
                              onPress={this._onTableNumPress.bind(this, i)}/>);
      } else {
        list.push(<GamesTable height={60} columnNum={TableDimensions} col={i}
                              onPress={this._onTableNumPress.bind(this, i)} rowNum={countRow}/>);
        countRow = countRow + (Row - i);
      }
    }
    return list;
  }

  _onTableNumPress(i){
    console.log(i);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let self = this;
    let arr = this._getComponentsNumber();
    console.log(arr);
    arr.splice(i, 1, <PlayersList />);
    self.setState({dataSource: ds.cloneWithRows(arr)})
  }

  _onSearchPress(){
   // return this._getUniqueId(this.state.duel);
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
            onListPress={this._onListPress.bind(this)}
            onSearchPress={this._onSearchPress.bind(this)}
            dropList={true}
            options={DEMO_OPTIONS}
          />
        </View>

        <ListView
          style={{flex: 1, }}
          dataSource={this.state.dataSource}
          renderRow={(data) => data}
        />


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