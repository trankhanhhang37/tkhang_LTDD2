import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {  StyleSheet,Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,

} from "react-native";
export default function Login( { navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/br.jpg')}  style={styles.image}>    
     <StatusBar style="auto" />
     <Image style={styles.imageAva} source={require("../assets/Khang.png")} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          // onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          // onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity title="LOGIN" style={styles.loginBtn}
      
              onPress={() => navigation.navigate("Tab")}
              >
                <Text style ={styles.signupText}>LOG IN</Text>

      </TouchableOpacity> 
      <TouchableOpacity title="SIGN UP" style={styles.signupBtn}
      onPress={() => navigation.navigate("Register")}>
        <Text style ={styles.signupText}>SIGN UP</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  imageAva:{
    marginLeft:130,

    borderRadius: 60,
    height:120,
    width:120,
    marginBottom: 40,
  },
  image: {
    // borderRadius: 60,
    // height:120,
    // width:120,
    // marginBottom: 40,
    flex: 1,
    justifyContent: 'center',
    opacity: 0.9,
  },
  inputView: {
    marginLeft:55,
    backgroundColor: "#b3d9ff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    marginLeft:130,
    height: 30,
    marginBottom: 20,
  },
  loginBtn: {
    marginLeft:45,
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#29a3a3",

  },
  signupBtn: {
    marginLeft:45,

    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#1f7a7a",
  },

});