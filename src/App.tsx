// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/home';
import Research from './pages/research';
import Team from './pages/team';
import Introduction from './components/introduction';
import Methodology from './components/methodology';
import Results from './components/results';
import Conclusions from './components/conclusions';
import References from './components/reference';
import Header from './components/header';
import Footer from './components/footer';
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />}>
              <Route path="introduction" element={<Introduction />} />
              <Route path="methodology" element={<Methodology />} />
              <Route path="results" element={<Results />} />
              <Route path="conclusions" element={<Conclusions />} />
              <Route path="references" element={<References />} />
            </Route>
            <Route path="/team" element={<Team />} />
          </Routes>
          <Outlet />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
