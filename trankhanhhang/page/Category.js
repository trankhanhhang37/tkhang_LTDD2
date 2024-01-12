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