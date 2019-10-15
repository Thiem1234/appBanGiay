import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class DetailsScreen extends Component{
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'Chi tiết'),
    
    };
  };
  render(){
    return(
      <View>
        <View style={{justifyContent:'flex-end', alignItems:'flex-end', marginRight:20, marginTop:20 }}>
          <Icon name="ios-cart" size={36} color={'#2f9676'}  />
        </View>
        <View style={{justifyContent:'center', justifyContent:'center', alignItems:'center'}}>
          <Image source = {{uri:this.props.navigation.getParam('img')}} style = {{ width:200, height:200}}/>
          <Text style={{fontSize:26, color:'blue', marginBottom:20}}>{this.props.navigation.getParam('name')} / {this.props.navigation.getParam('price')} $</Text>
          <Text style={{color:'rgb(221, 97, 97)'}}>{this.props.navigation.getParam('detail')}</Text>
        </View>
      </View>
    );
  }
}