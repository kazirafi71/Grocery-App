import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import IconComponent from '../Common/IconComponent';

const ProductCard = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: 300,
        height: 360,
        borderRadius: 10,
      }}>
      <Image
        source={require('../../assets/Images/c-d-x-PDX_a_82obo-unsplash.jpg')}
        style={{width: 300, height: 250, borderRadius: 10}}
      />
      <TouchableOpacity style={styles.heartIcon}>
        <IconComponent color="black" size={30} name="hearto" />
      </TouchableOpacity>
      <View style={{padding: 10}}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,

            marginVertical: 10,
          }}>
          HeadPhone
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            100BDT
          </Text>
          <TouchableOpacity
            style={{
              borderRadius: 8,
              borderWidth: 1,
              borderColor: 'black',
              padding: 7,
            }}>
            <Text style={{color: 'black'}}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  heartIcon: {
    position: 'absolute',
    backgroundColor: 'white',
    right: 10,
    top: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
});
