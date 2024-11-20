import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Bluetooth from './Bluetooth'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();

const Home = () => {


  return (
    <View>
      <Text>Placeholder Home</Text>
    </View>

  );
};


export default Home;