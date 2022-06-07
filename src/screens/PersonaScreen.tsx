import { View, Text } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouteParams {
//      id: number,
//      nombre: string,
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { }

const PersonaScreen = ({ route, navigation }: Props) => {

     const { nombreUsuario } = useContext(AuthContext);

     // const params = route.params as RouteParams;
     const params = route.params;

     const userName = params.nombre;

     useEffect(() => {
          navigation.setOptions({
               title: params.nombre,
          });
     }, [navigation, params]);

     useEffect(() => {
          nombreUsuario(userName);
     }, []);

     return (
          <View style={styles.globalMargin}>
               <Text style={styles.title}>

                    {
                         JSON.stringify(params, null, 3)
                    }

               </Text>
          </View>
     );
};

export default PersonaScreen;
