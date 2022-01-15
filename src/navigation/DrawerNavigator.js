import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import RootClientTabs from './ClientTabs'
import { Icon } from 'react-native-elements';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
          drawerContent = {props => <DrawerContent {...props} />}
        >
            <Drawer.Screen
              name = "RootClientTabs"
              component = {RootClientTabs}
              options = {{ 
                  title: 'Clients',
                  drawerIcon: ({focused, size}) =>(
                    <Icon
                    type = "material-community"
                    name = "home"
                    color = {focused ? '#7cc' : '#5e6977'}
                    size = {size}
                  />
                  )
               }}
            />

        <Drawer.Screen
              name = "Business Console Screen"
              component = {BusinessConsoleScreen}
              options = {{ 
                  title: 'Business Console',
                  drawerIcon: ({focused, size}) =>(
                    <Icon
                    type = "material"
                    name = "business"
                    color = {focused ? '#7cc' : '#5e6977'}
                    size = {size}
                  />
                  )
               }}
            />
            
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
