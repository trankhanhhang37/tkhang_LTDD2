import { Image, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Header() {
  const pic = {
    uri: 'https://th.bing.com/th/id/OIP.HCgSM-yYWNVijIZnmz0fiQHaFj?rs=1&pid=ImgDetMain'
  };
  return (
    <View style={styles.header}>
       <Text style={styles.headerStyle}> </Text>
      <StatusBar style="auto" /> 
      <Image source={pic} style={styles.imgStyle} />
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    // justifyContent:'center',
    // alignItems:'center',
  },
  headerStyle: {
    fontSize: 25,
    textAlign: 'center',
    // margin: 10,
    color: '#ff00ff',
  },
  imgStyle:{
    height: 200,
    width:400,
    alignItems: "center",    
    // marginLeft: 150,
    // textAlign: 'center',


  }
});
