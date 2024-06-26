import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.sass';

ReactDOM.render(
  <AuthProvider>
    <Router>
    <App />
    </Router>
   
  </AuthProvider>,
  document.getElementById('root')
);