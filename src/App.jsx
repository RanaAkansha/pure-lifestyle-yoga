import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TrainersPage from './pages/TrainersPage';
import RecommendationPage from './pages/RecommendationPage';
import BookingPage from './pages/BookingPage';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/recommendation" element={<RecommendationPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}
