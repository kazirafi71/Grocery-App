import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import TextFiledComponent from '../Components/Common/TextFiledComponent';
import ButtonComponent from '../Components/Common/ButtonComponent';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const submitDataHandler = async () => {
    if (!email || !password) {
      Alert.alert('Please provide all information');
      return true;
    }

    const mEmail = await AsyncStorage.getItem('EMAIL');
    const mPassword = await AsyncStorage.getItem('PASSWORD');

    if (mEmail !== email || mPassword !== password) {
      Alert.alert('Invalid credentials');
      return true;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Login success');
      navigation.navigate('Home' as never);
    }, 2000);
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <Image
          source={require('../assets/Images/img2.jpg')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            resizeMode: 'center',
            alignSelf: 'center',
            marginTop: 100,
          }}
        />
        <Text style={styles.loginTitle}>Login</Text>
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
        <ButtonComponent
          title="Login"
          bgColor="black"
          textColor="white"
          onPress={submitDataHandler}
        />
        <Text
          style={{
            fontSize: 16,
            alignSelf: 'center',
            marginTop: 20,
            textDecorationLine: 'underline',
          }}
          onPress={() => {
            navigation.navigate('Signup' as never);
          }}>
          Create New Account
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginTitle: {
    alignSelf: 'center',
    fontSize: 30,
    marginTop: 20,
    fontWeight: '600',
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
