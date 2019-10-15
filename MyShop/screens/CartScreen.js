import React,{Component} from 'react';
import {View, Text} from 'react-native';

export default class CartScreen extends Component{
  render(){
    return(
      <View style={{flex:1, backgroundColor:'aqua'}}>
        <Text>Screen Cart</Text>
      </View>
    );
  }
}