import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import HomeScreen from './HomeScreen';

export default class Screen2 extends React.Component{
  render(){
    return(
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen')
          }}
        ><Text>Get Attendance</Text></TouchableOpacity>
      </View>
    )
  }
}