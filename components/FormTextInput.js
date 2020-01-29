import React from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';


const FormTextInput = (props) => {
  const {...otherProps} = props;
  return (
    <TextInput style={{fontSize: 16}}
      {...otherProps}
    />
  );
};

/*const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});*/

FormTextInput.propTypes = {
  style: PropTypes.object,
};

export default FormTextInput
