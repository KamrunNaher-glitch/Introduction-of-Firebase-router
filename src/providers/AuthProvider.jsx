import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

 export const AuthContext = createContext(null);

 const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const[loading,setloading]= useState(true);


    const createUser = (email,password) =>{
        setloading(true);
        return  createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,passward) =>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
   const signOutUser = () =>{
        setloading(true);
        return signOut(auth);
   }
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser =>{
            console.log('current User',currentUser);
            setUser(currentUser);
            setloading(false);


        })
        return () =>{
            unSubscribe();
        }
    })



    const authInfo = {
        name,
        createUser ,
        signInUser,
        user,
        signOutUser,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;