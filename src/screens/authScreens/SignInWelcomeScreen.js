import React from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button} from 'react-native-elements';

export default function SignInWelcomeScreen({navigation}) {
  return (
    <ImageBackground
      style={{width: '100%', height: '100%'}}
      source={require('../../../images/edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg')}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingTop: 300,
          }}>
          <Text
            style={{
              fontSize: 29,
              color: 'white',
              fontWeight: 'bold',
            }}>
            DISCOVER RESTAURANTS
          </Text>
          <Text
            style={{
              fontSize: 29,
              color: 'white',
              fontWeight: 'bold',
            }}>
            IN YOUR AREA
          </Text>
        </View>
        <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 20}}>
          <View style={{marginHorizontal: 20, marginTop: 30}}>
            <Button
              title="SIGN-IN"
              buttonStyle={styles.styledButton}
              titleStyle={styles.buttonTitle}
              onPress={() => navigation.navigate('SignInScreen')}
            />
          </View>
          <View style={{marginHorizontal: 20, marginTop: 30}}>
            <Button
              title="Create an Account"
              buttonStyle={styles.createButton}
              titleStyle={styles.createButtonTitle}
              onPress={() => navigation.navigate('HomeScreen')}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  styledButton: {
    backgroundColor: '#ff8c52',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 50,
    paddingHorizontal: 20,
    borderColor: '#ff8c52',
  },
  createButtonTitle: {
    color: '#43484d',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
