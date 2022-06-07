import { TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
     iconName: string,
}

const TouchableIcon = ({ iconName }: Props) => {

     const { changeFavIcon } = useContext(AuthContext);


     return (
          <TouchableOpacity
               onPress={() => changeFavIcon(iconName)}
          >
               <Icon
                    name={iconName}
                    size={80}
                    color={colores.primary} />
          </TouchableOpacity>
     );
};

export default TouchableIcon;
