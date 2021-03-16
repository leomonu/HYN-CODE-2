
import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screens/HomeScreen'

import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen'
import { Icon } from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Setting : {
    screen : SettingScreen ,
    navigationOptions:{
      drawerIcon:<Icon
        name = 'setting'
        type  = 'fontawesome5'

      />

    }
    },
    
    // Notifications:{
    //   screen:NotificationScreen,
    //   navigationOptions:{
    //     drawerIcon:<Icon
    //       name = 'bell'
    //       type = 'font-awesome'
    //     />
    //   }
    // },

    
// Settings:{
//     screen : SettingScreen,
//     navigationOptions:{
//       drawerIcon:<Icon
//       name =  'settings'
//       type = 'font-awesome'
//       />
//     }
//     }

    
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Setting'
  })