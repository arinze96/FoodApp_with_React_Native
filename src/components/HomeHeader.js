import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';

function HomeHeader({navigation}) {
    const BadgeIcon = withBadge(0)(Icon);
    return (
        <View style={styles.homeHeader}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 15,
            marginTop: 40,
          }}>
          <Icon
            type="material-community"
            name="menu"
            color="white"
            size={32}
            onPress={() => navigation.toggleDrawer()}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 15,
            marginTop: 40,
          }}>
          <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
            xpressFood
          </Text>
        </View>
  
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 15,
            marginTop: 40,
          }}>
          <BadgeIcon
            type="material-community"
            name="cart"
            size={35}
            color="white"
          />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    homeHeader: {
        flexDirection: 'row',
        backgroundColor: '#ff8c52',
        height: 100,
        justifyContent: 'space-between',
      },
      headercaption: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 58,
        marginLeft: 30,
      },
})

export default HomeHeader

