import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';


const Tab1Screen = () => {

     const { top } = useSafeAreaInsets();

     useEffect(() => {

          console.log('Tab1Screen Effect');

     }, []);

     return (
          <View style={{
               ...styles.globalMargin,
               marginTop: top,
          }}>
               <Text style={styles.title}>Tab1Screen</Text>

               <Text>
                    <TouchableIcon iconName="airplane-outline" />
                    <TouchableIcon iconName="body-outline" />
                    <TouchableIcon iconName="finger-print-outline" />
                    <TouchableIcon iconName="happy-outline" />
                    <TouchableIcon iconName="pizza-outline" />
                    <TouchableIcon iconName="logo-javascript" />
                    <TouchableIcon iconName="logo-react" />
                    <TouchableIcon iconName="logo-bitcoin" />
               </Text>

          </View>
     );
};

export default Tab1Screen;
