import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
// import App from './App';
import "./i18n";
import { Users } from './pages/Users/Users';
// import { Login } from './pages/Login/Login';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(  
    <Provider store={store}>
      <BrowserRouter>      
        <Users />
      </BrowserRouter>  
    </Provider>
);
