
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SearchResultScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color:'black' }}>SearchResultScreen</Text>
        </View>
    )
}

export default SearchResultScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    }
})
