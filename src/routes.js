import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AddIcon from 'react-native-vector-icons/Feather';
import AquariumIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Home from '~/pages/HomePage/Home';
import EditAquarium from '~/pages/HomePage/EditAquarium';
import Monitoring from '~/pages/HomePage/Monitoring';
import Notification from '~/pages/HomePage/Notification';

import Profile from '~/pages/Profile';

import SelectAquarium from '~/pages/NewAquarium/SelectAquarium';
import InsertPin from '~/pages/NewAquarium/InsertPin';
import CustomizeAquarium from '~/pages/NewAquarium/CustomizeAquarium';

export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            HomePage: {
              screen: createStackNavigator(
                {
                  Home,
                  EditAquarium,
                  Monitoring,
                  Notification,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Meus Aquários',
                tabBarIcon: ({ tintColor }) => (
                  <AquariumIcon
                    name="zodiac-aquarius"
                    size={45}
                    color={tintColor}
                  />
                ),
              },
            },
            NewAquarium: {
              screen: createStackNavigator(
                {
                  SelectAquarium,
                  InsertPin,
                  CustomizeAquarium,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Agendar',
                tabBarIcon: (
                  <AddIcon
                    name="plus"
                    size={42}
                    color="rgba(255, 255, 255, 0.6)"
                  />
                ),
              },
            },
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              showLabel: false,
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#005579',
                borderTopColor: 'rgba(255, 255, 255, 0.2)',
                borderTopWidth: 1,
                height: 60,
              },
            },
          }
        ),
      },
      { initialRouteName: signed ? 'App' : 'Sign' }
    )
  );
