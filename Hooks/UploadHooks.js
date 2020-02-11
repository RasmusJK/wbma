import {useState} from 'react';

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

  let formData = new FormData();
  formData.append('file', image);
  formData.append('title', title);
  formData.append('description', desc);

  const fetchOptions = {
    method: 'POST',
    headers: {
      'x-access-token' : token,
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  };

  try {
    const response = await fetch(apiUrl, fetchOptions);
    console.log("Upload successful");
    return await response.json();
  } catch (e) {
    console.log('Error: ', e.message);
  }
};

export default useUploadForm;
export {handleUpload};
