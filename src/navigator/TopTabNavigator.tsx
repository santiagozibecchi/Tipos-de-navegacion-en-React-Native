import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from "../screens/ChatScreen";
import ContactsScreen from "../screens/ContactsScreen";
import AlbumsScreen from "../screens/AlbumsScreen";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from "../theme/appTheme";

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {

     const { top } = useSafeAreaInsets();

     return (
          <Tab.Navigator
               style={{
                    paddingTop: top,
               }}
               // Fondo blanco de la aplicacion
               sceneContainerStyle={{
                    backgroundColor: 'white',
               }}
               screenOptions={({route}) =>({
                    tabBarIcon: ({ color, focused }) => {
                         // console.log(route.name)
                         let iconName: string = '';
                         switch (route.name) {
                              case 'Chat':
                                   iconName = 'mail-unread-outline';
                                   break;
                              case 'Contacts':
                                   iconName = 'person-circle-outline';
                                   break;
                              case 'Albums':
                                   iconName = 'images-outline';
                                   break;
                         }
                         return <Icon name={iconName} size={20} color={colores.primary} />;
                         // <Text style={{ color }}>{iconName}</Text>;

          // <Icon name="airplane-outline" size={80} color={colores.primary} />
                    },
                    tabBarPressColor: colores.primary,
                    tabBarShowIcon: true,
                    tabBarIndicatorStyle: {
                         backgroundColor: colores.primary,
                    },
                    tabBarInactiveTintColor: colores.primary,
                    tabBarStyle: {
                         shadowColor: 'transparent',
                         elevation: 0,
                    },
               })}
          >
               <Tab.Screen name="Chat" component={ChatScreen} />
               <Tab.Screen name="Contacts" component={ContactsScreen} />
               <Tab.Screen name="Albums" component={AlbumsScreen} />
          </Tab.Navigator >
     );
};
