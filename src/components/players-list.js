/**
 * Created by dunice on 15.03.17.
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
var backIcon = require('../img/btn-back-top2.png');

export default class PlayersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Dillon',
      surname: 'COOKE',
      countryIcon: canadaIcon,
      classRankTeam: 'A16(23)/TORONTOFC',
      counterVictory: 15,
      couterDefeat: 6
    };
  }

  render(){
    return(
      <View
        style={styles.mainContainer}>

        <View style={styles.leftPartContainer}>

          <View
            style={styles.nameContainer}>
            <Text style={styles.nameText}>{this.state.surname}, {this.state.name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Image style={styles.countryImage}
                   source={this.state.countryIcon}
            />
            <Text style={styles.infoText}>{this.state.classRankTeam}</Text>
          </View>

        </View>

        <View style={styles.rightPartContainer}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>{this.state.counterVictory}-{this.state.couterDefeat}</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    marginTop: 16,
    backgroundColor: '#2c3239',
    flexDirection: 'row'
  },
  leftPartContainer:{
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  nameContainer: {
    flex: 1,
    backgroundColor: '#2c3239',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  nameText:{
    paddingLeft: 20,
    fontSize: 20,
    color: '#fff'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'}
  ,
  countryImage:{
    marginLeft: 20,
    width: 18,
    height: 18,
    resizeMode: 'stretch',
    borderRadius: 9,
    borderColor: '#515961',
    borderWidth: 1
  },
  infoText:{
    paddingLeft: 5,
    fontSize: 12,
    color: '#515961'
  },
  rightPartContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  scoreContainer:{
    width: 50,
    height: 40,
    backgroundColor: '#242a34',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  scoreText: {
    fontSize: 18,
    color: '#fff'
  }
});
