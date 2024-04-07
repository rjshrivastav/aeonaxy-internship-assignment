import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './routes/signup'
import ProfileCreation from './routes/ProfileCreation'
import Cards from './routes/Cards';
import EmailVarification from './routes/EmailVarification';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/profilecreation" element={<ProfileCreation  />}></Route>
        <Route path="/selectcards" element={<Cards />}></Route>
        <Route path="/emailvarification" element={<EmailVarification />}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App
