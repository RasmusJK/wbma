import {View,Text,Image,Button} from 'react-native';
import FormTextInput from '../components/FormTextInput';
import React,{useState} from 'react';
import useUploadForm from '../Hooks/UploadHooks'
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import {handleUpload} from "../Hooks/UploadHooks";
import PropTypes from 'prop-types';

const Upload = (props) => {
  const {handleTitleChange, handleDescriptionChange, inputs} = useUploadForm();
  const [toggleUpload, setToggleUpload] = useState(false);
  const [imageUri, setImageUri] = useState("");

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
      alert('Permission missing');
    }
  };

  const uploadImage = async () => {
    const res = await  handleUpload(imageUri, inputs.title, inputs.description);
    console.log(res);
    props.navigation.push('Home');

  };


  return (
    <View>
      <Text style={{textAlign: 'center'}}>Upload</Text>
      {toggleUpload &&
      <Image source={{uri: imageUri}} style={{width: 100, height: 100}}/>
      }
      <FormTextInput
        autoCapitalize='none'
        placeholder='title'
        onChangeText={handleTitleChange}
      />
      <FormTextInput
        autoCapitalize='none'
        placeholder='description'
        onChangeText={handleDescriptionChange}
      />
      <Button onPress={pickImage} title='select'/>
      <Button onPress={uploadImage} title='upload'/>
    </View>

  );
};

Upload.propTypes = {
  navigation: PropTypes.object,
};

export default Upload;
