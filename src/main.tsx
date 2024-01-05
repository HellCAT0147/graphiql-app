import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './main.scss';
import Loader from './components/viewers/docs-viewer/loader';

const App = lazy(() => import('./components/app'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer position="bottom-right" theme="colored" />
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
