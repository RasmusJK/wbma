import {useState, useEffect} from 'react';

const apiUrl = 'http://media.mw.metropolia.fi/wbma/';

const getAllMedia = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUrl = async () => {
    try {
      const response = await fetch(apiUrl + 'media/all');
      const json = await response.json();
      console.log('apihooks',json);

      const result = await Promise.all(json.files.map(async (item) => {
        const response = await fetch(apiUrl+'media/'+item.file_id);
        return await response.json();
      }));

      setData(result);
      setLoading(false);
    }catch (e) {
      console.error('error',e);
    }
  };
  useEffect(() => {
    fetchUrl();
  },[]);
  return [data, loading];
};

const login = async (data) => {

  const fetchOptions = {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(apiUrl + 'login', fetchOptions);
    return await response.json();
  }catch (e) {
    console.log('error', e.message);
  }
};

const register = async (data) => {

  const fetchOptions = {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(apiUrl + 'users', fetchOptions);
    return await response.json();
  }catch (e) {
    console.log('error', e.message);
  }
};


export {getAllMedia, login,register}

