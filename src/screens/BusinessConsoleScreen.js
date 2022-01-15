import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import { Icon } from 'react-native-elements';

function BusinessConsoleScreen() {
    return (
        <View style = {styles.container}>
            <Text>Welcome to business Console</Text>
        </View>
    )
}

export default BusinessConsoleScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
