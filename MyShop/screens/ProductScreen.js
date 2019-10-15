import React,{ Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, FlatList, TouchableOpacity} from 'react-native';
export default class ProductScreen extends Component{
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  componentDidMount(){
    return fetch('http://192.168.1.114:8080/MyShop/api_list_product.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render(){
    const {
      container, titleContainer, title, body, productContainer, productImage, productName, productPrice
    } = styles;
    return(
      <View style={container}>
        <View style={titleContainer}>
          <Text style={title}>Sản Phẩm</Text>
        </View>
        <FlatList
          numColumns={2}
          justifyContent={'space-around'}
          style={body}
          data = {this.state.dataSource}
          renderItem = {({item}) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Details',{
              name: item.name,
              price: item.price,
              img: item.img,
              detail: item.detail
            })}>
              <View style={productContainer}>
                <Image source ={{uri:item.img}} style={productImage} />
                <Text style={productName}>{item.name}</Text>
                <Text style={productPrice}>{item.price} $</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
} 

const {width} = Dimensions.get('window');
const productWidth = (width-60)/2;
const productImageHeight = (productWidth/361)*452;
const styles = StyleSheet.create({
  container: {backgroundColor:'#fff', borderColor:"#cdc",borderWidth:1, margin:10,shadowOffset:{width:0, height:3}, shadowOpacity: 0.2,shadowColor:'#2E272B',},
  titleContainer: {height:50, justifyContent:'center', paddingLeft:10,  
  },
  title: {color:'#147efb',fontSize:20, opacity:0.7,fontWeight:'500'},
  body:{ flexDirection:'row', flexWrap:'wrap',paddingBottom:10},
  productContainer:{width: productWidth, shadowOffset:{width:0, height:3}, shadowOpacity: 0.2,shadowColor:'#2E272B',
  borderColor:"#cdc",borderWidth:1,  marginBottom:10, marginHorizontal:4},
  productImage:{width:productWidth,height:productImageHeight},
  productName:{ paddingLeft:10, fontFamily:'Avenir', color:'#556494', fontWeight:'bold', marginVertical:5 },
  productPrice:{paddingLeft:10, fontFamily:'Avenir', color:'#f21a1a', marginBottom:5},
})