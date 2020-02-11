import {View,Text,Image,Button} from 'react-native';
import FormTextInput from '../components/FormTextInput';
import React from 'react';
import useUploadForm from '../Hooks/UploadHooks'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import {handleUpload} from "../Hooks/UploadHooks";

const Upload = (props) => {

  //const {handleTitleChange, handleDescChange, inputs} = useUploadForm();

  const pickImage = async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1
      });
      if (!result.cancelled) {
        setImageUri(result.uri);
        setToggleUpload(true);
        console.log(result.uri);
      }
    } else {
      alert('Permission is needed for this to work!');
    }
  };


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
      <Button onPress={pickImage} title='select'/>
      <Button title='upload'/>
    </View>

  );
};

export default Upload;
