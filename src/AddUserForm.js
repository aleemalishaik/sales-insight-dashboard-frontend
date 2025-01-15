import React, { useState } from 'react';
import axios from './axios';

const AddUserForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('SALES_REP');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('/api/users/add', {
                email,
                password,
                role,
            });
            setMessage(response.data);
        } catch (error) {
            setMessage('Error: ' + error.response?.data || error.message);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', marginBottom: '10px' }}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', marginBottom: '10px' }}
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        style={{ width: '100%', marginBottom: '10px' }}
                    >
                        <option value="SALES_REP">SALES_REP</option>
                        <option value="MANAGER">MANAGER</option>
                    </select>
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#FFF', border: 'none', cursor: 'pointer' }}>
                    Add User
                </button>
            </form>
            {message && <p style={{ marginTop: '20px' }}>{message}</p>}
        </div>
    );
};

export default AddUserForm;