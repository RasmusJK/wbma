import {View,Text,Image,Button} from 'react-native';
import FormTextInput from '../components/FormTextInput';
import React from 'react';



const Upload = (props) => {
  return (
    <View>
      <Text style={{textAlign: 'center'}}>Upload</Text>
      <Image></Image>
      <FormTextInput
        autoCapitalize='none'
        placeholder='title'
      />
      <FormTextInput
        autoCapitalize='none'
        placeholder='description'
      />
      <Button title='select'/>
      <Button title='upload'/>
    </View>

  );
};

export default Upload;
