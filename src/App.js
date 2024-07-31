import React from 'react';
import LogIn from './pages/LoginPage/Login';
import Join from './pages/JoinPage/Join'
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogIn />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/join" element={<Join />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
