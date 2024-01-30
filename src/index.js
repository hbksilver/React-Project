import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<Home />}/>
      <Route path="home" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<ContactUs />}/>
    </Route>
  </Routes>
</BrowserRouter>
);
reportWebVitals();
