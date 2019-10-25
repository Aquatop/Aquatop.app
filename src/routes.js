import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Home from '~/pages/Home';
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
        App: createSwitchNavigator({
          Home,
          NewAquarium: createStackNavigator(
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
          Profile,
        }),
      },
      { initialRouteName: signed ? 'App' : 'Sign' }
    )
  );
