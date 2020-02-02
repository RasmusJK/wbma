import React from 'react';
import {Image} from 'react-native';
import {View, Text} from 'react-native';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Single = (props) => {
  const filename = props.navigation.getParam('filename', 'Image not found');
  console.log('Image filename: ' + filename);
  return (
    <View>
      <Text style={{margin: 5, fontWeight: 'bold', fontSize: 20}}>
        {props.navigation.getParam('title', 'No title')}
      </Text>
      <Image style={{height: 350, width: 400}}
             source={{uri: mediaUrl + filename}}
      />
      <Text>
        {props.navigation.getParam('desc', 'No description')}
      </Text>

    </View>
  );
};

/*const styles = StyleSheet.create({
  title:{
    flex:1
  },
  image:{
    flex: 9,
    width: 350,
    height: 400
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});*/

export default Single;
