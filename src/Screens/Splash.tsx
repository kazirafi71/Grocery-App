import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      getUserData();
    }, 3000);
  }, [navigation]);

  const getUserData = async () => {
    const mEmail = await AsyncStorage.getItem('EMAIL');

    if (mEmail) {
      navigation.navigate('Home' as never);
    } else {
      navigation.navigate('Login' as never);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Images/img2.jpg')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          resizeMode: 'center',
        }}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
