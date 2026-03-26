import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, RouterProvider } from 'react-router';
import App from './App.jsx';
import RoutesComponent from './Routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  </StrictMode>
);
