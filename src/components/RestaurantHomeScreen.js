import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/styles'
import RestaurantHeader from './RestaurantHeader'

const RestaurantHomeScreen = ({navigation, route}) => {

    const {id, restaurant} = route.params;

    return (
        <View style={styles.container}>
            <RestaurantHeader id = {id} navigation={navigation}/>
        </View>
    )
}

export default RestaurantHomeScreen

const styles = StyleSheet.create({
    

})
