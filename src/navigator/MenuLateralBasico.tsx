import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import { MyStack } from './StackNavigator';
import { Text, useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

     const { width } = useWindowDimensions();

     return (
          <Drawer.Navigator
               screenOptions={{
                    headerShown: false,
                    drawerType: width >= 768 ? 'permanent' : 'front',
               }}
          >
               <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={MyStack} />
               <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
          </Drawer.Navigator>
     );
};
