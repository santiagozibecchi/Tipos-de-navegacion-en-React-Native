import 'react-native-gesture-handler';
import React from 'react';
// import { MyStack } from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

const App = () => {
     return (
          <NavigationContainer>
               {/* <MyStack /> */}
               <MenuLateralBasico />
          </NavigationContainer>
     );
};

export default App;
