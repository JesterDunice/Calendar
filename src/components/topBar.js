import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  ListView
} from 'react-native'

import ImageButton from './imageButton';
import ModalDropdown from './ModalDropdown';//'react-native-modal-dropdown';

var backIcon = require('../img/btn-back.png');
var listIcon = require('../img/btn-list.png');
var searchIcon = require('../img/btn-search.png');
var checkedIcon = require('../img/drop-checked.png');
var uncheckedIcon = require('../img/drop-unchecked.png');

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DropMenuOptions: this.props.options
    };
  }

  _dropdown_renderRow(rowData, rowID, highlighted) {
    let icon = highlighted ? checkedIcon : uncheckedIcon;
    let evenRow = rowID % 2;
    return (
      <TouchableHighlight underlayColor='cornflowerblue'>
        <View style={[styles.dropdown_row, {backgroundColor: evenRow ? '#2c3239' : '#2c3239'}]}>
          <Image style={styles.dropdown_image}
                 mode='stretch'
                 source={icon}
          />
          <Text style={[styles.dropdown_row_text, highlighted && {color: 'mediumaquamarine'}]}>
            {rowData}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  _dropdown_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    if (rowID == this.props.options.length - 1) return;
    let key = `spr_${rowID}`;
    return (<View style={styles.dropdown_separator}
                  key={key}
    />);
  }
  _RenderLabel(){
   if (this.props.textLabel) {
      return (
        <Text style={styles.titleLabel}>{this.props.title}</Text>
      );
    } else if (this.props.dropList) {
     return (
       <ModalDropdown style={styles.dropdown}
                      textStyle={styles.dropdown_text}
                      defaultIndex={0}
                      defaultValue={this.props.options[0]}
                      dropdownStyle={styles.dropdown_dropdown}
                      options={this.props.options}
                      renderRow={this._dropdown_renderRow.bind(this)}
                      renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._dropdown_renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
       />
     );
   }
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
          {this._RenderLabel()}
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
  },

  dropdown: {
    alignSelf: 'stretch',
    marginHorizontal: 10,
    height: 30,
    borderWidth: 1,
    borderColor: '#244e54',
    borderRadius: 3,
    backgroundColor: '#2c3239',
  },
  dropdown_text: {
    marginVertical: 5,
    marginHorizontal: 6,
    fontSize: 16,
    color: '#fff',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  dropdown_dropdown: {
    width: 200,
    height: 256,
    borderColor: '#244e54',
    borderWidth: 1,
    borderRadius: 3,
  },
  dropdown_row: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  dropdown_image: {
    marginLeft: 4,
    width: 15,
    height: 15,
  },
  dropdown_row_text: {
    marginHorizontal: 8,
    fontSize: 16,
    color: '#fff',
    textAlignVertical: 'center',
  },
  dropdown_separator: {
    height: 1,
    backgroundColor: '#244e54',
  }
});
