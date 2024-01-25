import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity, TextInput } from 'react-native';
// import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import Category from './Category';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from './Search';
import productservice from "../services/ProductService";
import {urlImage} from "../config";
function Home({navigation}) {
  const [products, setProducts] = useState([]);

  useEffect(function () {
      (async function () {
          await productservice.getNewProductAll(8, 1).then(function (result) {
            setProducts(result.data.new_products_all);

          });
      })();

  },[]);


const Item = ({product}) => (
  <TouchableOpacity style={styles.productItem} onPress={()=>{navigation.navigate('product-detail',{product})}}>
     <Image source={{uri:urlImage+"product/"+product.product_image}} style={styles.productImage} /> 
    <Text style={styles.productName}>{product.product_name}</Text>
    <Text style={styles.productPrice}>{product.listed_price}</Text>
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
        keyExtractor={item => item.product_id}
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

// const Home = () => {
//     const renderProductItem = ({ item }) => (
//         <TouchableOpacity style={styles.productItem}>
//             <Image source={item.image} style={styles.productImage} />
//             <Text style={styles.productName}>{item.name}</Text>
//             <Text style={styles.productPrice}>{item.price}</Text>
//         </TouchableOpacity>
//     );
//     const { search } = this.state;

//     return (
//         <View style={styles.home}>
//             <View>
//                 <Text style={styles.title}>Hello</Text>
//             </View>
//             {/* <SearchBar
//                 placeholder="Type Here..."
//                 // onChangeText={this.updateSearch}
//                 value={search}
//             /> */}
//             <FlatList
//                 data={products}
//                 renderItem={renderProductItem}
// keyExtractor={(item) => item.id}
//                 contentContainerStyle={styles.productList}
//                 numColumns={2}
//             />
{/* <ScrollView >
        {products.map((product) => renderProduct(product))} 
      </ScrollView> */}

  //         </View>
  //     );
  // };
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