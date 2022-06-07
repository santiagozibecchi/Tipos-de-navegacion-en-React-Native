import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// Definir que informacion tedra y como va a lucir el initialState
export interface AuthState {
     isLoggedIn: boolean,
     username?: string,
     favoriteIcon?: string,
}

// Estado inicial
export const authInitialState: AuthState = {
     isLoggedIn: false,
     username: undefined,
     favoriteIcon: undefined,
};

// Lo usuaremos para decirle a react como luce y que expone el context
// Sirve para el context y para el value ya que lo que se manda es lo mismo
export interface AuthContextProps {
     authState: AuthState,
     signIn: () => void,
     logout: () => void,
     changeFavIcon: (iconName: string) => void,
     nombreUsuario: (username: string) => void
}

// Crear el contexto
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

// componente provedor del estado
interface props {
     children: JSX.Element | JSX.Element[]
}
// Hight Order Component que recibe sus hijos
export const AuthProvider = ({ children }: props) => {

     const [authState, dispatch] = useReducer(authReducer, authInitialState);

     const signIn = () => {
          dispatch({type: 'signIn'});
     };

     const changeFavIcon = (iconName: string) => {
          dispatch({type: 'changeFavIcon', payload: iconName});
     };

     const logout = () => {
          dispatch({type: 'logout'});
     };

     const nombreUsuario = (username: string) => {
          dispatch({ type: 'changeUserName', payload: username});
     };

     // tenemos que retornar un Provider que el context nos va a facilitar
     return (
          <AuthContext.Provider value={{
               authState,
               signIn,
               logout,
               changeFavIcon,
               nombreUsuario,
          }}>
               {
                    children
               }
          </AuthContext.Provider>
     );
};


