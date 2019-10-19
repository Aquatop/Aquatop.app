import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import CreateAquarium from '~/pages/CreateAquarium';

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
          CreateAquarium,
          Profile,
        }),
      },
      { initialRouteName: signed ? 'App' : 'Sign' }
    )
  );
