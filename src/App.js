import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UnderMaintenance from './components/UnderMaintenance';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/maintenance">Go to Maintenance Page</Link>
        </nav>
        <Routes>
          <Route path="/maintenance" element={<UnderMaintenance />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;