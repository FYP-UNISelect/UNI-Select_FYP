import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UniversityDetailsPage from './pages/UniversityDetailsPage';
import ScholarshipPage from './pages/ScholarshipPage';
import ScholarshipDetails from './pages/ScholarshipDetailsPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/UniversityDetailsPage/:id" element={<UniversityDetailsPage />} />
          <Route path="/Scholarships" element={<ScholarshipPage />} />
          <Route path="/scholarship/:id" element={<ScholarshipDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
