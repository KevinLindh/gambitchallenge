import React, { useState } from "react";

function Error(props){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Error</h2>
        </div>
    )
}

export default Error;