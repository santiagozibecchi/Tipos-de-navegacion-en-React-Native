import { StyleSheet } from "react-native";

export const colores = {
     primary: '#5856D6',
};

export const styles = StyleSheet.create({
     globalMargin: {
          marginHorizontal: 20,
     },
     title: {
          fontSize: 30,
          marginBottom: 10,
     },
     botonGrande: {
          width: 100,
          height: 100,
          backgroundColor: 'red',
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 5,
          marginTop: 5,
     },
     botonGrandeTexto: {
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
     },
     avatarContainer: {
          alignItems: 'center',
          marginTop: 15,
          // backgroundColor: 'red',
     },
     avatar: {
          width: 150,
          height: 150,
          borderRadius: 100,
     },
     menuContainer: {
          // backgroundColor: 'red',
          marginVertical: 30,
          marginHorizontal: 40,
     },
     menuBoton: {
          marginVertical: 10,
     },
     menuItemsText: {
          // backgroundColor: 'green',
          fontSize: 20,
     },
});
