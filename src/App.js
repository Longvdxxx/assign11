import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { useSelector } from 'react-redux';
import RegisterPage from './pages/RegisterPage';


function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!token ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!token ? <RegisterPage /> : <Navigate to="/" />}
        />

        <Route
          path="/"
          element={token ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/about"
          element={token ? <AboutPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
