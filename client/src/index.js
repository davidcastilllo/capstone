import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

const Main = () => (
 <BrowserRouter basename='/capstone'>
  <Router />
 </BrowserRouter>
 );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);

