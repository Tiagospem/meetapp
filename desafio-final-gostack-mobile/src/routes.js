import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

// import Icon from 'react-native-vector-icons/MaterialIcons'

import Main from '~/pages/Main'
import Subscriptions from '~/pages/Subscriptions'
import Subscription from '~/pages/Subscription'
import Profile from '~/pages/Profile'
import SignIn from '~/pages/SignIn'
import SignUp from '~/pages/SignUp'

export default isSigned =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp
        }),
        App: createStackNavigator(
          {
            tabs: createBottomTabNavigator(
              {
                Main,
                Subscriptions,
                Profile
              },
              {
                resetOnBlur: false,
                tabBarOptions: {
                  activeBackgroundColor: 'rgba(51, 51, 51, 0.1)',
                  keyboardHidesTabBar: true,
                  activeTintColor: '#515151',
                  inactiveTintColor: 'rgba(51, 51, 51, 0.6)',
                  style: {
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    borderTopColor: 'rgba(51, 51, 51, 0.1)'
                  }
                }
              }
            ),
            Subscription
          },
          {
            defaultNavigationOptions: {
              headerTransparent: true,
              headerLeft: null
            }
          }
        )
      },
      {
        initialRouteName: isSigned ? 'App' : ''
      }
    )
  )

/*

  createBottomTabNavigator(
          {
            Main,
            Subscriptions,
            Profile
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              activeBackgroundColor: 'rgba(51, 51, 51, 0.1)',
              keyboardHidesTabBar: true,
              activeTintColor: '#515151',
              inactiveTintColor: 'rgba(51, 51, 51, 0.6)',
              style: {
                backgroundColor: '#fff',
                borderTopWidth: 1,
                borderTopColor: 'rgba(51, 51, 51, 0.1)'
              }
            }
          }
        )

  */
