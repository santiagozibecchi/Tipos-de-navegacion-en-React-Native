import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text, Platform } from 'react-native';

import Tab1Screen from './Tab1Screen';
// import Tab2Screen from './Tab2Screen';
// import Tab3Screen from './Tab3Screen';
import { MyStack } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { TopTapNavigator } from './TopTabNavigator';

export const Tabs = () => {

     return Platform.OS === 'ios'
          ? <TabsIOS />
          : <TabsAndroid />;
};


// TabBar para android

const ButtonTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
     return (
          <ButtonTabAndroid.Navigator
               sceneAnimationEnabled={true}
               barStyle={{
                    backgroundColor: colores.primary,
               }}
               screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, focused }) => {
                         // console.log(route.name)
                         let iconName: string = '';
                         switch (route.name) {
                              case 'Tab1Screen':
                                   iconName = 'laptop-outline';
                                   break;
                              case 'Tab2Screen':
                                   iconName = 'library-outline';
                                   break;
                              case 'MyStack':
                                   iconName = 'star-half-outline';
                                   break;
                         }

                         return <Icon name={iconName} size={22} color="white" />;
                    },
               })}
          >
               <ButtonTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
               <ButtonTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTapNavigator} />
               <ButtonTabAndroid.Screen name="MyStack" options={{ title: 'Stack' }} component={MyStack} />
          </ButtonTabAndroid.Navigator>
     );
};

// Tabar para ios:

const BottonTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
     return (
          <BottonTabIOS.Navigator
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
                         borderTopWidth: 0,
                         elevation: 0,
                    },
                    tabBarLabelStyle: {
                         fontSize: 15,
                    },
               })}
          >
               {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen} /> */}
               <BottonTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
               <BottonTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={TopTapNavigator} />
               <BottonTabIOS.Screen name="MyStack" options={{ title: 'Stack' }} component={MyStack} />
          </BottonTabIOS.Navigator>
     );

};
