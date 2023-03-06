import React, { useState } from "react";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

function Login(props){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate('/Home');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(error)
            console.log(errorCode, errorMessage)
        });
}

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            { error !== "" ? <span className="loginErr">{error.code}</span> : <></>}
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
                <button>test</button>
            </form>
        </div>
    )
}
export default Login;