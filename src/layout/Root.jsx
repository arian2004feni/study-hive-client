import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Common/Navbar';
import Footer from '../component/Common/Footer';
import LoadingPage from '../component/LoadingPage';

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LoadingPage />
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;