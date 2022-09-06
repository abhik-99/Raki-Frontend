import React from 'react';
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";


import Landing from './pages/Landing';
import ContactUs from './pages/ContactUs';
import Mint from './pages/Mint';
import Owner from './pages/Owner';
import Browse from './pages/Browse';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Landing />}/>
        <Route path="contact" element={<ContactUs />} />
        <Route path="mint" element={<Mint />} />
        <Route path="admin-mint" element={<Owner />} />
        <Route path="browse/:cardId" element={<Browse />} />
      </Routes>
    </div>
  );
}

export default App;
