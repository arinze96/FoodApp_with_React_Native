import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import {Icon} from 'react-native-elements';

export default function Header({title, type, navigation}) {
  return (
      <View style={styles.header}>
      <View style={{marginLeft: 20, marginTop: 58}}>
        <Icon
          type="material-community"
          name={type}
          color="white"
          size={28}
          onPress={() =>{navigation.goBack()}}
        />
      </View>
      <View>
        <Text style={styles.headercaption}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#ff8c52',
    height: 100,
  },
  headercaption: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 58,
    marginLeft: 30,
  }
});
