import React from 'react'
import {
    View, 
    Button,
     } from 'react-native';


export default class Btn extends Component {

static navigationOptions = {
    title:'',
}
render(){
    const {navigate} = this.props.navigation;
return (
<View> 
<Button
    onPress={() => navigate("Profile", {screen: "ProfileScreen"})}
    title = "Connect"
    color = "white"/>
</View>
);
}
}

