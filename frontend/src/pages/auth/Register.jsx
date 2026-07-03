//File: src/pages/auth/Register.jsx 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ name, email, password })
        });
        const data = await response.json();
            if (response.ok) {
                console.log('Registration successful:', data);
            } else {
                console.error('Registration failed:', data.message);
            }

        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
    <div className="auth-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button type="submit">Register</button>
        </form>
    </div>
  );
};

export default Register;
