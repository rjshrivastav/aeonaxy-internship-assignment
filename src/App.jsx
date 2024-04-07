import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './src/components/signup'
import ProfileCreation from './src/components/ProfileCreation'
import Cards from './components/Cards';
import EmailVarification from './src/components/EmailVarification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Signup />} />
        <Route path="/profilecreation" element={<ProfileCreation  />} />
        <Route path="/selectcards" element={<Cards />} />
        <Route path="/emailvarification" element={<EmailVarification />} />
      </Routes>
    </Router>
  );
}

export default App
