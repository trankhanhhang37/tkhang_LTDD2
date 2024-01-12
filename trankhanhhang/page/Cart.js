import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { bindActionCreators } from "redux";
import * as ActionCreaters from "../states/ActionCreaters";




export default function Cart({ navigation }) {
  const cart_product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { removeCartItem, decreaseCartItemQuantity, increaseCartItemQuantity } = bindActionCreators(ActionCreaters, dispatch);//call dispatch
  const [refresh, setRefresh] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  const [totalPrice,setTotalPrice]=useState(0);
  // const update_cart = async () => {
  //   try {
  //     const existingCartItems = await AsyncStorage.getItem('cartItems');
  //     setCartItems(JSON.parse(existingCartItems));//convertToJson
  //   } catch (error) {
  //     console.log("ae");
  //   }
  // }
  const increase = (id, quantity, avaiableQuantity) => {
    if (quantity < avaiableQuantity) {
      console.log("dang them")
      increaseCartItemQuantity({ id: id, type: "increase" });
      setRefresh(!refresh);
    }
  }
  const decrease = (id, quantity) => {
    if (quantity > 1) {
      decreaseCartItemQuantity({ id: id, type: "decrease" });
      setRefresh(!refresh);
    }
  }
  const deleteItem=(id)=>{
    removeCartItem(id);
  }
  useEffect(() => {
    // update_cart();
    setTotalPrice(cart_product.reduce((accumulator,object)=>{
      return accumulator+ object.price*object.quantity;
    },0));
  }, [cart_product,refresh]);


  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.goBack() }}>
        <Ionicons name="arrow-back-circle-outline" size={30} />
      </TouchableOpacity>
      <Text></Text>
      {/* <FlatList
        data={cart_product}
        renderItem={({ item }) => <Item product={item} />}
        keyExtractor={item => item.id}
      />  */}
      {cart_product.length === 0 ? (<><Text>Cart is empty
        </Text></>) : (
        <ScrollView>
          <View>
            {cart_product.map((product, index) => (
              <TouchableOpacity key={index} style={styles.productItem}
                onPress={() => { navigation.navigate('product-detail', { product }) }}>
                <View style={styles.container}>
                  <TouchableOpacity style={styles.removeItem} >
                    <Ionicons name="close-outline" size={26} color="#a3a375" onPress={()=>deleteItem(product._id)}/>

                  </TouchableOpacity>
                  <Image source={{ uri: product.image }} style={styles.productImage} />
                  <View style={styles.info}>
                    <Text style={styles.productName}>{product.title} </Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                    <View style={styles.viewQuantity}>

                      <TouchableOpacity>
                        <Ionicons name="remove-circle-outline" size={26} color="#a3a375" onPress={() => { decrease(product._id, product.quantity); }} />
                      </TouchableOpacity>

                      <Text style={styles.productQuantity}>{product.quantity}</Text>

                      <TouchableOpacity>
                        <Ionicons name="add-circle-outline" size={26} color="#a3a375" onPress={() => { increase(product._id, product.quantity, product.avaiableQuantity); }} />
                      </TouchableOpacity>
                    </View>
                  </View>


                </View>

              </TouchableOpacity>
            )
            )}
          </View>
          <View style={styles.footer}>
            <Text>TỔNG TIỀN: {totalPrice} </Text>
            <TouchableOpacity style={styles.payBtn}>
              THANH TOÁN

            </TouchableOpacity>


          </View>

        </ScrollView>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 20,
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: "#e6e6e6",
    // marginLeft:20,

  },
  footer: {
    flexDirection: "column",
    marginLeft: 20,


  },
  productQuantity: {
    fontSize: 20,
    color: "#3d3d29",
    marginBottom: 6,
    marginLeft: 6,
    marginRight: 6,


  },
  productImage: {
    // width: widthToDp(30),
    // height: heightToDp(30),
    borderRadius: 10,
    width: 100,
    height: 100,
    // resizeMode: 'cover',
    // marginBottom: 8,
    // borderRadius: 4,
  },
  info: {
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 10,
    width: 200,
  },
  viewQuantity: {
    borderColor: "#e6e6e6",
    borderRadius: 2,
    height: 20,
    width: 20,
    flexDirection: "row",
  },
  payBtn: {
    // marginRight: 25,
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#29a3a3",
    marginBottom: 20,

  },
});
