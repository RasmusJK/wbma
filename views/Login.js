import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import {login} from '../Hooks/APIHooks'
import FormTextInput from '../components/FormTextInput'
import useSignUpForm from '../Hooks/LoginHooks';



const Login = (props) => { // props is needed for navigation
  const {handleUsernameChange, handlePasswordChange, inputs} = useSignUpForm();
  const signInAsync = async () => {
    try {
      const user = await login(inputs);
      console.log('Login',user);
      await AsyncStorage.setItem('userToken',user.token);
      await AsyncStorage.setItem('user',JSON.stringify(user.user));
      props.navigation.navigate('App');
    } catch (e) {
      console.log('error', e.message)
    }

  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View style={styles.form}>
        <FormTextInput
          autoCapitalize='none'
          placeholder='username'
          onChangeText={handleUsernameChange}
        />
        <FormTextInput
          autoCapitalize='none'
          placeholder='password'
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
        />
        <Button title="Sign in!" onPress={signInAsync} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

// proptypes here

export default Login;
