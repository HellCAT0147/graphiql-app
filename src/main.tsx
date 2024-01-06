import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer position="bottom-right" theme="colored" />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
