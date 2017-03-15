import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import ImageButton from './imageButton';

var backIcon = require('../img/btn-back.png');
var listIcon = require('../img/btn-list.png');
var searchIcon = require('../img/btn-search.png');

export default class TopBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftButton}>
          <ImageButton
            underlayColor={'#2c3239'}
            onPress={this.props.onBackPress}
            imageStyle={styles.imageButton}
            image={backIcon}
          />
        </View>

        <View style={styles.leftButton}>
          <ImageButton
            underlayColor={'#2c3239'}
            onPress={this.props.onBackPress}
            imageStyle={styles.imageButton}
            image={listIcon}
          />
        </View>

        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <Text style={styles.titleLabel}>{this.props.title}</Text>
        </View>

        <View style={styles.rightButton}>
          <ImageButton
            underlayColor={'#2c3239'}
            onPress={this.props.onBackPress}
            imageStyle={styles.imageButton}
            image={searchIcon}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2c3239',
    paddingTop: 20,
    paddingBottom: 2,
  },
  titleLabel: {
    color:'#fff',
    textAlign:'center',
    fontWeight:'400',
    fontSize: 24
  },
  leftButton: {
    justifyContent: 'flex-start',
    paddingLeft: 5
  },
  rightButton: {
    justifyContent: 'flex-end',
    paddingRight: 10
  },
  imageButton: {
    width: 30,
    height: 30
  }
});
