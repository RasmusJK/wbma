import {useState} from 'react';
import {AsyncStorage} from 'react-native';


const apiUrl ='http://media.mw.metropolia.fi/wbma/media';

const useUploadForm = () => {
  const [inputs, setInputs] = useState({});
  const handleTitleChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        title: text,
      }));
  };
  const handleDescriptionChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        description: text,
      }));
  };
  return {
    handleTitleChange,
    handleDescriptionChange,
    inputs,
  };
};



const handleUpload = async (image, title, desc) => {
console.log('image',image);

  const filename = image.split('/').pop();
  console.log('filename', filename);

  const match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;
  // fix jpg mimeType
  if (type === 'image/jpg') {
    type = 'image/jpeg';
  }


  let formData = new FormData();
  formData.append('file', {uri: image, name: filename, type});
  formData.append('title', title);
  formData.append('description', desc);

  const token = await AsyncStorage.getItem('userToken');

console.log('formData',formData);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'x-access-token' : token,
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  };

  try {

    console.log("token: " + token);
    const response = await fetch(apiUrl, fetchOptions);


    return await response.json();

  } catch (e) {
    console.log('Error: ', e.message);
  }
};

export default useUploadForm;
export {handleUpload};
