import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


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
                    <Icon name="airplane-outline" size={80} color={colores.primary} />
                    <Icon name="body-outline" size={80} color={colores.primary} />
                    <Icon name="finger-print-outline" size={80} color={colores.primary} />
                    <Icon name="happy-outline" size={80} color={colores.primary} />
                    <Icon name="pizza-outline" size={80} color={colores.primary} />
                    <Icon name="logo-javascript" size={80} color={colores.primary} />
                    <Icon name="logo-react" size={80} color={colores.primary} />
                    <Icon name="logo-bitcoin" size={80} color={colores.primary} />
               </Text>

          </View>
     );
};

export default Tab1Screen;
