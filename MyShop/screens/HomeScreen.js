import React,{Component} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity,TextInput} from 'react-native';
import Swiper from 'react-native-swiper';
var {height, width} = Dimensions.get('window');
import ProductSreen from './ProductScreen';
import Icon from 'react-native-vector-icons/Ionicons';
export default class HomeScreen extends Component{
  render(){
    
    return(
      <ScrollView style={{backgroundColor:'#cdc'}}>
        <View style={{backgroundColor:'#fff' ,flexDirection:'row',borderWidth:2,borderColor:'#2f9676',borderRadius:1 ,margin:10,alignItems:'center'}}>
          <Icon style={{opacity:0.8, marginLeft:10, marginRight:5}} name="ios-search" size={18} color={'#606064'}  />
          <TextInput onFocus={() => this.props.navigation.navigate('SearchStack')} height={38} placeholder='Bạn tìm gì hôm nay?' style={{fontSize:13, backgroundColor:'#fff'}}></TextInput >
        </View>
        <View>
          <Swiper style={styles.wrapper} autoplayTimeout={4} autoplay={true}  showsButtons={true}>
            <View style={styles.slide1}>
              <Image style={{height:height*0.25, width:364}} source={require('./img/banner1.jpg')} />
            </View>
            <View style={styles.slide2}>
              <Image style={{height:height*0.25, width:364}} source={require('./img/banner2.jpg')} />
            </View>
            <View style={styles.slide3}>
            <Image style={{height:height*0.25, width:364}} source={require('./img/banner3.jpg')} />
            </View>
          </Swiper>
        </View>
         <ProductSreen {...this.props} />  
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor:"#fff", height:height*0.25, width:364, margin:10, shadowColor:"#2E272B", shadowOffset:{width:0, height:3},shadowOpacity:0.2, padding:10
  },
  slide1: {
    flex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  slide2: {
    flex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  slide3: {
    flex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
