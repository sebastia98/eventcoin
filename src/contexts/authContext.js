import React, {useEffect, useState} from 'react';

const USER_KEY = 'userLogged'

export const initialValue = {
  user: {},
  setUser: () => {},
};

const AuthContext = React.createContext(initialValue);

export const AuthContextProvider = ({ children }) => {
  const [ user, setUser ] = useState({});

    useEffect(() => {
        const userAsString = localStorage.getItem(USER_KEY)
        if(userAsString) {
            setUser(JSON.parse(userAsString))
        }
    }, [])
    
    useEffect(() => {
        if (Object.keys(user).length) {
            localStorage.setItem(USER_KEY, JSON.stringify(user))
        } else {
            localStorage.removeItem(USER_KEY);
        } 
    }, [user])

  return (
    <AuthContext.Provider
      value={{ user, setUser }}
      >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;