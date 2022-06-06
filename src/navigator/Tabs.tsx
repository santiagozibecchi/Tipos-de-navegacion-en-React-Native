import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';
// import Tab3Screen from './Tab3Screen';
import { MyStack } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
     return (
          <Tab.Navigator
               sceneContainerStyle={{
                    backgroundColor: 'white',
               }}
               screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, focused, size }) => {
                         // console.log(route.name)
                         let iconName: string = '';
                         switch (route.name) {
                              case 'Tab1Screen':
                                   iconName = 'T1';
                                   break;
                              case 'Tab2Screen':
                                   iconName = 'T2';
                                   break;
                              case 'MyStack':
                                   iconName = 'ST';
                                   break;
                         }

                         return <Text style={{ color }}>{iconName}</Text>;
                    },
                    headerShown: false,
                    tabBarInactiveTintColor: colores.primary,
                    tabBarStyle: {
                         borderTopColor: colores.primary,
                         elevation: 0,
                    },
                    tabBarLabelStyle: {
                         fontSize: 15,
                    },
               })}
          >
               {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen} /> */}
               <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
               <Tab.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={Tab2Screen} />
               <Tab.Screen name="MyStack" options={{ title: 'Stack' }} component={MyStack} />
          </Tab.Navigator>
     );

};
