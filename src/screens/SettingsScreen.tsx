import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {

     const insets = useSafeAreaInsets();

     const { authState, authState: { favoriteIcon, isLoggedIn } } = useContext(AuthContext);


     return (
          <View style={{
               ...styles.globalMargin,
               marginTop: insets.top + 20,
          }}>
               <Text style={styles.title}>SettingsScreen</Text>

               <Text>{JSON.stringify(authState, null, 4)}</Text>

               {
                    (!isLoggedIn) && <Text> Necesita estar logeado para ver su icono favorito</Text>
               }
               {
                    (favoriteIcon) && <Icon
                         name={favoriteIcon}
                         size={150}
                         color={colores.primary}
                    />
               }


          </View>
     );
};

export default SettingsScreen;
