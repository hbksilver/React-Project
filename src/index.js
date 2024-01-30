import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';
import Landing from './components/Landing';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/landing/:name/*" element={<Landing/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
