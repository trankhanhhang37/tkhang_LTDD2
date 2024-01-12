// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.aaa}>
        {/* <StatusBar style="auto" /> 
 */}
      <Text style={styles.footerStyle}></Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  aaa: {
    // flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  footerStyle: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#ff00ff',

  },

});
