import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigators from './AuthNavigators'

function RootNavigator() {
    return (
        <NavigationContainer>
            <AuthNavigators/> 
        </NavigationContainer>
    )
}

export default RootNavigator
