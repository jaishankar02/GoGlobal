import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <Outlet />
            <ScrollRestoration getKey={(location, matches) => {
                return location.pathname;
            }} />
        </>

    )
}

export default Layout