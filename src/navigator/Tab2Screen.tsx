import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

const Tab2Screen = () => {

     useEffect(() => {

          console.log('Tab2Screen Effect');

     }, []);

     return (
          <View>
               <Text>Tab2Screen</Text>
          </View>
     );
};

export default Tab2Screen;
