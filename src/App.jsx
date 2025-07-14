import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import MovieDetails from './pages/MovieDetails';
import './styles/theme.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
