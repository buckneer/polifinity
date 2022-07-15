import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/home/Home";
import Search from "./components/search/Search";
function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                </Routes>

            </Router>

        </div>
    );
}

export default App;
