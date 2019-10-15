import React,{Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions,TextInput} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import SearchScreen from './screens/SearchScreen';
import ContactScreen  from './screens/ContactScreen';
import DetailsScreen from './screens/DetailsScreen';
const color = {
  ACTIVE: '#147efb',
  INACTIVE:  '#ccc'
}
var {height, width} = Dimensions.get('window');
class NavigationDrawerStructure extends Component { 
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
        <View style={{ flexDirection: 'row', justifyContent:'center', alignItems:'center'  }}>
          <TouchableOpacity style={{ marginLeft:10}} onPress={this.toggleDrawer.bind(this)}>
            <Icon name="ios-menu" size={36} color={'#fff'} />
          </TouchableOpacity>
          <View style={{textAlign:'center', marginLeft:106, marginRight:106}}>
            <Text style={{color:'green',fontWeight:'bold', fontSize:20}} >Thế Thiêm</Text>
          </View>
          <TouchableOpacity onPress={()=>{alert("ok day");}}>
            <Icon name="ios-contact" size={36} color={'#fff'} />
          </TouchableOpacity>
        </View>
    );
  }
}

class HeaderContact extends Component { 
  render() {
    return (
      <View style={{ width, justifyContent:'center'  }}>
          <Text style={{color:'#fff',fontWeight:'500', fontSize:22, textAlign:'center'}}>Thông tin</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: {
    screen:HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
  Details: {
    screen:DetailsScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  }
});
HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused}) =>{
    return <Icon name="ios-planet" size={36} color={focused ? color.ACTIVE: color.INACTIVE} />
   }
}

const CartStack = createStackNavigator({
  Second: {
    screen: CartScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Cart',
      
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
CartStack.navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({ focused}) =>{
    return <Icon name="ios-cart" size={36} color={focused ? color.ACTIVE: color.INACTIVE} />
   }
}

const SearchStack = createStackNavigator({
  Second: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title:'Tìm kiếm',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
SearchStack.navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: ({ focused}) =>{
    return <Icon name="ios-search" size={36} color={focused ? color.ACTIVE: color.INACTIVE} />
   }
}

const ContactStack = createStackNavigator({
  Second: {
    screen: ContactScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderContact/>,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
ContactStack.navigationOptions = {
    tabBarLabel: 'Contact',
    tabBarIcon: ({ focused}) =>{
    return <Icon name="ios-contact" size={36} color={focused ? color.ACTIVE: color.INACTIVE} />
   }
}


const AppNavigator = createBottomTabNavigator({
   HomeStack,
   CartStack,
   SearchStack,
   ContactStack
 });


export default AppNavigator;
