import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Button,
  TextInput } from 'react-native';
import DropdownMenu from './android/app/src/components/DropdownMenu';
import {createStackNavigator} from 'react-navigation';

class App extends Component {

render() {
return (
<View style = {styles.container}>
<Text style = {styles.headingtop}>112 India</Text>
<Text style = {styles.headingbottom}>Your Mobile Number</Text>
<DropdownMenu/>

<TextInput style = {styles.inputBox}
placeholder="Enter Mobile Number"
underlineColorAndroid="transparent"
/>
<View style = {styles.btn}>
<Button 
title= 'Connect'
color="#e47171"
accessibilityLabel="Learn more about this purple button"
padding= '20px'
/>
</View>
</View>
);
}
}

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
color: '#fff',
textAlign: 'center',
fontWeight: 'bold'
},
headingbottom: {
fontSize: 18,
color: '#fff',
textAlign: 'center',
},
btn : {

marginTop: 20,

},
inputBox: {
height: 40,
borderWidth: 0.5,
backgroundColor: '#fff',
marginTop: 20,
color: '#000'
}
});

const MainNavigator = createStackNavigator({
  Home: App ,
  Profile: {screen: ProfileScreen},
});

export default App;