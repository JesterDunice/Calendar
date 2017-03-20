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


var canadaIcon = require('../img/canada-flag.png');
var seedIcon = require('../img/pool-seeding-pic.png');
var backIcon = require('../img/btn-back-top.png');

import {DUEL_LIST, TEST21} from  '../consts';

export default class GamesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      height: this.props.height,
      columnNum: this.props.columnNum,
      col: this.props.col,
      rowNum: this.props.rowNum,
    };
  }


  _getNumber(){
    let max = 15;//16777216;
    let min = 0;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  _getRndColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  _horizontalNumbers() {
    let colNum = this.state.columnNum;
    let col = this.state.col;
    let dockod = [];
    let countColumn = this.state.rowNum;
    let countRow = col - 2;

    for (let i = 0; i < colNum; i++) {

      if (col == 0) {
        dockod.push(
          this._returnFirstRow(i)
        );
      } else {
        if (i == col) {
          dockod.push(
            this._returnGreyCell()
          );
        } else {
          if (i == 0){
            dockod.push(
            this._returnFirstColumn(col));

          } else {
            if (i < col) {

              dockod.push(
                this._returnRow(i, col, DUEL_LIST[countRow].fighter2.hitsNumber));
              countRow += colNum - 2 - i;

            }
            else {
              dockod.push(
                this._returnRow(i, col, DUEL_LIST[countColumn].fighter1.hitsNumber)
              );
              countColumn++;
            }
          }
        }
      }

    }

    return dockod;
  }

  _returnGreyCell(){
    let bGrnd = '#242a34';
    let text = '';
    return(this._renderCell(text, bGrnd));
  }

  _returnFirstRow(i){
    let bGrnd = '#242a34';
    if (i == 0){ i = ''}
    return(this._renderTouchCell(i, bGrnd));
  }

  _returnFirstColumn(i){
    let bGrnd = '#242a34';
    if (i == 0){ i = ''}
    return(this._renderTouchCell(i, bGrnd));
  }

  _returnRow(i, col, txt){
    let bGrnd = txt == 5 ? '#315a29':'#700d0d';
    let text = txt == 5 ? 'V' + txt : 'D' + txt;
    if (i == 0){ text = col; bGrnd = '#242a34'}
    else {}
    return(this._renderCell(text, bGrnd));
  }

  _renderTouchCell(text, bgrnd){
    return(
      <TouchableHighlight
        style={{flex: 1,justifyContent: 'center', alignItems: 'center', backgroundColor: bgrnd, margin: 2}}
        onPress={this.props.onPress}
        underlayColor={'#323a45'}
      >
        <View key={this._getRndColor()}
              style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>

          <Text style={{flex: 1,justifyContent: 'center', alignItems: 'center', color: '#fff'}}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _renderCell(text, bgrnd){
    return(

      <View
            style={{flex: 1, alignItems: 'center', backgroundColor: bgrnd, margin: 2}}>

          <Text style={{flex: 1,  color: '#fff'}}>{text}</Text>
      </View>
    );
  }

  render(){
    let b = this._getRndColor();
    return(
      <View
        style={{height: this.state.height, justifyContent: 'center', alignItems: 'center', backgroundColor: '#242a34', flexDirection: 'row',}}>
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
