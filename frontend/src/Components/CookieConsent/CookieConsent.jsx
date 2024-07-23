import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent) {
            setVisible(false);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setVisible(false);
    };

    return (
        <div className={`cookie-consent ${!visible ? 'hidden' : ''}`}>
            <p>We use cookies to ensure that we give you the best experience on our website. By continuing to use this site, you accept our use of cookies.</p>
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleReject}>Reject</button>
        </div>
    );
};

export default CookieConsent;
