import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../Components/Common/HeaderComponent';
import ProductCard from '../Components/ProductCard/ProductCard';

const categoryData = [
  'T-shirt',
  'Jeans',
  'Shoes',
  'Jacket',
  'T-shirt',
  'Jeans',
  'Shoes',
  'Jacket',
];

const Main = () => {
  return (
    <ScrollView>
      <HeaderComponent title="Grocery App" />
      <View style={styles.container}>
        <Image
          source={require('../assets/Images/banner.png')}
          style={{
            height: 200,
            width: '100%',
            alignSelf: 'center',
            borderRadius: 10,
            marginVertical: 10,
          }}
        />
        <View>
          <FlatList
            data={categoryData}
            horizontal
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={styles.buttonStyle}>
                  <Text style={{color: 'black'}}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View>
          <Text style={{fontSize: 25, color: 'black', marginVertical: 20}}>
            HeadPhone
          </Text>
        </View>
        <View>
          <FlatList
            data={categoryData}
            horizontal
            renderItem={({item, index}) => {
              return (
                <View style={{marginRight: 20}}>
                  <ProductCard />
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    width: '94%',
    alignSelf: 'center',
    marginBottom: 70,
  },
  buttonStyle: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    margin: 8,
  },
});
