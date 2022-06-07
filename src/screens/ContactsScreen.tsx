import { View, Text, Button } from 'react-native';
import React, { useContext } from 'react';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const ContactsScreen = () => {

     const { signIn, authState: { isLoggedIn } } = useContext(AuthContext);

     // const { isLoggedIn } = authState;

     return (
          <View style={styles.globalMargin}>
               <Text style={styles.title}>ContactsScreen</Text>

               {
                    (!isLoggedIn) && <Button title="Sigin" onPress={signIn} />
               }

          </View>
     );
};

export default ContactsScreen;
