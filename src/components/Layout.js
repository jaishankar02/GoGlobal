import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = () => {
    return (
        <>
        <Navbar />
       
            <Outlet />
            <ScrollRestoration getKey={(location, matches) => {
                return location.pathname;
            }} />
             <Footer/>
        </>

    )
}

export default Layout