import React, { useState } from "react";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login(props){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    const navigate = useNavigate();

        // Password toggle handler
        const togglePassword = (e) => {
            e.preventDefault()
            // When the handler is invoked
            // inverse the boolean state of passwordShown
            setPasswordShown(!passwordShown);
        };
    

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
        <div className="login-main">
        <div className="auth-form-container">
            <section className="main-form">
                <h1>Login</h1>
                <h2>TUF-2000M Gambit Accesspoint</h2>
                { error !== "" ? <span className="loginErr">Error: {error.code}</span> : <></>}
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type={passwordShown ? "text" : "password"} placeholder="********" id="password" name="password" />
                    <label><input type="checkbox" key={Math.random()} checked={passwordShown} onChange={togglePassword} /> Show password</label>
                    <button type="submit">Log In</button>
                </form>
            </section>
        </div>
        </div>
    )
}
export default Login;