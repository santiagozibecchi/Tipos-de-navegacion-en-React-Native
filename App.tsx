import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { MyStack } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';
// import { Tabs } from './src/navigator/Tabs';

const App = () => {
     return (
          <NavigationContainer>
               <AppState>

                    {/* <MyStack /> */}
                    {/* <MenuLateralBasico /> */}
                    <MenuLateral />
                    {/* <Tabs /> */}

               </AppState>
          </NavigationContainer>
     );
};

interface props {
     children: JSX.Element | JSX.Element[]
}
const AppState = ({ children }: props) => {

     return (
          <AuthProvider>
               {children}
          </AuthProvider>
     )
}

export default App;
