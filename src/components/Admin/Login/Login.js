import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {loginWithGoogle, setIsloading, setError, error} = useAuth();
    const history = useHistory();
    const location = useLocation();

    const handleGoogleLogin = () =>{
        loginWithGoogle()
            .then(()=>{
                history.push(location.state?.from)
                setError("")
            })
            .catch(error=>setError(error.message))
            .finally(()=>setIsloading(false))
    }
    return (
        <div>
            {
                error && <p>{error}</p>
            }
            <button onClick={handleGoogleLogin}>Login Google</button>
        </div>
    );
};

export default Login;