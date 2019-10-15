import React,{Component} from 'react';
import {View, Text} from 'react-native';

export default class OrderHistory extends Component{
  render(){
    return(
      <View style={{flex:1, backgroundColor:'yellow'}}>
        <Text>Screen OrderHistory</Text>
      </View>
    );
  }
}