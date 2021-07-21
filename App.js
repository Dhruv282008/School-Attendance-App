import *as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Screen2 from './screens/Screen2';
import AppHeader from './components/AppHeader'
import db from './config'
export default class App extends React.Component{
  render() {
    return (
      <View>
      <AppHeader />
        <AppContainer />
      </View>
    );
  }
}
const AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Screen2: Screen2,
});

const AppContainer = createAppContainer(AppNavigator);
