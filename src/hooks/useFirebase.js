import firebaseInitialization from "../utilities/firebase.init";
import { getAuth, signInWithPopup,onAuthStateChanged , signOut , GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

firebaseInitialization()
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState("");
    const [isLoading,setIsloading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () =>{
        setIsloading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if (user) {
                setUser(user)
            }else{
                setUser({})
            }
            setIsloading(false);
        })
    },[auth])

    const logOut = () =>{
        setIsloading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .catch(error=>setError(error.message))
        .finally(()=>setIsloading(false))
    }

    return {
        user,
        error,
        isLoading,
        logOut,
        setError,
        setIsloading,
        loginWithGoogle
    }
};

export default useFirebase;