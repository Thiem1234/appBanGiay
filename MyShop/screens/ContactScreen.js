import React,{Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var {height, width} = Dimensions.get('window');
export default class ContactScreen extends Component{
  render(){
    return(
      <View style={{flex:1, backgroundColor:'#fff',padding:10}}>
        <View style={{justifyContent:'center', borderBottomColor:'#cdc', borderBottomWidth:1,marginBottom:10, paddingBottom:40}}>
          <Text style={{color:'green',fontWeight:'bold', fontSize:36, textAlign:'center'}}>Thế Thiêm</Text>
        </View>
        
        <View style={{flexDirection:'row', borderBottomColor:'#cdc',borderBottomWidth:1,marginBottom:10, paddingBottom:10 , width:width*0.95, }} >
          <View style={{flex:1/10}}>
            <Icon name="ios-pin" size={28} color={'#28a18a'} />
          </View>
          <View style={{flex:9/10, justifyContent:'flex-end'}}>
            <Text style={{fontSize:14,textAlign:'right', color:'rgb(221, 97, 97)'}}>Xã Quyết Thắng, TP.Thái Nguyên, Tỉnh Thái Nguyên</Text>
          </View>
        </View>

        <View style={{flexDirection:'row', borderBottomColor:'#cdc',borderBottomWidth:1,marginBottom:10, paddingBottom:10 , width:width*0.95,  }} >
          <View style={{flex:1/5}}>
          <Icon name="ios-send" size={28} color={'#28a18a'} />
          </View>
          <View style={{flex:4/5, justifyContent:'flex-end'}}>
            <Text style={{fontSize:15,textAlign:'right',color:'rgb(221, 97, 97)'}}>thethiem97@gmail.com</Text>
          </View>
        </View>

        <View style={{flexDirection:'row', borderBottomColor:'#cdc',borderBottomWidth:1,marginBottom:10, paddingBottom:10 , width:width*0.95, }} >
          <View style={{flex:1/5}}>
            <Icon name="ios-call" size={28} color={'#28a18a'} />
          </View>
          <View style={{flex:4/5, justifyContent:'flex-end'}}>
            <Text style={{fontSize:15,textAlign:'right',color:'rgb(221, 97, 97)'}}>0336 297 954</Text>
          </View>
        </View>

        <View style={{flexDirection:'row',marginBottom:10, paddingBottom:10 , width:width*0.95, borderBottomColor:'#cdc',borderBottomWidth:1}} >
          <View style={{flex:1/5}}>
            <Icon name="logo-facebook" size={28} color={'#28a18a'} />
          </View>
          <View style={{flex:4/5, justifyContent:'flex-end'}}>
            <Text style={{fontSize:15,textAlign:'right',color:'rgb(221, 97, 97)'}}>facebook.com/the.thiem.97</Text>
          </View>
        </View>

        <View style={{flexDirection:'row',marginBottom:10, paddingBottom:10 , width:width*0.95}} >
          <View style={{flex:1/5}}>
            <Icon name="ios-mail" size={28} color={'#28a18a'} />
          </View>
          <View style={{flex:4/5, justifyContent:'flex-end'}}>
            <Text style={{fontSize:15,textAlign:'right',color:'rgb(221, 97, 97)'}}>0978 788 666</Text>
          </View>
        </View>
      </View>
    );
  }
}