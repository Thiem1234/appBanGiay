import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
export default class Header extends Component{
  render(){
    return(
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{marginRight:310, marginLeft:10}} onPress={this.toggleDrawer.bind(this)}>
          <Icon name="ios-menu" size={36}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{alert("ok day");}}>
          <Icon name="ios-contact" size={36}  />
        </TouchableOpacity>
      </View>
    );
  }
}