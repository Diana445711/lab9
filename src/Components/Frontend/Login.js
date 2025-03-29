import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

function AuthenticationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleAuthentication = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:5000/validate_login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })
        .then((response) => {
            if (!response.ok) throw new Error('Login failed');
            return response.json();
        })
        .then((data) => {
            if (data.success) {
                navigate('/predict'); 
            } else {
                setMessage(data.message || 'Invalid credentials');
            }
        })
        .catch(() => setMessage('Login failed. Check credentials.'));
    };

    return (
        <div className="wrapper">
            <div className="format">
                <form onSubmit={handleAuthentication}>
                    <h1><b>Login</b></h1>
                    <div className="child">
                        <label><b>Username:</b></label>
                        <input 
                            type="text" 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="child">
                        <label><b>Password:</b></label>
                        <input 
                            type="password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit">Login</button>
                    {message && <p style={{ color: 'red', marginTop: '10px' }}>{message}</p>}
                </form>
            </div>
        </div>
    );
}

export default AuthenticationForm;