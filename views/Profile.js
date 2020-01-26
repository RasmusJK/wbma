import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text,Button, AsyncStorage} from 'react-native';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const [user,setUser] = useState({});
  const userToState = async () => {
    const userFromStorage = await AsyncStorage.getItem('user');
    console.log('9',userFromStorage);
    const user = JSON.parse(userFromStorage);

    setUser(user);
  };
  useEffect(() => {
    userToState();
  },[]);

  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>username: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      <Button title="Logout!" onPress={signOutAsync} />
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

export default Profile;
