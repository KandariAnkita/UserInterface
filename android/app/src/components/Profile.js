import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Picker,
  Button,
  TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Profile extends Component {
state = {user: ''}
updateUser = (user) => {
this.setState({ user: user })
}
render() {
 return (
  <View style = {styles.container}>
    <Text style = {styles.headingtop}>Profile</Text>

    <TextInput style = {styles.inputBox}
  placeholder="Enter Name"
  underlineColorAndroid="transparent"
  />

    <TextInput style = {styles.inputBox}
      placeholder="Enter Mobile Number"
      underlineColorAndroid="transparent"
    />

    <TextInput style = {styles.inputBox}
      placeholder="Enter Date"
      underlineColorAndroid="transparent"
    />

    <View style = {styles.pickerBox}>
      <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
      <Picker.Item label = "--Select--" value = "0" />
      <Picker.Item label = "Male" value = "Male" />
      <Picker.Item label = "Female" value = "Female" />
      </Picker>
      
  </View>

  <TextInput style = {styles.inputBox}
    placeholder=" "
    underlineColorAndroid="transparent"
  />

  <CheckBox
    title='Like to act as a Volunteer?'
    checked={this.state.checked}
  />

  <View style = {styles.btn}>
    <Button 
      title= 'Add Contact(0)'
      color="#ff8080"
      accessibilityLabel="Learn more about this purple button"
      padding= '20px'
    />
  </View>

  <View style = {styles.btn}>
    <Button 
      title= 'Update Profile'
      color="#ff8080"
      accessibilityLabel="Learn more about this purple button"
      padding= '20px'
    />
  </View>

  <View style = {styles.btn}>
    <Button 
      title= 'Update KYC'
      color="#ff8080"
      accessibilityLabel="Learn more about this purple button"
      padding= '20px'
  />
  </View>
  </View>
  );
  }}
  

const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#ec1313',
  padding: 20,
},
headingtop: {
  fontSize: 24,
  color: '#ff0000',
  textAlign: 'center',
  fontWeight: 'bold'
},
inputBox: {
height: 40,
borderWidth: 0.5,
backgroundColor: '#fff',
marginTop: 20,
color: '#000'
}
});




