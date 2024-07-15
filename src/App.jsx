import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import CookieConsent from './Components/CookieConsent/CookieConsent';
import Home from './Pages/Home/Home';
import Contacts from './Pages/Contacts/Contacts';
import About from './Pages/About/About';
import './App.css'
const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <Footer />
<CookieConsent/>
    </div>
  );
}

export default App;
