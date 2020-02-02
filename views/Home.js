import React from 'react';
import List from '../components/List';
import {View} from 'react-native';

const Home = (props) => {
  const {navigation} = props;
  return (
    <View>
      <List navigation={navigation}/>
    </View>
  );
};

export default Home;
