import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

type ButtonTypes = {
  onPress?: any;
  title?: string;
  bgColor?: string;
  textColor?: string;
};

const ButtonComponent = ({onPress, title, bgColor, textColor}: ButtonTypes) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        borderRadius: 7,
        alignSelf: 'center',
        height: 45,
        marginTop: 20,
      }}>
      <Text style={{color: textColor}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({});
