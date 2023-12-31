import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        // TODO: Make it more easy to understand

        // if (authStatus === true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }

        // let authValue = authStatus === true ? true : false

        if (authentication && !authStatus) {
            navigate('/login');
        } else if (!authentication && authStatus) {
            navigate('/');
        }
        setIsLoading(false);
    }, [authStatus, navigate, authentication]);

    return isLoading ? <h1>Loading...</h1> : <>{children}</>;
}
