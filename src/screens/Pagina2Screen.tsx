import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from '../theme/appTheme';
import { useNavigation, CommonActions } from '@react-navigation/native';

const Pagina2Screen = () => {

     const navigator = useNavigation( );

     useEffect(() => {
          navigator.setOptions({
               title: 'Hola mundo',
               // Sacar el back en el header de IOS
            headerBackTitle: ' ',
          });
     }, [navigator]);

     return (
          <View style={styles.globalMargin}>
               <Text style={styles.title}>Pagina2Screen</Text>

               <Button
                    title="Ir a la pagina 3"
                    onPress={() => navigator.dispatch(
                         CommonActions.navigate({name: 'Pagina3Screen'})
                    )}
               />
          </View>
     );
};

export default Pagina2Screen;
