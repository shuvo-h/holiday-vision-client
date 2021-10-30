import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { Col, Row } from 'react-bootstrap';
import './login.css';
import { IconContext } from "react-icons";
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';


const Login = () => {
    const {loginWithGoogle, setIsloading, setError, error} = useAuth();
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const location = useLocation();
    
    const onSubmit = data => console.log(data);

    const handleGoogleLogin = () =>{
        setIsloading(true)
        loginWithGoogle()
            .then(()=>{
                history.push(location.state?.from)
                setError("")
            })
            .catch(error=>setError(error.message))
            .finally(()=>setIsloading(false))
    }
    return (
        <section className="container login-form-container">
            <Row >
                <Col md={6} className="my-3">
                    <div className="login-form mx-auto p-3">
                    <h2 className="text-center my-3">Please Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="login-form d-flex flex-column">
                            <label htmlFor="">
                                Email:
                                <input className="m-2 ms-4" {...register("email", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} type="email" placeholder="Email addreass" />
                            </label>
                            <label htmlFor="">
                                Password:
                                <input className="m-2 ms-4" {...register("password")} type="password" placeholder="Password" />
                            </label>
                            <button className="submit-btn border rounded px-4 py-1 m-2 fw-bold text-success" type="submit" >Login</button> 
                        </form>
                        <hr />
                        <div className="text-center my-4">
                            <h2>OR</h2>
                            <h5>Login With</h5>
                                {
                                    error && <p>{error}</p>
                                }
                                <button onClick={handleGoogleLogin} className="google-btn border btn">
                                    <IconContext.Provider value={{ size:"50", color: "blue", className: "global-class-name" }}>
                                        <FcGoogle />
                                    </IconContext.Provider>
                                </button>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="d-none d-md-block my-3 pt-3">
                    <div className="welcome-card text-center">
                                <h4>Welcome to</h4>
                                <h2 className="text-success">Holiday <span className="text-primary">Vision</span></h2>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Login;