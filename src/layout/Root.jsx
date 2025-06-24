import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Common/Navbar';
import Footer from '../component/Common/Footer';

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-base-300">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;