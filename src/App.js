import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/**
 * import child component
 */
import Home from './pages/home';
import News from './pages/news'
import NewsDetail from './pages/new-detail'
import Description from './pages/description'
import Recruitment from './pages/recruitment'
export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/new-detail" element={<NewsDetail />}/>
                <Route path="/description" element={<Description />}/>
                <Route path="/recruitment" element={<Recruitment />}/>
            </Routes>
        </Router>
    );
}
