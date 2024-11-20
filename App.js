import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StyleAreaView, SafeAreaView} from 'react-native';
import SignIn from './components/SignIn'
import Home from './components/Home'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background
  },
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
        <NavigationContainer >
            <Tab.Navigator screenOptions={{
            tabBarLabelStyle: {
              fontSize: 25, // Adjust for similar size
              fontFamily: 'Arial', // Use appropriate font family
              fontWeight: '100000', // Normal weight
              color: '#1B3556', // Dark blue color (adjust as per your requirement)
              textTransform: 'lowercase', // Make text lowercase
            },
          }}
        >
          < Tab.Screen name="Aqua Analyzer" component={Home} />
          </Tab.Navigator>
        </NavigationContainer>




        <View style={styles.placeholder}>
          <Text>Placeholder</Text>
        </View>
    </SafeAreaView>
    


  );
}

