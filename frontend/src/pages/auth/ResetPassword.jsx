//File: src/pages/auth/ResetPassword.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/reset-password', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email })
        });
        const data = await response.json();
            if (response.ok) {
                navigate('/login');
            } else {
                console.error('Reset password failed:', data.message);
            }
        } catch (error) {
            console.error('Error during reset password:', error);
        }
    };

    return (
        <div className="auth-container">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                />

                </div>
                <button type="submit">Reset Password</button>
            </form>
        </div>
  );
}

export default ResetPassword;


