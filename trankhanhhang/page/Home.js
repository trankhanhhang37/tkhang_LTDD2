import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
// import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import Category from './Category';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from './Search';


// import NavHome from './Tabnav';
// import {NavigationContainer} from '@react-navigation/native';

// const products = [
//     {
//         id: '1',
//         name: 'Product 1',
//         price: '$10',
//         image: require('../assets/product/sn1.jpg'),
//     },
//     {
//         id: '2',
//         name: 'Product 2',
//         price: '$20',
//         image: require('../assets/product/sn1.jpg'),
//     },
//     {
//         id: '2',
//         name: 'Product 2',
//         price: '$20',
//         image: require('../assets/product/sn1.jpg'),
//     },
//     {
//         id: '2',
//         name: 'Product 2',
//         price: '$20',
//         image: require('../assets/product/sn3.jpg'),
//     },
//     {
//         id: '2',
//         name: 'Product 2',
//         price: '$20',
//         image: require('../assets/product/sn2.jpg'),
//     },
//     {
//         id: '2',
//         name: 'Product 2',
//         price: '$20',
//         image: require('../assets/product/sn1.jpg'),
//     },
//     {
//         id: '1',
//         name: 'Product 2',
//         price: '$20',
//         image: require('../assets/product/sn2.jpg'),
//     },
//     {
//         id: '2',
//         name: 'Product 2',
//         price: '$20',
//         image: require('../assets/product/sn1.jpg'),
//     },

// ];

function Home({navigation}) {
  const [products, setProducts] = useState([]);

  const getAllProduct = () => {
    axios
      .get('https://dummyjson.com/products')
      .then(function (response) {
        // handle success
        if(products!=[]){
          setProducts(response.data.products);
        }
       
      })}

useEffect(() => {
  getAllProduct();
}, []);


const Item = ({product}) => (
  <TouchableOpacity style={styles.productItem} onPress={()=>{navigation.navigate('product-detail',{product})}}>
     <Image source={{ uri: product.images[0]}} style={styles.productImage} /> 
    <Text style={styles.productName}>{product.title}</Text>
    <Text style={styles.productPrice}>{product.price}</Text>
  </TouchableOpacity>
);
return (
  <View style={styles.container}>
    {/* <Text style={styles.title}>Jewelery Shop
      </Text> */}
    {/* <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value=""
          onChange={() => { }}
          placeholder='Tim Kiem'
          placeholderTextColor={'#e6e6e6'}
        />

      <Text style={styles.productName}>huhuhuh</Text>
  
      </View>
    </View> */}
    <ScrollView>
    <Search/>
    <Image source={require('../assets/product/sn11.jpg')} style={styles.logo} />
    <Category />
    <Text style={styles.title}>Product</Text>
    <FlatList
        data={products}
        renderItem={({item}) => <Item product={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.productList}
        numColumns={2}
      />
    {/* <FlatList
      data={products}
      renderItem={renderProductItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.productList}
      numColumns={2}
    /> */}
</ScrollView>
  </View>
);

}
const styles = StyleSheet.create({
  productList: {
    //    marginVertical:10,

  },
  searchContainer: {
    width: "100%",
    height: 50,
    // backgroundColor: "#a3c2c2",
    marginBottom: 5,
    borderRadius: 10,


  },
  searchInput: {
    // marginLeft:10,
    width: "80%",
    height: 50,
    borderRadius: 3,
    borderRadius: 10,
    backgroundColor: "#a3c2c2",



  },
  searchBtn: {
    width: "20%",
    height: 50,
    borderRadius: 3,
    borderRadius: 10,

  },
  btnImage: {
    height: 50,
    width: "20%",

  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  logo: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  productItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 4,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default Home;