import React from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
const Private = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const access_token = cookies.get('access', { httpOnly: true, path: '/' });
    if (!access_token) {
        navigate('/login');
    }

    return (
        <></>
    )
}

export default Private