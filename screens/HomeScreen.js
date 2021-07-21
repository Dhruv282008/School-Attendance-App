import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import db from '../config';

import Screen2 from './Screen2';
export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      present: false,
      absent: false,
    };
  }
  anjaliPresentPressed() {
    var anjaliPresent = db.ref('Anjali' + '/');
    anjaliPresent.update({
      'present': true,
    });
  }
  goToScreen2 = () => {
    this.props.navigation.navigate('Screen2');
  };
  render() {
    return (
      <View style={{ backgroundColor: 'yellow', height: 2000, width: 500 }}>
        <View>
          <Text
            style={
              (styles.header,
              {
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 6,
                marginLeft: -35,
                color: 'blue',
              })
            }>
            STUDENTS
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.header}>Anjali</Text>
          <TouchableOpacity
            style={styles.presentbutton}
            onPress={() => {
              this.anjaliPresentPressed();
            }}>
            <Text style={styles.marktext}>
              Present
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginLeft: 200,
              marginTop: -28.5,
              borderRadius: 20,
              backgroundColor: 'maroon',
              width: 100,
              height: 30,
              borderWidth: 1,
              borderColor: 'pink',
            }}>
            <Text style={{ textAlign: 'center', color: 'white', marginTop: 3 }}>
              Absent
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.header}>Rupin</Text>
          <TouchableOpacity style={styles.presentbutton}>
            <Text style={styles.marktext}>Present</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginLeft: 200,
              marginTop: -28.5,
              borderRadius: 20,
              backgroundColor: 'maroon',
              width: 100,
              height: 30,
              borderWidth: 1,
              borderColor: 'pink',
            }}>
            <Text style={{ textAlign: 'center', color: 'white', marginTop: 3 }}>
              Absent
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.header}>Aish</Text>
          <TouchableOpacity style={styles.presentbutton}>
            <Text style={styles.marktext}>Present</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginLeft: 200,
              marginTop: -28.5,
              borderRadius: 20,
              backgroundColor: 'maroon',
              width: 100,
              height: 30,
              borderWidth: 1,
              borderColor: 'pink',
            }}>
            <Text style={{ textAlign: 'center', color: 'white', marginTop: 3 }}>
              Absent
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.goToScreen2();
            }}
            style={styles.submitbutton}>
            <Text style={styles.submit}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 75,
    width: 320,
    backgroundColor: 'lightblue',
    marginTop: 10,
    borderRadius: 20,
  },
  header: {
    fontWeight: 'normal',
    color: 'darkblue',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  presentbutton: {
    borderRadius: 20,
    backgroundColor: 'lightgreen',
    width: 100,
    height: 30,
    marginLeft: 80,
    marginTop: -25,
    borderWidth: 1,
    borderColor: 'green',
  },
  marktext: {
    textAlign: 'center',
    color: 'darkblue',
    marginTop: 3,
  },
  submitbutton: {
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'darkblue',
    width: 100,
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 35,
    marginLeft: -35,
  },
  submit: {
    color: 'blue',
    fontStyle: 'bold',
  },
});
