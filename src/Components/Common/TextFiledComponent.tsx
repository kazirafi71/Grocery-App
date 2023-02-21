import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

type InputFiledTypes = {
  placeholder?: string;
  value?: string | number;
  onChangeText?: any;
  secureTextEntry?: any;
};

const TextFiledComponent = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
}: InputFiledTypes) => {
  return (
    <>
      <TextInput
        style={styles.inputFiled}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};

export default TextFiledComponent;

const styles = StyleSheet.create({
  inputFiled: {
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 0.5,
    width: '85%',
    borderRadius: 5,
    paddingLeft: 10,
  },
});
