import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GlobalProvider } from './context/globalContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);

