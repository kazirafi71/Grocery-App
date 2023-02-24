import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeaderComponent = ({title}: {title: string}) => {
  return (
    <View>
      <Text
        style={{
          backgroundColor: 'white',
          fontSize: 30,
          color: 'black',
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({});
