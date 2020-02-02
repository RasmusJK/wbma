import {useState} from 'react';
import validate from 'validate.js';

const constraints = {
  username: {
    presence: true,
    length: {
      minimum: 3,
      message: 'Username must be at least 3 characters long',
    },
  },
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 5,
      message: 'Password must be at least 5 characters long',
    },
  },
};

const checkInput = (uName, email, pWord) => {
  const check = validate({username: uName, email: email, password: pWord},
    constraints);
  return check;
};

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
  const handlePasswordRepeatRegister = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        repeatPassword: text,
      }));
  };
  return {
    handleUsernameRegister,
    handleEmailRegister,
    handlePasswordRegister,
    registerInputs,
    handlePasswordRepeatRegister,
  };
};

export default useRegisterForm;
export {checkInput};
