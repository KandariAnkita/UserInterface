import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Picker, 
  StyleSheet } from 'react-native'

class DropdownMenu extends Component {
state = {user: ''}
updateUser = (user) => {
this.setState({ user: user })
}
render() {
return (
<View style = {styles.pickerBox}>
  <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
  <Picker.Item label = "--Select--" value = "0" />
  <Picker.Item label = "Andhra Pradesh" value = "Andhra Pradesh" />
  <Picker.Item label = "Arunachal Pradesh" value = "Arunachal Pradesh" />
  <Picker.Item label = "Assam" value = "Assam" />
  <Picker.Item label = "Bihar" value = "Bihar" />
  <Picker.Item label = "Chhattisgarh" value = "Chhattisgarh" />
  <Picker.Item label = "Goa" value = "Goa" />
  <Picker.Item label = "Gujarat" value = "Gujarat" />
  <Picker.Item label = "Haryana" value = "Haryana" />
  <Picker.Item label = "Himachal Pradesh" value = "Himachal Pradesh" />
  <Picker.Item label = "Jammu and Kashmir" value = "Jammu and Kashmir" />
  <Picker.Item label = "Jharkhand" value = "Jharkhand" />
  <Picker.Item label = "Karnataka" value = "Karnataka" />
  <Picker.Item label = "Kerala" value = "Kerala" />
  <Picker.Item label = "Madhya Pradesh" value = "Madhya Pradesh" />
  <Picker.Item label = "Maharashtra" value = "Maharashtra" />
  <Picker.Item label = "Manipur" value = "Manipur" />
  <Picker.Item label = "Meghalaya" value = "Meghalaya" />
  <Picker.Item label = "Manipur" value = "Manipur" />
  </Picker>
  <Text style = {styles.text}>{this.state.user}</Text> 
</View>
)
}
}
export default DropdownMenu

const styles = StyleSheet.create({
pickerBox: {
borderWidth: .5,
backgroundColor: '#fff',
marginTop: 10
}
})

