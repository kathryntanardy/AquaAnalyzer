import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Bluetooth from './Bluetooth'

const Home = () => {

  return (
    <View style={styles.container}>
    <Text>Home Page</Text>
    <Bluetooth/>
    </View>
  );
};


export default Home;