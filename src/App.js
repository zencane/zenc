import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UnderMaintenance from './components/UnderMaintenance';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/maintenance" element={<UnderMaintenance />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;