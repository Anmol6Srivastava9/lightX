import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginForm from "./components/Loginform/Loginform";
import Home from "./components/Home/Home";
import ClosedComplaint from "./components/Closed-complaint/ClosedComplaint";
import ActiveComplaint from "./components/ActiveComplaint/ActiveComplaint";
import ContactUs from "./components/contact-us/contact-us";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LoginForm />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/closed-complaint' element={<ClosedComplaint />}></Route>
          <Route path='/active-complaint' element={<ActiveComplaint />}></Route>
          <Route path='/contact-us' element={<ContactUs />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
