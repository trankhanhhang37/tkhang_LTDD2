import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import {urlImage} from "../config";

import { bindActionCreators } from "redux";
import * as ActionCreaters from "../states/ActionCreaters";
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground, } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CheckBox } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import orderservice from "../services/OrderService";
export default function Payments({ navigation }) {

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [note, setNote] = useState("");
    const [isSelected, setSelection] = useState(false);

    const cart_product = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const { emptyCart  } = bindActionCreators(ActionCreaters, dispatch);//call dispatch

    const [totalPrice, setTotalPrice] = useState(0);
    const [refresh, setRefresh] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    const _retrieveData = async () => {
        try {
            const user = await AsyncStorage.getItem('authUser');
            if (user !== null) {
                setUserInfo(JSON.parse(user));

                setName(JSON.parse(user).name);

                setAddress(JSON.parse(user).address);
                setEmail(JSON.parse(user).email);
                setPhone(JSON.parse(user).phone);
                
            } else {
                console.log("null");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const checkout = async () => {
        var order = await {
            "user_id": userInfo.id,
            "name": userInfo.name,
            "phone": userInfo.phone,
            "address": address,
            "email": userInfo.email,
            "note": "ghi chu",
            "order_detail": cart_product
          }
          try {
            console.log(order);

            const add_order = await orderservice.checkout(order);
        
            navigation.replace("Tab");
            alert("dat hang thanh cong");
            emptyCart();

          } catch (error) {
            console.error(error);
          }
    }
    useEffect(() => {
        // update_cart();
        _retrieveData();
        setTotalPrice(cart_product.reduce((accumulator, object) => {
            return accumulator + object.price * object.quantity;
        }, 0));
    }, [cart_product, refresh]);
    return (
        <View style={styles.container}>
            <View style={styles.tab}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Ionicons name="arrow-back-circle-outline" size={30} color="#707981" />
                </TouchableOpacity>
                <Text style={styles.productName}>Xác Nhận Đặt Hàng</Text>
            </View>
            <ScrollView>
                <View style={styles.info}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Họ Tên"
                        value={name}
                        placeholderTextColor="#707981"
                        onChangeText={(email) => setEmail(email)}
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        value={email}
                        placeholderTextColor="#707981"
                        onChangeText={(email) => setEmail(email)}
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Số Điện Thoại"
                        value={phone}
                        placeholderTextColor="#707981"
                        onChangeText={(email) => setEmail(email)}
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Địa chỉ"
                        value={address}
                        placeholderTextColor="#707981"
                        onChangeText={(email) => setEmail(email)}
                    />



                </View>
                <View style={styles.main}>
                    <Text style={styles.productName}>Sản Phẩm</Text>
                    {/* <View style={styles.viewQuantity}>
                        <Text style={styles.productQuantity}></Text>
                    </View> */}
                    <View>
                        {cart_product.map((product, index) => (
                            <TouchableOpacity key={index} style={styles.productItem}
                                onPress={() => { navigation.navigate('product-detail', { product }) }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={{ uri:   urlImage+"product/"+product.image }} style={styles.productImage} />
                                    <View style={styles.info}>
                                        <Text style={styles.productName}>{product.title} </Text>
                                        <Text style={styles.productPrice}> {product.price}</Text>
                                        <View style={styles.viewQuantity}>
                                            <Text style={styles.productQuantity}>SL:{product.quantity}</Text>
                                        </View>
                                    </View>


                                </View>

                            </TouchableOpacity>
                        )
                        )}
                    </View>

                </View>
                <View style={styles.footer}>
                    <Text style={styles.productName}>Phương Thức Thanh Toán</Text>
                    <View style={styles.check}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ alignSelf: 'center' }}>Thanh toán khi nhận hàng</Text>
                    </View>
                    <View style={styles.check}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ alignSelf: 'center' }}>Thẻ tín dụng</Text>
                    </View>

                    <Text style={{ fontSize: 18 }}>TỔNG TIỀN: {totalPrice} </Text>

                    <TouchableOpacity style={styles.payBtn}
                        onPress={() => checkout()}>
                        THANH TOÁN

                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
    tab: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: "#e6e6e6",

    },
    info: {
        // flex: 1,
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: "#e6e6e6",
        marginLeft: 20,

    },
    main: {
        flex: 1,
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: "#e6e6e6",
    },
    footer: {
        flexDirection: "column",
        marginLeft: 20,
    },

    check: {
        flexDirection: 'row',
        marginLeft: 10,

    },

    inputView: {
        marginLeft: 55,
        backgroundColor: "#b3d9ff",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        // flex: 1,
        marginTop: 10,
        paddingLeft: 10,
        width: 300,
        height: 50,
        fontSize: 16,
        marginLeft: 25,
        borderColor: '#e6e6e6',
    },
    // forgot_button: {
    //     marginLeft: 130,
    //     height: 30,
    //     marginBottom: 20,
    // },
    // productImage: {
    //     width: "90%",
    //     height: "50%",
    //     resizeMode: 'cover',
    //     marginBottom: 10,
    // },
    productName: {
        marginLeft: 70,
        fontSize: 16,
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
        width: 80,
        height: 80,
        // resizeMode: 'cover',
        marginLeft: 10,
        // borderRadius: 4,
    },

    viewQuantity: {
        borderColor: "#e6e6e6",
        borderRadius: 2,
        height: 20,
        width: 20,
        flexDirection: "row",
        marginRight: 50,
        marginBottom: 20

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
    payBtn: {
        marginLeft: 30,
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#29a3a3",
        marginBottom: 20,
    },



});
