import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import { MyStack } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

     const { width } = useWindowDimensions();

     return (
          <Drawer.Navigator
               screenOptions={{
                    headerShown: false,
                    drawerType: width >= 768 ? 'permanent' : 'front',
               }}
          >
               <Drawer.Screen name="StackNavigator" component={MyStack} />
               <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          </Drawer.Navigator>
     );
}