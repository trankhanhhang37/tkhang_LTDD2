import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const products = [ flatlist 
//     { id: 1, name: 'Product 1', price: '100.000đ', image: require('../../assets/logocafe.png') },
//     { id: 2, name: 'Product 2', price: '200.000đ', image: require('../../assets/logocafe.png') },
//     { id: 3, name: 'Product 3', price: '300.000đ', image: require('../../assets/logocafe.png') },
// ];


const categories = [
    {
        id: '1',
        name: 'Product 1',
        price: '$10',
        image: require('../assets/product/sn1.jpg'),
    },
    {
        id: '2',
        name: 'Product 2',
        price: '$20',
        image: require('../assets/product/sn1.jpg'),
    },
    {
        id: '2',
        name: 'Product 2',
        price: '$20',
        image: require('../assets/product/sn1.jpg'),
    },
    {
        id: '2',
        name: 'Product 2',
        price: '$20',
        image: require('../assets/product/sn3.jpg'),
    },
    {
        id: '2',
        name: 'Product 2',
        price: '$20',
        image: require('../assets/product/sn2.jpg'),
    },
    {
        id: '2',
        name: 'Product 2',
        price: '$20',
        image: require('../assets/product/sn1.jpg'),
    },
    {
        id: '1',
        name: 'Product 2',
        price: '$20',
        image: require('../assets/product/sn2.jpg'),
    },
    {
        id: '2',
        name: 'Product 2',
        price: '$20',
        image: require('../assets/product/sn1.jpg'),
    },

];
// function Category() {
//   const [cat, setCat] = useState([]);

//   useEffect(() => {
//     getAllCat();
//   }, []);

//   const getAllCat = () => {
//     axios
//       .get('https://fakestoreapi.com/products/category/jewelery')
//       .then(function (response) {
//         // handle success
//         setCat(response.data);
//       })
//       .catch(function (error) {
//         // handle error
//         alert(error.message);
//       })
//       .finally(function () {
//         // always executed
//         console.log('Finally called');
//       });
//   };
//   const renderCat = (cat) => (
//     <View style={styles.catItem} key={cat.id}>
//       <Image source={{ uri: cat.image }} style={styles.catImage} />
//       <Text style={styles.catName}>{cat.title}</Text>
//       {/* <Text style={styles.productPrice}>{product.price}</Text> */}
//     </View>
//   );
//   return (
//     <View style={styles.container}>
//       {/* <TouchableOpacity
//         style={styles.buttonStyle}
//         onPress={getAllProduct}>
//         <Text>Simple Get Call</Text>
//       </TouchableOpacity> */}

//       <Text style={styles.title}>Jewelery Shop
//       </Text>
//       {/* <Image source={require('../../assets/logocafe.png')} style={styles.logo} /> */}
//       <Text style={styles.title}>Product</Text>
//       <ScrollView horizontal>
//         {cat.map((cat) => renderCat(cat))}
//       </ScrollView>
//     </View>
//   );
// }

const Category = () => {
    const renderCatItem = ({ item }) => (
        <TouchableOpacity style={styles.catItem} onPress={()=>{AsyncStorage.removeItem('cartItems')}}>
            <Image source={item.image} style={styles.catImage} />
            <Text style={styles.catName}>{item.name}</Text>
            {/* <Text style={styles.catPrice}>{item.price}</Text> */}
        </TouchableOpacity>
    );
    // const { search } = this.state;

    return (
        <View style={styles.home}>
            <View>
                <Text style={styles.title}>Category</Text>
            </View>
            {/* <SearchBar
                placeholder="Type Here..."
                // onChangeText={this.updateSearch}
                value={search}
            /> */}
            <FlatList
                data={categories}
                horizontal={true}
                renderItem={renderCatItem}
                contentContainerStyle={styles.categoryList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
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
  catItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  catImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 4,
  },
  catName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  catPrice: {
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
  categoryList:
  {
    marginHorizontal:3
  }
});

export default Category;