import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "flowbite/dist/flowbite.min.js";
import './index.scss'
import App from './App.jsx'
import store from './utils/stores/adminStores.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
