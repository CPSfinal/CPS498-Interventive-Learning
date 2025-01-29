import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  BrowserRouter } from 'react-router-dom';
import './Styles/index.scss'
import App from './App'

const rootElement = document.getElementById('root');

if(!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
