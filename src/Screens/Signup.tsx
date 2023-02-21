import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import TextFiledComponent from '../Components/Common/TextFiledComponent';
import ButtonComponent from '../Components/Common/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const saveDataHandler = async () => {
    if (!email || !name || !password || !confirmPassword) {
      Alert.alert('Please provide all information');
      return true;
    }

    await AsyncStorage.setItem('NAME', name);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('PASSWORD', password);
    Alert.alert('Signup success.Please login');
    navigation.goBack();
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <Image
          source={require('../assets/Images/img2.jpg')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            resizeMode: 'center',
            alignSelf: 'center',
            marginTop: 50,
          }}
        />
        <Text style={styles.loginTitle}>Signup</Text>
        <TextFiledComponent
          placeholder="Enter fullname"
          onChangeText={setName}
          value={name}
          secureTextEntry={false}
        />
        <TextFiledComponent
          placeholder="Enter email"
          onChangeText={setEmail}
          value={email}
          secureTextEntry={false}
        />
        <TextFiledComponent
          placeholder="Enter password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <TextFiledComponent
          placeholder="Enter confirm password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry={true}
        />
        <ButtonComponent
          title="Signup"
          bgColor="black"
          textColor="white"
          onPress={saveDataHandler}
        />
        <Text
          style={{
            fontSize: 16,
            alignSelf: 'center',
            marginTop: 20,
            textDecorationLine: 'underline',
          }}>
          Already Have An Account?
          <Text
            onPress={() => {
              navigation.navigate('Login' as never);
            }}>
            Login
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  loginTitle: {
    alignSelf: 'center',
    fontSize: 30,
    marginTop: 20,
    fontWeight: '600',
    color: 'black',
  },
});
