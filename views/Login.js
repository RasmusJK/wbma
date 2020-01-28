import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import {login,register} from '../Hooks/APIHooks'
import FormTextInput from '../components/FormTextInput'
import useSignUpForm from '../Hooks/LoginHooks';
import useRegisterForm from '../Hooks/RegisterHooks'



const Login = (props) => { // props is needed for navigation
  const {handleUsernameChange, handlePasswordChange, inputs} = useSignUpForm();
  const {handleUsernameRegister, handleEmailRegister,handlePasswordRegister, registerInputs} = useRegisterForm();

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

  const registerAsync = async () => {
    try {
      const res = await register(registerInputs);
      console.log('Register',res);
      if(res.message === "User created successfully") {
        const user = await login(registerInputs);
        console.log('user',user);
        await AsyncStorage.setItem('userToken', user.token);
        await AsyncStorage.setItem('user', JSON.stringify(user.user));

        props.navigation.navigate('App');
      }else {
        console.log(res.message);
      }
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

      <Text>Register</Text>
      <View style={styles.form}>
        <FormTextInput
          autoCapitalize='none'
          placeholder='username'
          onChangeText={handleUsernameRegister}
        />
        <FormTextInput
          autoCapitalize='none'
          placeholder='email'
          secureTextEntry={false}
          onChangeText={handleEmailRegister}

        />
        <FormTextInput
        autoCapitalize='none'
        placeholder='password'
        secureTextEntry={true}
        onChangeText={handlePasswordRegister}
      />
        <Button title="Register" onPress={registerAsync} />
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
