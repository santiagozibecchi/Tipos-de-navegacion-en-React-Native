import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

const Tab1Screen = () => {

     useEffect(() => {

          console.log('Tab1Screen Effect');

     }, []);

     return (
          <View>
               <Text>Tab1Screen</Text>
          </View>
     );
};

export default Tab1Screen;
