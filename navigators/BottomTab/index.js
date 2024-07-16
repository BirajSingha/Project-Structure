import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/StackScreens/Home';
import Inbox from '../../screens/StackScreens/Inbox';
import Trips from '../../screens/StackScreens/Trips';
import Profile from '../../screens/StackScreens/Profile';
import {Image, Platform, StyleSheet, View} from 'react-native';
import {COLORS, ICONS, SIZES} from '../../utils/themes';
import normalize from '../../utils/normalize';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.black,
        tabBarInActiveTintColor: COLORS.placeholderTextInput,
        tabBarStyle: {
          borderTopLeftRadius: normalize(20),
          borderTopRightRadius: normalize(20),
          height:
            Platform.OS === 'android'
              ? normalize(60)
              : SIZES.height <= 736
              ? normalize(65)
              : normalize(70),
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        tabBarLabelStyle: {
          marginBottom:
            Platform.OS === 'android'
              ? normalize(10)
              : SIZES.height <= 736
              ? normalize(10)
              : normalize(0),
        },
        tabBarIconStyle: {
          marginBottom:
            Platform.OS === 'android'
              ? -normalize(8)
              : SIZES.height <= 736
              ? -normalize(8)
              : normalize(0),
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={ICONS.home}
                  style={{
                    width: normalize(16),
                    height: normalize(16),
                    resizeMode: 'contain',
                    tintColor: focused
                      ? COLORS.black
                      : COLORS.placeholderTextInput,
                  }}
                />
                <View
                  style={[
                    styles.indicator,
                    {display: focused ? 'flex' : 'none'},
                  ]}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={ICONS.inbox}
                  style={{
                    width: normalize(16),
                    height: normalize(16),
                    resizeMode: 'contain',
                    tintColor: focused
                      ? COLORS.black
                      : COLORS.placeholderTextInput,
                  }}
                />
                <View
                  style={[
                    styles.indicator,
                    {display: focused ? 'flex' : 'none'},
                  ]}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={ICONS.trip}
                  style={{
                    width: normalize(16),
                    height: normalize(16),
                    resizeMode: 'contain',
                    tintColor: focused
                      ? COLORS.black
                      : COLORS.placeholderTextInput,
                  }}
                />
                <View
                  style={[
                    styles.indicator,
                    {display: focused ? 'flex' : 'none'},
                  ]}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={ICONS.profile}
                  style={{
                    width: normalize(16),
                    height: normalize(16),
                    resizeMode: 'contain',
                    tintColor: focused
                      ? COLORS.black
                      : COLORS.placeholderTextInput,
                  }}
                />
                <View
                  style={[
                    styles.indicator,
                    {display: focused ? 'flex' : 'none'},
                  ]}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    bottom: -normalize(28),
    width: '35%',
    height: normalize(4),
    borderTopLeftRadius: normalize(5),
    borderTopRightRadius: normalize(5),
    resizeMode: 'contain',
    backgroundColor: COLORS.black,
    alignSelf: 'center',
  },
});
