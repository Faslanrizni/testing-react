import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import {PropertyProvider} from './context'
ReactDOM.createRoot(document.getElementById('root')).render(
    <PropertyProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </PropertyProvider>
    // document.getElementById('root')

);
