import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Header from '../../components/Header';
import {Button, Icon, SocialIcon} from 'react-native-elements';
import RootClientTabs from '../../navigation/ClientTabs';

function SignInScreen({navigation}) {
  return (
    <View>
      <Header type="arrow-left" title="MY ACCOUNT" navigation={navigation} />

      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={styles.titleText}>sign-in</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>please enter your email and password</Text>
        <Text style={styles.text1}>register with your account</Text>
      </View>

      <View style={{marginTop: 20}}>
        <View>
          <TextInput style={styles.TextInput1} placeholder="Email" />
        </View>
        <View style={styles.TextInput2}>
          <Icon name="lock" iconStyle={{color: '#86939e'}} type="material" />
          <TextInput style={{width: '80%'}} placeholder="Password" />
          <Icon
            name="visibility-off"
            iconStyle={{color: '#86939e'}}
            type="material"
            style={{marginRight: 10}}
          />
        </View>
      </View>

      <View style={{marginHorizontal: 20, marginVertical: 30}}>
      <Button
        title="SIGN-IN"
        buttonStyle={styles.styledButton}
        titleStyle={styles.buttonTitle}
        onPress={() => navigation.navigate('DrawerNavigator')}
      />
    </View>

    <View style={{alignItems: 'center'}}>
      <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
        Forgot Password ?
      </Text>
    </View>

    <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
        OR
      </Text>
    </View>

    <View style={{marginHorizontal: 10, marginTop: 10}}>
      <SocialIcon
        title="Sign in With Facebook"
        button
        type="facebook"
        style={styles.SocialIcon}
        onPress={() => {}}
      />
    </View>

    <View style={{marginHorizontal: 10, marginTop: 10}}>
      <SocialIcon
        title="Sign in With Google"
        button
        type="google"
        style={styles.SocialIcon}
        onPress={() => {}}
      />
    </View>
    
    <View style={{alignItems: 'center', marginTop: 10}}>
      <Text style={{...styles.text1}}>New to xpressFood ?</Text>
    </View>
    <View style={{alignItems: 'center', marginTop: 15}}>
      <Button
        title="Create an Account"
        buttonStyle={styles.createButton}
        titleStyle={styles.createButtonTitle}
      />
    </View>
    </View>
  );
}

export default SignInScreen;

const styles = StyleSheet.create({
  titleText: {
    color: '#ff8c52',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  text1: {
    color: '#86939e',
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#869393',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderColor: '#869393',
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50,
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
});
