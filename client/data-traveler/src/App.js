import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DestinationPage from './pages/DestinationPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/destination/:id" element={ <DestinationPage /> } />
      </Routes>
    </Router>
  );
};

export default App;
