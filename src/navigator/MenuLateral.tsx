import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
// import { MyStack } from './StackNavigator';
import { useWindowDimensions, Image, View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
// import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();

// const SettingsStackScreen = () => {
//      return (
//           <Stack.Navigator>
//                <Stack.Screen
//                     name="SettingsScreen"
//                     component={SettingsScreen}
//                />
//           </Stack.Navigator>
//      );
// };

export const MenuLateral = () => {

     const { width } = useWindowDimensions();

     return (
          <Drawer.Navigator
               screenOptions={{
                    headerShown: false,
                    drawerType: width >= 768 ? 'permanent' : 'front',
               }}
               drawerContent={(props) => <MenuInterno {...props} />}
          >
               <Drawer.Screen name="Tabs" component={Tabs} />
               <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          </Drawer.Navigator>
     );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

     return (

          <DrawerContentScrollView >

               {/* Parte del avatar */}
               <View style={styles.avatarContainer}>
                    <Image
                         style={styles.avatar}
                         source={{
                              uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                         }}
                    />
               </View>

               {/* Opciones del menu */}
               <View style={styles.menuContainer}>

                    <TouchableOpacity
                         onPress={() => navigation.navigate('Tabs')}
                         style={styles.menuBoton}>
                         <Text style={styles.menuItemsText}>Tabs</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress={() => navigation.navigate('SettingsScreen')}
                         style={styles.menuBoton}>
                         <Text style={styles.menuItemsText}>Ajustes</Text>
                    </TouchableOpacity>

               </View>


          </DrawerContentScrollView>

     );
};
