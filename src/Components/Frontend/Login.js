import React, { useState } from 'react';
import '../../App.css';

function AuthenticationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    function handleAuthentication() {
        fetch('http://127.0.0.1:5000/authenticate', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({'username':username, 'password':password}),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Authentication failed');
            }
            })
        .then(data => setMessage(data.message))
        .catch(error => setMessage('Authentication failed. Incorrect username or password.'));};

        
        

        return (
            <div class="wrapper">
            <div className= "format">
                
                <h1><b> Login </b></h1>
                <label className= "child">
                    <b>Username:</b>
                </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} required/>
                <br />
                <label className="child">
                    <b>Password:</b>
                </label>
                <input type="password"  onChange={(e) => setPassword(e.target.value)}  required/>
                <br />
                <button onClick={handleAuthentication}>Login</button>
                <br />
                
               {message && <p style={{color:'red', marginTop: '10px'}}>{message}</p>}
            </div>
            </div>
            );
            };

export default AuthenticationForm;
            