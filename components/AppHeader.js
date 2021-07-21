import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return(
      <View style = {styles.textcontainer}>
        <Text style = {styles.text}>School Attendance</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textcontainer: {
    backgroundColor: 'darkblue',
    width: 350,
    height: 50
  },
  text: {
    color: "yellow",
    marginTop: 10,
    marginLeft: -10,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  }
})