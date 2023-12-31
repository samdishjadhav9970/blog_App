import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const logoutHandler = () => {
        setIsLoggingOut(true);
        authService.logout().then(() => {
            dispatch(logout());
        }).finally(() => {
            setIsLoggingOut(false);
        });
    };

    return (
        <button
            className={`inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full ${isLoggingOut ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={logoutHandler}
            disabled={isLoggingOut}
        >
            {isLoggingOut ? 'Logging Out...' : 'Logout'}
        </button>
    );
}

export default LogoutBtn;
