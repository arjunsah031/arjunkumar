"use client"
import React, { useState } from 'react';
import CssStyle from './Suscribe.module.css';
import axios from 'axios'; // Assuming you use axios for HTTP requests

const Suscribe = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Handle the subscription
    const handleSubscribe = async () => {
        if (!email) {
            setMessage('Please enter an email address.');
            return;
        }
        if (!emailRegex.test(email)) {
            setMessage('Please enter a valid email address.');
            return;
        }

            setLoading(true);


            setTimeout(() => {
                setLoading(false)
                setMessage('Subscription successful!')
                setEmail('')

                setTimeout(() => {
                    setMessage('')
                }, 2000);
            }, 2000);
          
            

        
            
       
        
    };

    return (
        <div className={CssStyle.Con}>
            <label>Subscribe to get important updates</label>
            <div className={CssStyle.InputCon}>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={CssStyle.BtnCon}>
                <button onClick={handleSubscribe} disabled={loading}>
                    {loading ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
                </button>
            </div>
            {message && <div className={CssStyle.Message}>{message}</div>}
        </div>
    );
};

export default Suscribe;
