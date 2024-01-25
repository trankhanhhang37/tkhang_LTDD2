import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
    StyleSheet, Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ImageBackground,

} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CheckBox } from "react-native-elements";
export default function Profile({ navigation }) {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [isSelected, setSelection] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    // const _retrieveData = async () => {
    //     try {
    //         const user = await AsyncStorage.getItem('authUser');
    //         if (user !== null) {
    //             setUserInfo(JSON.parse(user));
                
    //         } else {
    //             console.log("null");
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
// useEffect(()=>{
//     _retrieveData();
// })
    return (
        <View style={styles.container}>

            <View style={styles.tab}>

                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Ionicons name="arrow-back-circle-outline" size={30} color="#707981" />
                </TouchableOpacity>

                <Text style={styles.productName}>Trang cá Nhân</Text>
            </View>

            <ScrollView>

                <View style={styles.main}>
                    <Text>{userInfo.name}</Text>
                    
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Số Điện Thoại"
                        placeholderTextColor="#707981"
                    // onChangeText={(email) => setEmail(email)}
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Địa chỉ"
                        placeholderTextColor="#707981"
                    // onChangeText={(email) => setEmail(email)}
                    />


                    <View style={styles.viewQuantity}>


                        <Text style={styles.productQuantity}></Text>

                    </View>
                </View>

                <View style={styles.main}>
                    <Text style={styles.productName}>Lịch sử mua hàng</Text>
                    
                    <View style={styles.viewQuantity}>
                        <Text style={styles.productQuantity}></Text>
                    </View>
                </View>


                {/* <View style={styles.main}>
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
                    <TouchableOpacity style={styles.payBtn}
                        onPress={() => navigation.navigate("")}>
                        THANH TOÁN

                    </TouchableOpacity>

                </View> */}


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
    main: {
        // flex: 1,
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: "#e6e6e6",
    },
    check:{
        flexDirection:'row',
        marginLeft:10,

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
        marginLeft: 90,
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