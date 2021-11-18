import React from 'react'
import Home from './pages/Home/Home'
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Detail from './pages/Detail/Detail';
import Footer from './components/Footer';

const App = () => {

    return (
        <div id='app'>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}  /> 
                    <Route path="/:id" element={<Detail />} /> 
                    <Route element={<h1>Page not found <b>404</b></h1>} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App
