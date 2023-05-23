import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Auth } from '../pages/Auth';
import { NotFound } from '../pages/NotFound';

export const AppRoutes = () => {
    return (
        <Router>
            <Link to="/" title="Dashboard">Dashboard</Link>
            <Link to="/login" title="Login">Login</Link>
            <Routes>
                <Route path="/" element={<Dashboard></Dashboard>} />
                <Route path="/login" element={<Auth></Auth>} />
                <Route path="/*" element={<NotFound></NotFound>} />
            </Routes>
        </Router>
    );
};