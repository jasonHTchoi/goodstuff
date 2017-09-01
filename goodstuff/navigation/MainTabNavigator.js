import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SingleEventScreen from '../screens/SingleEventScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ChooseCauseScreen from '../screens/ChooseCauseScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Discover: {
      screen: LinksScreen,
    },
    Profile: {
      screen: SettingsScreen,
    },
    Event: {
      screen: SingleEventScreen,
    },
    ChooseCause: {
      screen: ChooseCauseScreen,
    },
    SignUp: {
      screen: SignUpScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle';
            break;
          case 'Discover':
            iconName = Platform.OS === 'ios'
              ? `ios-link${focused ? '' : '-outline'}`
              : 'md-link';
            break;
          case 'Profile':
            iconName = Platform.OS === 'ios'
              ? `ios-options${focused ? '' : '-outline'}`
              : 'md-options';
              break;
          case 'Sign Up':
                iconName = Platform.OS === 'ios'
                  ? `ios-options${focused ? '' : '-outline'}`
                  : 'md-link';
                  break;
          case 'Choose Cause':
          iconName = Platform.OS === 'ios'
          ? `ios-options${focused ? '' : '-outline'}`
          : 'md-link';
          break;

            case 'Event':
            iconName = Platform.OS === 'ios'
              ? `ios-link${focused ? '' : '-outline'}`
              : 'md-link';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
