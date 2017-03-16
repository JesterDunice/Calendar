/**
 * Created by dunice on 16.03.17.
 */
import React, { Component } from 'react'
import {
  View,
  Text,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native'

import TopBar from  '../components/topBar'

var canadaIcon = require('../img/canada-flag.png');
var seedIcon = require('../img/pool-seeding-pic.png');
var backIcon = require('../img/btn-back-top.png');

export default class GamesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
    };
  }

  _makeRow(){
      var a = 8;
      var b = 0;
      for (var i = 0; i < 8; i++)
      {b++; return <View style={{backgroundColor: '#abc',width: 10}}><Text>{b}</Text></View>}
  }

  _getNumber(){
    let max = 15;//16777216;
    let min = 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  _getRndColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  _horizontalNumbers() {
    var a = 8;
    var dockod = [];
    for (var i = 0; i < a; i++) {

      console.log("------>", i);
      //this._returnCell();
      dockod.push(<View key={}style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#53c3fb'}}><Text>{i+1}</Text></View>)
      console.log("--->", dockod)
    }
    return dockod;
  }

  render(){
    var b = this._getRndColor();
    return(
      <View
        style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: b}}>
        {this._horizontalNumbers()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#53c3fb',
    flexDirection: 'row',
  },

});
