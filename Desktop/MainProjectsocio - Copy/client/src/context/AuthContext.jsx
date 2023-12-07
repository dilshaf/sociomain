import React, { useState,  createContext } from 'react';



export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const isLoggin = ()=>{
        return localStorage.getItem('token') ? true : false;
    }


  return (
    <AuthContext.Provider value={{ isLoggin }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;


