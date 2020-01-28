import {useState} from 'react';

const useRegisterForm = () => {
  const [registerInputs, setInputs] = useState({});

  const handleUsernameRegister = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        username: text,
      }));
  };
  const handleEmailRegister = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        email: text,
      }));
  };
  const handlePasswordRegister = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        password: text,
      }));
  };
  return {
    handleUsernameRegister,
    handleEmailRegister,
    handlePasswordRegister,
    registerInputs,
  };
};

export default useRegisterForm
