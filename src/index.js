import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {DataProvider} from './components/DataProvider/DataProvider'
import { initialState, Reducer } from './Utility/reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider reducer={Reducer} initialState={initialState}>
        <App />
    </DataProvider>
  </React.StrictMode>
);

