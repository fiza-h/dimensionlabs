import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ApplicationForm from './ApplicationForm';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apply" element={<ApplicationForm />} />
            </Routes>
        </Router>
    );
};

export default App;
