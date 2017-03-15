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
var backIcon = require('../img/btn-back-top2.png');
var poolIcon = require('../img/btn-pool-results.png');
const DEMO_OPTIONS = ['Pool #1 on STRIP A1', 'Pool #2 on STRIP A1', 'Pool #3 on STRIP A1'];

import Button from '../components/button'

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

  _dropdown_2_renderRow(rowData, rowID, highlighted) {
    let icon = highlighted ? require('../img/canada-flag.png') : require('../img/btn-pool-results.png');
    let evenRow = rowID % 2;
    return (
      <TouchableHighlight underlayColor='cornflowerblue'>
        <View style={[styles.dropdown_2_row, {backgroundColor: evenRow ? '#2c3239' : '#2c3239'}]}>
          <Image style={styles.dropdown_2_image}
                 mode='stretch'
                 source={icon}
          />
          <Text style={[styles.dropdown_2_row_text, highlighted && {color: 'mediumaquamarine'}]}>
            {`${rowData.name} (${rowData.age})`}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    if (rowID == DEMO_OPTIONS.length - 1) return;
    let key = `spr_${rowID}`;
    return (<View style={styles.dropdown_2_separator}
                  key={key}
    />);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#2c3239'}}>

        <ModalDropdown style={styles.dropdown_2}
                       textStyle={styles.dropdown_2_text}
                       dropdownStyle={styles.dropdown_2_dropdown}
                       options={DEMO_OPTIONS}
                       //renderRow={this._dropdown_2_renderRow.bind(this)}
                      // renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
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
  playerInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 143,
    backgroundColor: '#242a34'//'#242a34'
  },
  playerStatisticContainer: {
    paddingLeft: 10,
    flex: 3,
    backgroundColor: '#242a34',
    justifyContent: 'space-around',
  },
  playerStatisticInfoContainer: {
    flex: 9,
    backgroundColor: '#242a34',
    justifyContent: 'space-around',
  },
  topBarContainer: {
    height: 90,
    backgroundColor: '#242a34',
    justifyContent: 'center'
  },
  playerLargeText: {
    //margin: 10,
    paddingLeft: 10,
    color: '#fff',
    fontSize: 20,
    fontWeight: '800'
  },
  playerStatisticText: {
    color: '#515961',
    fontSize: 14
  },
  playerStatisticInfoText: {
    color: '#fff',
    fontSize: 20
  },
  imageStyle: {
    marginRight: 10,
    width: 60,
    height: 30
  },

  dropdown_2: {
    alignSelf: 'flex-end',
    width: 300,
    top: 32,
    right: 8,
    borderWidth: 1,
    borderColor: '#244e54',
    borderRadius: 3,
    backgroundColor: '#2c3239',
  },
  dropdown_2_text: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 18,
    color: '#fff',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  dropdown_2_dropdown: {
    width: 300,
    height: 120,
    borderColor: '#244e54',
    borderWidth: 2,
    borderRadius: 3,
  },
  dropdown_2_row: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  dropdown_2_image: {
    marginLeft: 4,
    width: 30,
    height: 30,
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: '#fff',
    textAlignVertical: 'center',
  },
  dropdown_2_separator: {
    height: 1,
    backgroundColor: '#244e54',
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