import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import IconComponent from '../Components/Common/IconComponent';
import Search from '../bottomNav/Search';
import Cart from '../bottomNav/Cart';
import Wishlist from '../bottomNav/Wishlist';
import Profile from '../bottomNav/Profile';
import Main from '../bottomNav/Main';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={{flex: 1}}>
      {selectedTab === 0 ? (
        <Main />
      ) : selectedTab === 1 ? (
        <Search />
      ) : selectedTab === 2 ? (
        <Cart />
      ) : selectedTab === 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View
        style={{
          width: '100%',
          height: 65,
          position: 'absolute',
          backgroundColor: '#fff',
          bottom: 0,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={[styles.tabBarStyle]}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <IconComponent
            name="home"
            color={selectedTab === 0 ? 'black' : 'gray'}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(1);
          }}
          style={[styles.tabBarStyle]}>
          <IconComponent
            name="search1"
            color={selectedTab === 1 ? 'black' : 'gray'}
            size={30}
          />
        </TouchableOpacity>

        <View style={[styles.tabBarStyle]}>
          <TouchableOpacity
            style={{
              backgroundColor: selectedTab === 2 ? 'green' : 'black',
              borderRadius: 40,
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setSelectedTab(2);
            }}>
            <IconComponent name="shoppingcart" color="white" size={30} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            setSelectedTab(3);
          }}
          style={[styles.tabBarStyle]}>
          <IconComponent
            name="hearto"
            color={selectedTab === 3 ? 'black' : 'gray'}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(4);
          }}
          style={[styles.tabBarStyle]}>
          <IconComponent
            name="user"
            color={selectedTab === 4 ? 'black' : 'gray'}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  tabBarStyle: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
