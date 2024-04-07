import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Signup from './routes/signup'
import ProfileCreation from './routes/ProfileCreation'
import Cards from './routes/Cards';
import EmailVarification from './routes/EmailVarification';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/profilecreation" element={<ProfileCreation  />} />
        <Route path="/selectcards" element={<Cards />} />
        <Route path="/emailvarification" element={<EmailVarification />} />
      </Routes>
  );
}

export default App
