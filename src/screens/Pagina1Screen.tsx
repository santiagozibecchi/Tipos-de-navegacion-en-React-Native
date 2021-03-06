import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import React, { useEffect } from 'react';
// import { StackScreenProps } from '@react-navigation/stack';
import { colores, styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any> { }

interface DrawerProps extends DrawerScreenProps<any, any> { }

const Pagina1Screen = ({ navigation }: DrawerProps) => {


     useEffect(() => {

          navigation.setOptions({
               headerLeft: () => (
                    // <Button
                    //      title="Menu"
                    //      onPress={() => navigation.toggleDrawer()}
                    // />
                    <TouchableOpacity
                         onPress={() => navigation.toggleDrawer()}
                         style={{
                              marginLeft: 20,
                         }}>
                         <Icon name="menu-outline" size={35} color={colores.primary} />
                    </TouchableOpacity>
               ),
          });

     }, [navigation]);

     return (
          <View style={styles.globalMargin}>

               <Text style={styles.title}>Pagina1Screen</Text>

               <Button
                    title="Ir a la pagina"
                    onPress={() => navigation.navigate('Pagina2Screen')}
               />

               <Text style={{
                    marginVertical: 20,
                    fontSize: 20,
                    marginLeft: 5,
               }}>Navegar con argumentos</Text>

               <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                         style={{
                              ...styles.botonGrande,
                              backgroundColor: '#E7883B',
                         }}
                         onPress={() => navigation.navigate('PersonaScreen', {
                              id: 1,
                              nombre: 'Santiago',
                         })}
                    >
                         <Text style={styles.botonGrandeTexto}>Santiago</Text>
                         <Icon name="body-outline" size={35} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity
                         style={{
                              ...styles.botonGrande,
                              backgroundColor: '#0B6E99',
                         }}
                         onPress={() => navigation.navigate('PersonaScreen', {
                              id: 2,
                              nombre: 'Fernando',
                         })}
                    >
                         <Text style={styles.botonGrandeTexto}>Fernando</Text>
                         <Icon name="man-outline" size={35} color="white" />
                    </TouchableOpacity>
               </View>

          </View>
     );
};

export default Pagina1Screen;
