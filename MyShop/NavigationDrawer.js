import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import AppNavigator from './AppNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignIn/SignInScreen';
import SignUpScreen from './screens/SignUp/SignUpScreen';
const color = {
  ACTIVE: '#147efb',
  INACTIVE:  '#ccc'
}
class NavigationDrawerStructure extends Component { 

  toggleDrawer = () => {
    this.props.navigation.openDrawer();
  };

    
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{marginRight:310, marginLeft:10}} onPress={()=>this.toggleDrawer()} >
          <Icon name="ios-menu" size={35}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{alert("ok day");}}>
          <Icon name="ios-contact" size={36}  />
        </TouchableOpacity>
      </View>
    );
  }
}
 
const SignInStack = createStackNavigator({
  screen: SignInScreen,
  navigationOptions: ({ navigation }) => ({
    title: 'Sign In',
    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    headerStyle: {
      backgroundColor: '#FF9800',
    },
    headerTintColor: '#000',
  }), 
});
const SignUpStack = createStackNavigator({
  screen: SignUpScreen,
  navigationOptions: ({ navigation }) => ({
    title: 'Sign Up',
    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    headerStyle: {
      backgroundColor: '#FF9800',
    },
    headerTintColor: '#fff',
  }),
  
});

 
const DrawerNavigatorExample = createDrawerNavigator({
  AppNavigator: {
    screen: AppNavigator,
    navigationOptions: {
      drawerLabel: 'Trang chủ', 
    },
  },
  
  SignInScreen: {
    screen: SignInStack,
    navigationOptions: {
      drawerLabel: 'Đăng nhập',
    },
  },
  SignUpScreen: {
    screen: SignUpStack,
    navigationOptions: {
      drawerLabel: 'Đăng ký',
    },
  },
});

export default createAppContainer(DrawerNavigatorExample);