import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, ScrollView,TouchableOpacity,TextInput,Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');
export default class SearchScreen extends Component{
  render(){
    return(
      <ScrollView>
        <View style={{backgroundColor:'#fff' ,flexDirection:'row',borderWidth:2,borderColor:'#2f9676',borderRadius:1 ,margin:10,alignItems:'center'}}>
          <Icon style={{opacity:0.8, marginLeft:10, marginRight:5}} name="ios-search" size={18} color={'#606064'}  />
          <TextInput onSubmitEditing={()=>alert('ok rồi đấy!')} height={38} placeholder='Sản phẩm thương hiệu và mọi thứ!' style={{fontSize:13, backgroundColor:'#fff'}}></TextInput >
        </View>
      </ScrollView>
    );
  }
}