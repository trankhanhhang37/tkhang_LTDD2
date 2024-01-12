import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Header from './components/Header';
import Footer from './components/Footer';
// import Login from './page/Login';
import Navigation from './Navigation';
import Search from './page/Search';
// import Home from './page/Home';
// import NavHome from './page/Tabnav';
// import Category from './page/Category';
import { Provider } from "react-redux";
import {store} from "./states/store";

export default function App() {
  return (

    <Provider store={store}>
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <StatusBar style="auto" />  */}
        {/* <Header></Header> */}
        {/* <Category/>*/}
        <Footer />
        <Navigation />

      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
