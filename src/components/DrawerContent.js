import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  Switch,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Avatar, Button, Icon} from 'react-native-elements';
function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="#ff8c52" />
      <DrawerContentScrollView {...props}>
        <View
          style={{
            backgroundColor: '#ff8c52',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              paddingVertical: 15,
            }}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={{
                uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
              }}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
                Ugwu Arinze
              </Text>
              <Text style={{color: 'white', fontSize: 14}}>
                arinze@xpressfood.com
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom:5}}>
              <View style={{flexDirection: 'row', marginTop: 0}}>
                <View
                  style={{
                    marginLeft: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
                    1
                  </Text>
                  <Text style={{color: 'white', fontSize: 14}}>
                    My Favourite
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 0}}>
                <View
                  style={{
                    marginLeft: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
                    0
                  </Text>
                  <Text style={{color: 'white', fontSize: 14}}>My Cart</Text>
                </View>
              </View>
            </View>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem 
          label = "Payment"
          icon = {({color, size})=>(
              <Icon
                type="material-community"
                name="credit-card-outline"
                color={color}
                size={size}
              />
          )}
        />
        <DrawerItem 
          label = "Promotion"
          icon = {({color, size})=>(
              <Icon
                type="material-community"
                name="tag-heart"
                color={color}
                size={size}
              />
          )}
        />

<DrawerItem 
          label = "Settings"
          icon = {({color, size})=>(
              <Icon
                type="material-community"
                name="cog-outline"
                color={color}
                size={size}
              />
          )}
        />

<DrawerItem 
          label = "Help"
          icon = {({color, size})=>(
              <Icon
                type="material-community"
                name="lifebuoy"
                color={color}
                size={size}
              />
          )}
        />

        <View style={{ borderTopWidth:1, borderTopColor: '#e1e8ee' }}>
            <Text style={styles.preferences}>Preferences</Text>
            <View style={styles.switchText}>
                <Text style={styles.darkThemeText}>Dark Theme</Text>
                <View style={{ paddingRight:10 }}>
                    <Switch
                      trackColor = {{ false: "#767577", true: "#81boff" }}
                      thumbColor = "#f4f3f4"
                    />
                </View>
            </View>
        </View>


      </DrawerContentScrollView>
      
      <DrawerItem 
          label = "Sign Out"
          icon = {({color, size})=>(
              <Icon
                type="material-community"
                name="logout-variant"
                color={color}
                size={size}
              />
          )}
        />
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderWidth: 4,
    borderColor: 'white',
  },
  preferences: {
      fontSize:16,
      color:'#5e6977',
      paddingTop: 10,
      paddingLeft:20
  },
  switchText:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingLeft:20,
      paddingVertical:5,
      paddingRight:10
  },
  darkThemeText:{
      fontSize:16,
      color:'#5e6977',
      paddingTop:10,
      paddingLeft:0,
      fontWeight:"bold"

  }
});
