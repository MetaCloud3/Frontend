import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from 'react-helmet-async';
import LogIn from './pages/LoginPage/Login';
import Join from './pages/JoinPage/Join';
import './App.css';

const App = () => {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <AnimatedRoutes />
            </BrowserRouter>
        </HelmetProvider>
    );
};

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LogIn />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/join" element={<Join />} />
            </Routes>
        </AnimatePresence>
    );
};

export default App;
