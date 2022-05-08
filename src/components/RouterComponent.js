import React, { Component } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

const routing = (
    <Router>
        <div>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/contact">Contact</Link> </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
);
