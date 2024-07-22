import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import CookieConsent from './Components/CookieConsent/CookieConsent';
import SignUp from './Authentication/Signup/SignUp';
import SignIn from './Authentication/SignIn/SignIn';
import Home from './Pages/Home/Home';
import Contacts from './Pages/Contacts/Contacts';
import About from './Pages/About/About';
import Booking from './Pages/Bookings/Booking';
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
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Booking' element={<Booking />} />
          <Route path='/SignIn' element={<SignIn />} />
        </Routes>
      </main>
      <Footer />
<CookieConsent/>
    </div>
  );
}

export default App;
