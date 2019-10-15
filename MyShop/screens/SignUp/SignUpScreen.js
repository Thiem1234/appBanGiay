import React,{Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row',justifyContent:'center', alignItems:'center', marginLeft:14 }}>
        <Text style={{fontSize:18, color:'#fff'}}>Đăng ký</Text>
        <TouchableOpacity style={{ marginLeft:276}} onPress={() => {
              this.props.navigationProps.navigate('AppNavigator'); 
            }}>
          <Icon name="ios-close" size={36} color={'#fff'}  />
        </TouchableOpacity>
      </View>
    );
  }
}

export default class SignUpScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      phone_number: "",
      email: "",
      password: "",
      kq: "",
      token: "..."
    }
  }

  registration(){
    fetch('http://192.168.1.114:8080/MyShop/registration.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": this.state.name,
        "phone_number": this.state.phone_number,
        "email": this.state.email,
        "password": this.state.password
      }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          kq:responseJson.token
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
      headerTitle: <LogoTitle navigationProps={navigation} />,
    }
  };
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.up}>
            <Icon name="ios-speedometer" size={100} color={'rgb(221, 97, 97)'}  />
            <Text style={styles.title}>Đăng ký</Text>
          </View>
          <View style={styles.down}>
            <View style={styles.textInputContaier}>
              <TextInput onChangeText={(name) => this.setState({name})} value = {this.state.name}  placeholder='Họ tên' style={styles.textInput}></TextInput>
            </View>
            <View style={styles.textInputContaier}>
              <TextInput onChangeText={(phone_number) => this.setState({phone_number})} value = {this.state.phone_number} placeholder='Số điện thoại' style={styles.textInput} ></TextInput>
            </View>
            <View style={styles.textInputContaier}>
              <TextInput onChangeText={(email) => this.setState({email})} value = {this.state.email} placeholder='Email' style={styles.textInput}></TextInput>
            </View>
            <View style={styles.textInputContaier}>
              <TextInput onChangeText={(password) => this.setState({password})} value = {this.state.password} placeholder='Mật khẩu' secureTextEntry={true} style={styles.textInput}></TextInput>
            </View>
            <TouchableOpacity style={styles.signUpButton} onPress={()=>this.registration()}>
              <Text style={styles.signUpButtonTitle}>Đăng ký</Text>
            </TouchableOpacity>
            <View style={{marginTop:20}}> 
              <Text style={{color:'white'}}>{this.state.kq}</Text>
            </View>
          </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"stretch", backgroundColor: 'rgb(234, 195, 176)'},
  up:{flex:3, flexDirection:'column',justifyContent:'center', alignItems:'center' },
  down:{flex:7, flexDirection:'column', justifyContent:'flex-start',alignItems:'center'},
  title:{color:'white',color:'rgb(255, 119, 34)', fontSize:23},
  textInputContaier:{backgroundColor: 'rgba(255,255,255,0.2)', borderRadius:6, paddingHorizontal:10, paddingLeft:10, marginBottom:20},
  textInput:{width:280, height:45},
  loginButton:{width:300, height:45, borderRadius:6, justifyContent:'center', alignItems:'center', backgroundColor: 'rgb(221,97,97)'},
  loginButtonTitle:{ fontSize:18, color:"white"},
  signUpButton:{width:300, height:45, borderRadius:6, justifyContent:'center', alignItems:'center', backgroundColor: 'rgb(221,97,97)'},
  signUpButtonTitle:{color:"white", fontSize:18},
  textOR:{flex:1, textAlign:"center"},
  divider:{flexDirection:'row', height:40, width:298, justifyContent:'center', alignItems:'center'},
  lines:{flex:2, height:1, backgroundColor:"black"}
})