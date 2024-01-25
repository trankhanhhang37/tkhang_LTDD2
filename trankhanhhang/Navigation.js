import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './page/Home';
import Login from './page/Login';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from './page/Cart';
import DetailProduct from './page/DetailProduct';
import Register from './page/Register';
import Payments from './page/Payments';
import Profile from './page/Profile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NavHome=({navigation}) =>{
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}} 
      >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

function Navigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       screenOptions={{headerShown: false}} 
       initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen
          name="Tab"
          component={NavHome}
          // options={{title: 'Welcome'}}
        />
          <Stack.Screen name="product-detail" component={DetailProduct} />
          <Stack.Screen name="Payments" component={Payments} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;