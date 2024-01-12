import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from "react-redux";
import * as ActionCreaters from "../states/ActionCreaters";
import { bindActionCreators } from 'redux';
import { Ionicons } from '@expo/vector-icons';
const DetailProduct = ({ navigation, route }) => {

  const { product } = route.params;
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();
  const { addCartItem } = bindActionCreators(ActionCreaters, dispatch);//call dispatch
  const increase = (stock) => {
    if (stock > quantity) {
      setQuantity(quantity + 1);

    }
  }
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  const addToCart = (product, quantity) => {

    if (quantity > 0) {
      addCartItem(product, quantity);//2 tham so // them sp
    } else {
      alert("Quantity must be greater than zero!")
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.goBack() }}>
        <Ionicons name="arrow-back-circle-outline" size={30} color="#707981" />
      </TouchableOpacity>
      
      <Image source={{ uri: product.images[0] }} style={styles.productImage} />
      <Text style={styles.productName}>{product.title}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <Text style={styles.productDescription}>Chi tiết: {product.description}</Text>
      <View style={styles.viewQuantity}>

        <TouchableOpacity>
          <Ionicons name="remove-circle-outline" size={26} color="#a3a375" onPress={() => { decrease(); }} />
        </TouchableOpacity>

        <Text style={styles.productQuantity}>{quantity}</Text>

        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={26} color="#a3a375" onPress={() => { increase(product.stock); }} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.cartButton} onPress={() => addToCart(product, quantity)}>
        {/* <Icon name="shopping-cart" size={24} color="maroon" /> */}
        <MaterialCommunityIcons name="cart-plus" color="#3d3d29" size={24} />
        <Text> Thêm vào Giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
  },
  productImage: {
    width: "90%",
    height: "50%",
    resizeMode: 'cover',
    marginBottom: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 25,

  },
  cartButton: {
    // width:"70%",
    backgroundColor: '#cceeff',
    padding: 5,
    marginTop: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  viewQuantity: {
    borderColor: "#e6e6e6",
    borderRadius: 2,
    height: 20,
    width: 20,
    flexDirection: "row",
    marginRight:50,
    marginBottom:20
  },
  productQuantity: {
    fontSize: 20,
    color: "#3d3d29",
    marginBottom: 6,
    marginLeft: 6,
    marginRight: 6,


  },


});

const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Dữ liệu trong AsyncStorage đã được xóa thành công');
  } catch (error) {
    console.error('Lỗi xóa dữ liệu trong AsyncStorage:', error);
  }
};

// Gọi hàm để xóa dữ liệu

export default DetailProduct;