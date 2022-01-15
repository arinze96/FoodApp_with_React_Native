import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="#ff8c52" />
      <RootNavigator/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
