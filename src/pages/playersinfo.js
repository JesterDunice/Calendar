/**
 * Created by dunice on 14.03.17.
 */
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
  Image
} from 'react-native'

import TopBar from  '../components/topBar'
import PlayersList from  '../components/players-list'

var canadaIcon = require('../img/canada-flag.png');
var seedIcon = require('../img/pool-seeding-pic.png');
var backIcon = require('../img/btn-back-top2.png');

import Button from '../components/button'

export default class PlayersInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      buttonDisabled: false,
      connection: props.route.connection || false,
      buttonPressed: '0'
    };
  }


  _onBackPress() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container} >

          <View style={styles.topBarContainer}>
            <TopBar
              onBackPress={this._onBackPress.bind(this)}
              title='FENCER RESULTS'
            />
          </View>

        <View style={{flex: 1}}>

          <View style={styles.playerInfoContainer}>

            <View style={{flex: 2, flexDirection: 'row'}}>
              <View style={{flex: 1,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
                  <Text style={styles.playerLargeText}>CAI, ALEX</Text>
                  <Image style={styles.imageStyle} source={canadaIcon}/>
              </View>
            </View>

            <View style={{flex: 3, flexDirection: 'row', justifyContent: 'flex-start'}}>

              <View style={styles.playerStatisticContainer}>
                <Text style={styles.playerStatisticText}>Club(s):</Text>
                <Text style={styles.playerStatisticText}>Division:</Text>
                <Text style={styles.playerStatisticText}>Class/Rank:</Text>
              </View>

              <View style={styles.playerStatisticInfoContainer}>
                <Text style={styles.playerStatisticInfoText}>TORONTOFC</Text>
                <Text style={styles.playerStatisticInfoText}>Western PA</Text>
                <Text style={styles.playerStatisticInfoText}>A16/12</Text>
              </View>

            </View>

          </View>

          <View style={{height: 30, backgroundColor: '#5c2228',flexDirection: 'row'}}>
            <View style={{flex: 1,flexDirection: 'row',justifyContent: 'flex-start',alignItems: 'center'}}>
              <Image style={{marginLeft: 10, width: 20, height: 20}} source={seedIcon}/>
              <Text style={{paddingLeft: 10, fontSize: 20, color: '#fff'}}>POOL SEEDING: 1</Text>

            </View>
          </View>

          <View style={{flex: 1, backgroundColor: '#11225c'}}>


              <View
                style={{height: 33,backgroundColor: '#242a34', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
                <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', paddingHorizontal: 40}}>POOL #14</Text>
                <TouchableHighlight style={{justifyContent: 'center',
                                          alignItems: 'center',
                                          backgroundColor: '#2c3239',
                                          borderColor: '#2c3239',
                                          borderTopLeftRadius: 3,
                                          borderTopRightRadius: 3,
                                          height: 25,
                                          width: 30,

              }}
                                    onPress={this._onBackPress.bind(this)}
                >
                  <Image style={{width: 30, height: 30}} source={backIcon}/>
                </TouchableHighlight>
              </View>


            <View style={{flex: 1,backgroundColor: '#2c3239',flexDirection: 'column'}}>


              <PlayersList/>
              <PlayersList/>
              <PlayersList/>
              <PlayersList/>
              <PlayersList/>


            </View>

          </View>

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
  }
});


//fb color '#434c9a'
//G+ color '#dd4f43'
//WM color  '#00adef'
//main color '#242a34'
//login text color '#cfcfd1'
//big circle color '#0e1a2e'
//login box color '#2c3239'