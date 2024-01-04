import React, { useEffect, useState } from 'react';
import { View,FlatList, Image, Alert,Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from "./Screens/Homescreen";
import About from "./Screens/About";


const Tab= createBottomTabNavigator();

const App= () => {
  

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Homescreen' tabBarOptions={{
        labelPosition: 'beside-icon',
        showLabel: true,
        activityIndicatorShowLabel: true
      }}>
        <Tab.Screen
          name="Homescreen"
          options={{ 
            tabBarLabel: "Home",
            tabBarBadge:3
           }}
          component={Homescreen}
        />
        <Tab.Screen
          name="About"
          options={{ tabBarLabel: "About us" }}
          component={About}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#dddddd',
    padding: 20, // numeric value without quotes
  },
  form: { 
    backgroundColor: 'white',
    borderRadius:10,
    padding: 20, // numeric value without quotes
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black', // color value
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevetion:5,
    height:900
    
  },
  label: {
    
    fontSize: 12,
    fontWeight: 'bold',
    color:'black'
  },
  input: {
    
    padding:10,// numeric value without quotes
    height:40,
    borderRadius:5,
    borderColor:'#ddd',
    marginBottom:5,
    backgroundColor:'gray'


  },
  errors: {
    color: 'red',
    fontSize: 12,
  },
  button:{
    backgroundColor:'green',
    width:100
  },
  header:{
    fontSize:16,
    color:'black',
    justifyContent:'center',
    paddingTop:5,
    marginTop:5,
    marginBottom:8,
    fontWeight:'bold'

  }
});

export default App;