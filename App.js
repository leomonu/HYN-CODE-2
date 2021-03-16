import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen';
import RequestForHelp from './screens/RequestForHelpScreen'
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import VolenteerScreen from './screens/VolenteerScreen';
console.disableYellowBox = true;
export default function App() {
  return (
    
    <AppContainer/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const switchNavigator = createSwitchNavigator({
  Welcome:{screen:WelcomeScreen},
  Home:{screen:HomeScreen},
  Help:{screen:RequestForHelp},
  Volenteer:{screen:VolenteerScreen}
})
const AppContainer =  createAppContainer(switchNavigator)
