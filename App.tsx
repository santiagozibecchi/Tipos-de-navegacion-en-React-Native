import 'react-native-gesture-handler';
import React from 'react';
import { MyStack } from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
     return (
          <NavigationContainer>
               <MyStack />
          </NavigationContainer>
     );
};

export default App;
